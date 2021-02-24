const discord = require('discord.js');
const client = new discord.Client({disableEveryone: true});
const token = process.env.token;

const fs = require('fs');
client.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        client.commands.set(props.help.name, props);
    });
});

client.on('ready', () => {
console.log('client is online!'); 
client.user.setActivity(`coded by FusionGGs`);

client.on('message', async message => {
  
if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = process.env.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    //
    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);



})})


client.login(process.env.token)