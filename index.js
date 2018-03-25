const Discord = require('discord.js')
const bot = new Discord.client

bot.on('ready', function (){
	bot.user.setAvatar('./avatar.png')
	bot.user.setGame('MeaxisBot [BETA].')
	.then (() => console.log('Avatar : ON')
	.catch(console.error)	
})

bot.on('message', function (message) {
   if (message.content === ';ping') {
    message.reply('MeaxisBot est actuellement en ligne et les systèmes sont opérationnels. En cas de réponses après plus de une minute, merci de vous rendre sur "network.meaxis.fr/creations/meaxisbot/support"')
   }
 })

 bot.on('guildMemberAdd', function (member) {
 	member.createDM().then(function (channel) {
 	 return channel.send('Bienvenue ' + member.displayName)	
  }).catch(console.error)
})


bot.login('NDI3MjI3NzUwMzk1NDEyNDgw.DZiQRg.Nn8Xq61vSxLE6xZ9-mkoFXFCKjI')