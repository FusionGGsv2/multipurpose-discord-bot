const { MessageEmbed } = require("discord.js");


module.exports = {

  run: async function (client, message, args) {
    const channel = message.member.voice.channel
    if (!channel)return Error("I'm sorry but you need to be in a voice channel to play music!", message.channel);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue)return Error("There is nothing playing that I could stop for you.", message.channel);
   if(!serverQueue.connection)return
if(!serverQueue.connection.dispatcher)return
     try{
      serverQueue.connection.dispatcher.end();
      } catch (error) {
        message.guild.me.voice.channel.leave();
        message.client.queue.delete(message.guild.id);
        return Error(`:notes: The player has stopped and the queue has been cleared.: ${error}`, message.channel);
      }
    message.client.queue.delete(message.guild.id);
    serverQueue.songs = [];
    message.react("✅")
  },
};





module.exports.help = {
name: "stop",
description: "stops the song"

}