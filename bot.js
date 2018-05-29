const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Bonjour') {
    	message.reply('Bonjour !');
  	}
});

client.on('message', message => {
    if (message.content === '++') {
    	message.reply('A plus !');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
