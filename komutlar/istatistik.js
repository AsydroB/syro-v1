const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
  .addField(`<:ping:797077332480360450>  »  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`<:developer:785978457087541288>  » Yapımcım` ,`<@720236392604631090>`,true)
  .addField(`:label: » Node.js`, `${process.version}`, true)
 .addField(`:bar_chart: » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(`<:birinsansilueti:797104107742691348>  » Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
 .addField(`<:pngegg1:797152253370695721> » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .setColor("RANDOM")
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'istatistik şeql falan',
  usage: 'istatistik'
};