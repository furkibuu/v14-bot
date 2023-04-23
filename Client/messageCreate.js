let { Prefix } = require('../config');
let {EmbedBuilder, ActionRowBuilder ,   ButtonBuilder} = require("discord.js")
 let { readdirSync } = require("fs");
  
module.exports = {
	name: 'messageCreate',
	execute: async(message) => {
  let client = message.client;
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
 
  
  let furkan = new ActionRowBuilder()
  .addComponents(
new ButtonBuilder()
.setLabel("Invite")
.setStyle(5)
.setURL("https://discord.com/api/oauth2/authorize?client_id=756523167903776851&permissions=8&scope=applications.commands%20bot"),
new ButtonBuilder()
.setLabel("Support Server")
.setStyle(5)
.setURL("https://discord.gg/GeZTcbWT68")
)
  
  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
  message.reply({embeds : [new EmbedBuilder()
  .setColor("Random")
.setThumbnail(client.user.avatarURL({dynamic : true}))
  .setTitle("Hello, you tagged me?")
  .setDescription(`
  Hi I guess you tagged me?
 Just type /help to use my commands
  `)
  
  ], components : [furkan]})
}
  }};