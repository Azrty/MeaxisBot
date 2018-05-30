const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Ok Google, aide.') {
    	message.reply('Je ne peux pas actuellement vous aider. Le bot est en BETA et ne possède pas de commandes.');
  	}
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'join-leave');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bienvenue ${member} sur le serveur ! Tu peux dire "Ok Google, Aide." pour être aidé.`);
});


client.on('message', message => {
    if (message.content === 'Ok Google, rien.') {
    	message.reply('Hahaha, je trouve ca très drole.');
  	}
});


client.on('message', message => {
    if (message.content === 'Ok Google, 55.') {
    	message.reply('Désolé, mais je ne sais pas comment vous aider. Recherches Liées : Smot.');
  	}
});


client.on('message', message => {
    if (message.content === 'Ok Google, leaf.') {
    	message.reply("L'élu a été invoqué. Préparez les Smots.");
  	}
});


client.on('message', message => {
    if (message.content === 'Ok Google, quelle est la hauteur de la tour Eiffel ?') {
    	message.reply("La tour Eiffel fait 300 mètres et a 3 étages..");
  	}
});

bot.user.setPresence({ status: 'online', game: { name: 'Potatoes Simulator 98' } });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
