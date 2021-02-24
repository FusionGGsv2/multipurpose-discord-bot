const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    async run (client, message, args){
      
        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`help`', 'get all the available commands')

      const giveaway = new Discord.MessageEmbed()
      .setTitle('Giveaway')
      .addField('`!start`', 'starts a giveaway')
      .addField('`!end`', 'ends a giveaway') 
      .addField('`!reroll`', 'rerolls a giveaway') 
      .setTimestamp() 
        
    const economy = new Discord.MessageEmbed()
    .setTitle('Economy')
    .addField('`!buy`', 'buy an item from the shop')
    .addField('`!bal`', 'shows your balance')
    .addField('`!daily`', 'claim your daily reward every 24h') 
    .addField('`!store`', 'view the store')
    .addField('`!work`', 'work and earn money')
    .addField('`!inventory`', 'get your inventory')
    .setTimestamp()
   
    const music = new Discord.MessageEmbed()
    .setTitle('music')
    .addField('!stop', 'stops the music')
    .addField('!play', 'plays music from youtube')
    .addField('!resume', 'resumes the currently playing song')
    .addField('!pause', 'pauses the music')    
    .addField('!queue', 'shows the queue')
    .addField('!remove', 'removes a song from the queue')
    .addField('!skip', 'skips the song')
    
    
    
    
    const pages = [              
               giveaway,
                economy,
                music,
               utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}







      

module.exports.help = {
name: "help",
  description: "gets all the commands"
};