const { MessageEmbed } = require("discord.js");

module.exports = {

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Resumed the music for you!")
      .setColor("YELLOW")
      .setAuthor("Music has been Resumed!")
      return message.channel.send(xd);
    }
    return Error("There is nothing playing in this server.", message.channel);
  },
};






module.exports.help = {
name: "resume",
  description: "resumes the music"
}