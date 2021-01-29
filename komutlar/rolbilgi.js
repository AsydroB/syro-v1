const Discord = require("discord.js");
const superagent = require("superagent");
const ayarlar = require('../ayarlar.json');

module.exports.run = async (client,message,args) => {
 
  let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(rol => rol.id === args[0]);
  
  var wasait = new Discord.MessageEmbed()
  
  .setColor("RED")
  .setDescription(`Hey, bir rol etiketlemelisin! Örneğin: ${ayarlar.prefix}**rol-bilgi <@rol>**`);
  
  if(!role) return message.channel.send(wasait);
  
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  
  var wasaitEmbed = new Discord.MessageEmbed()
  
  .setColor('GREEN')
  
  .addField('Rol Adı :', role.name, true)
  .addField('İd :', role.id, true)
  .addField('Bu Role Sahip Kullanıcılar :', role.members.size, true)
  .addField('Renk :', role.hexColor, true)
  .addField('Etiket? :', role.mentionable ? '\nEvet Var' : 'Hayır Yok', true)
  .addField('Rol Oluşturma Tarihi :', moment(role.createdAt).format("LL"), true)
  
  message.channel.send(wasaitEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rol-bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'rolbilgi',
  description: 'Etiketlediğin rolün bilgilerini verir.',
  usage: 'rolbilgi'
};