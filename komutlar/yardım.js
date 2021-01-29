const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setTitle("  <:kisspngemojipediaemailtextmessag:797104107801411594> Syro Bot'un  yardım menüsüne hoşgeldin! <:developer:785978457087541288> ")
 .setTimestamp()
.setDescription(":tada:  **s!eğlence** = Eğlence komutlarını görüntülersiniz. \n <:tamirvci:797102717331439626>  **s!moderasyon** = Moderasyon komutlarını görüntülersiniz. \n :lock:   **s!guard** = Guard komutlarını görüntülersiniz. \n <:emoji1:797077331600080896>  **s!kullanıcı** = Kullanıcı komutlarını görüntülersiniz. \n <:originalwumpus:796813438923571230>  **s!font** = Logo komutlarını görüntülersiniz.")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}