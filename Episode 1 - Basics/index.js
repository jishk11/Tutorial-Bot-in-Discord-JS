const Discord = require('discord.js');
const Client = new Discord.Client();

Client.once('ready', ()=>{
    console.log('Bot is ready!');
});

Client.login('YOUR TOKEN HERE!')
