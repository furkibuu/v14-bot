let { EmbedBuilder, InteractionType } = require("discord.js");
let { readdirSync } = require("fs");

let commandFiles = readdirSync('./Commands').filter(file => file.endsWith('.js'));

 module.exports = {
	name: 'interactionCreate',
	execute: async(interaction) => {
  let client = interaction.client;
   if (!interaction.type == InteractionType.ApplicationCommand) return;
   if(interaction.user.bot) return;

	for (let file of commandFiles) {
        let command = require(`../Commands/${file}`);
        if(interaction.commandName.toLowerCase() === command.data.name.toLowerCase()) {
        command.run(client, interaction)
    }
	}
  }}