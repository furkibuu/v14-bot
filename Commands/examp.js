
let { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("examp")
    .setDescription("Examp Commands!"),
    run: async (client, interaction) => {
       
       
      interaction.reply({content: `✅ Successful!` , ephemeral: true})

      
     }
 };
