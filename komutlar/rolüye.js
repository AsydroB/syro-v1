const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
        if (args.includes("@everyone")) return;
        
        if (args.includes("@here")) return;

        if (!args[0]) return message.channel.send("**Lütfen Bir Rol Girin!**")

        let enesrol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!enesrol) return message.channel.send("**Lütfen Geçerli Bir Rol Girin!**");

        let rolüolanüyeler = message.guild.members.cache.filter(member => {
            return member.roles.cache.find(r => r.name === enesrol.name);
        }).map(member => {
            return member.user.tag;
        })
        if (rolüolanüyeler > 2048) return message.channel.send('**Liste Çok Uzun!**')

        let bilgi = new MessageEmbed()
            .setColor("GREEN")
            .setThumbnail(message.guild.iconURL())
            .setTitle(`Olan Kullanıcılar ${enesrol.name} Rolü!`)
            .setDescription(rolüolanüyeler.join("\n"));
        message.channel.send(bilgi);
    }
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolüye', 'rolkullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'Rolü olan kullanıcılar',
  description: 'Belirtilen Rolü Olan Kullanıcılar',
  usage: 'rolüye'
};