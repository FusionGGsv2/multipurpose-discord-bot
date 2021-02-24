const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new MessageEmbed()
    .setTitle("<:gift:721476177574756404> my Invite Link")
    .setDescription('Invite me with this **[link](https://discord.com/oauth2/authorize?client_id=773984182178152478&scope=bot&permissions=3145)**!')
    .setColor('RANDOM');
    message.channel.send(embed);
}

module.exports.help = {
    name: "invite",
    description: "Sends my invite link.",
 
    aliases: []
}