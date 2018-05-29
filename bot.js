const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDUwMDk5MzE1MjI2OTY4MDY0.De8ojg.-Sa26vmSHjwEfjucs96j2nY_5kY);
