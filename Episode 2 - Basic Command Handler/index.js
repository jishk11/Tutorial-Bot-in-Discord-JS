const Discord = require('discord.js');
const Client = new Discord.Client();

const prefix = '!';


Client.once('ready', ()=>{
    console.log('Bot is ready!');
});

Client.on('message', message =>{
    if(!message.content.startsWith(prefix)|| message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //feel free to change the command names and response to your liking!
    if (command === 'ping'){ 
        message.channel.send(`Pong! Latency is **${Date.now() - message.createdTimestamp}ms.**`);
    } else if (command == 'youtube'){
        message.channel.send('**Check out Jishan\'s YouTube channel: https://youtube.com/jishankharbanda1**');
    }
});

Client.login('YOUR TOKEN HERE')
