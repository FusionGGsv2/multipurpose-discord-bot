const { MessageEmbed } = require("discord.js")

module.exports = {


  run: async function (client, message, args) {
   const queue = message.client.queue.get(message.guild.id);
    if (!queue) return Error("There is no queue.",message.channel).catch(console.error);
    if (!args.length) return Error(`Usage: ${client.config.prefix}\`remove <Queue Number>\``);
    if (isNaN(args[0])) return Error(`Usage: ${client.config.prefix}\`remove <Queue Number>\``);
    if (queue.songs.length == 1) return Error("There is no queue.",message.channel).catch(console.error);
    if (args[0] > queue.songs.length)
      return Error(`The queue is only ${queue.songs.length} songs long!`,message.channel).catch(console.error);
try{
    const song = queue.songs.splice(args[0] - 1, 1); 
    Error(`❌ **|** Removed: **\`${song[0].title}\`** from the queue.`,queue.textChannel).catch(console.error);
                   message.react("✅")
} catch (error) {
        return Error(`:notes: An unexpected error occurred.\nPossible type: ${error}`, message.channel);
      }
  },
};


module.exports.help = {
  name: "remove",
  description: "removes a song from the queue"
};
