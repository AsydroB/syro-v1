const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(":no_entry: Syro Bot Guard Komutları   \n :lock: ")
 .setTimestamp()
.setDescription(" :no_entry:  **s!ever-engel** = Everyone ve hereyi engeller.     \n <:mesaj:797077332476559390>   **s!sohbet-aç/kapat** = Yazdığınız  kanaldaki sohbeti açar  veya kapatır.  \n :lock:  **s!kanalkoruma** = Kanalların silinmesini engeller. \n :lock:  **s!rolkoruma** = Rollerin silinmesini engeller.  \n :lock:  **s!capsengel** = Caps açıkken yazılan mesajları siler.  \n  :face_with_symbols_over_mouth:   **s!küfür** = Küfür engel sistemini açarsınız.   \n  <:WKBannerReklam:797152254200250378>   **s!reklam** = Reklam engel sistemi açarsınız. sınız.")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'guard',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'s!guard'
}
