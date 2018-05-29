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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
