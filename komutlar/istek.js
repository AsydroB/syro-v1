const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async(client, message, args) => {
  
let type = args.slice(0).join(' ');
if (type.length < 1) {
  
const embed = new Discord.MessageEmbed()

.setColor('RED')
.setDescription('Doğru Kullanım : ${prefix}istek-bildir <isteğiniz>')

return message.channel.send(embed)
}
  
const embed = new Discord.MessageEmbed()

.setColor('GREEN')
.setDescription('İstek Kodunuz Başarıyla Bildirildi.\nEn Yakın Zamanda Size Cevap Vereceğiz!')

message.channel.send(embed)
  
const embed2 = new Discord.MessageEmbed()

.setColor("GREEN")

.setDescription(`**${message.author.tag}** Adlı Kullanıcının **İsteği ;**`)

.addField(`:envelope: **Gönderen Kişinin Bilgileri ;**`, `:white_small_square: Kullanıcı İd : ${message.author.id}\n:white_small_square: Kullanıcı Adı : ${message.author.username}\n:white_small_square: Kullanıcı Tagı : ${message.author.discriminator}`)
.addField(":pencil: **Gönderilen İstek/Tavsiye Mesajı**", type)

.setThumbnail(message.author.avatarURL)

client.channels.cache.get('796378061120602132').send(embed2); 

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["istek-bildir","istekbildir"],
    permLevel: 0
}

exports.help = {
    name: 'istek',
    description: 'isteğinizi belirtilen kanala bildirir.',
    usage: 'istek'
}