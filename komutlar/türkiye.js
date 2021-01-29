const Discord = require("discord.js");

exports.run = (client, message, guild) => {
  const motion = new Discord.MessageEmbed()

    .setColor("RED")
    .setAuthor("Türkiye Cumhuriyeti")
  
    .setDescription(
      "**Türkiye Cumhuriyeti ya da kısaca Türkiye, topraklarının büyük bölümü Anadolu'da, küçük bir bölümü ise Balkan Yarımadası'nın güneydoğu uzantısı olan Trakya'da yer alan ülke.**"
    )
    .addField("⭐ Başkent", "**Ankara**")
    .addField("⚡ Kuruluş Tarihi", "**1923 Yılında kurulmuştur.**")
    .addField("🌐 Yüz Ölçümü", "**783.562 km²**")
    .addField("👤 Nüfus", "** 83.154.997**")
    .addField("💎 Para Birimi", "**Türk Lirası**")
    .addField(
      "👑 Hükümet",
      "**Cumhurbaşkanlığı Hükûmet Sistemi**"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/726720013389529130/730663503421243402/s-ddd5dbbf9a162ef492321619cde0bc2b9fad2aca.jpg" )
    
    .setFooter("Syro Bot tarafından hazırlandı.");

  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["tr,türkiye"],
  permlevel: 0
};

exports.help = {
  name: "türkiye",
  description: "türkiye",
  usage: "türkiye"
};