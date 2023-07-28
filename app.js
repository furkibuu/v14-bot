let { GatewayIntentBits , Client , Collection, ActivityType } = require("discord.js")
let { readdirSync } = require("fs")
let IncludedIntents = Object.entries(GatewayIntentBits).reduce((t, [, V]) => t | V, 0)
let client = new Client({ intents: IncludedIntents })
let {Token} = require("./config")
let { REST } = require('@discordjs/rest');
let { Routes } = require('discord-api-types/v10');

let rest = new REST({ version: '10' }).setToken(Token);
// Event Loader 
let eventFiles = readdirSync('./Client').filter(file => file.endsWith('.js'));

for (let file of eventFiles) {
	let event = require(`./Client/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
// Commands Loader
client.commands = new Collection()
let commands = [];

let commandFiles = readdirSync('./Commands').filter(file => file.endsWith('.js'));
for (let file of commandFiles) {
	let command = require(`./Commands/${file}`);
  commands.push(command.data.toJSON());
  client.commands.set(command.data.name, command);
}
// Slash Loader and Ready! 
client.on("ready", async () => {
    try {
        await rest.put(
            Routes.applicationCommands(client.user.id),
            { body: commands },
        );
    } catch (error) {
        console.error(error);
    }
console.log(`Slash Application Online`)
})


//Token
client.login(Token).then(console.log(`TOKEN ONLINE ✅`))
