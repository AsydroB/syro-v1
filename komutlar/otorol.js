const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply('Bu komutu kullanmak için yetkin yetersiz')
    let komut = args[0]
    if(!komut) return message.channel.send('Lütfen ayarla veya sıfırla yazınız.')

    if(komut === 'ayarla'){
        let rol = message.mentions.roles.first()
        if(!rol) return message.channel.send('Lütfen rol etiketleyerek dener misin?')

        db.set(`SwenlorOtorol.${message.guild.id}`, rol.id)
        const embed = new Discord.MessageEmbed()
        .setTitle(`Otorol Sistemi - Syro`)
        .setColor('GREEN')
        .setTimestamp()
        .setDescription(`Otorol sistemini kurdum. Artık sunucuya biri gelirse otomatik olarak ${rol} rolünü vericek.`)
        message.channel.send(embed)
        return
    }
    if(komut === 'sıfırla'){
        db.delete(`SwenlorOtorol.${message.guild.id}`)
         message.channel.send('Otorol sistemi sıfırlandı. Tekrar kurmak için **!otorol ayarla** yazınız.')
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: '',
  usage: ''
};
