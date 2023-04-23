const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("My ping!"),
    run: async (client, interaction) => {
        let em = new EmbedBuilder()
        .setAuthor({name : `${client.user.tag} Ping`, iconURL: client.user.avatarURL()})
        .setDescription(`:ping_pong: **My ping** \`${client.ws.ping}\`**ms!**`)
        .setColor("Random")
      interaction.reply({embeds : [em] , ephemeral: true})

      
     }
 };