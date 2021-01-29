
const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<:54abc5129c17fb30bf84fd6af39a065d:797149795856678944>   Syro Bot Moderasyon Komutları <:pngegg:797148409819562014>")
 .setTimestamp()
.setDescription("  <:rol:797077332849721355>  **s!otorol ayarla/sıfırla** = Sunucuda otorol ayarlar veya otorol varsa sıfırlar.  \n <:pngwing:797152254163550218>   **s!sil** = Yazdığınız miktarda mesajı siler. \n :bangbang:    **s!uyar** = Etiketlediğiniz kişiyi uyarır. \n  :1234:    **s!uyarısay** = Etiketlediğiniz kişinin uyarı sayısını gösterir. \n:grey_exclamation:    **s!uyarısil** = Etiketlediğiniz kişinin ıuyarılarını belirttiğiniz miktarda siler.\n <:ban:797077331134644246>   **s!forceban** = Etiketlediğiniz kişiyi banlarsınız.   \n <:ban:797077331134644246>   **s!ban** = Etiketlediğiniz kişiyi banlarsınız.  \n  <:7191_unban_hammer:797152253655384084>   **s!unban** = Birisinin banını açarsınız.    \n  <:pngwing:797152253983064094>   **s!kick** = Etiketlediğiniz kişiyi atarsınız.   \n  <:WKBannerReklam:797152254200250378>  **s!duyuru** = Bota duyuru yaptırırsınız. \n   <:pngegg:797148409819562014>  **s!slowmode** = Yavaş modu ayarlarsınız.  \n  <:pngegg1:797152253370695721>   **s!sunucubilgi** = Sunucu bilgilerini görürsün.   \n  <:idcard_119573:797107760478552125>   **s!üyedurum** = Üyelerin durumlarını görürsün.   \n  <:pngwing:797152254041653278>   **s!çekiliş** = Çekiliş başlatırsınız.  \n  <:pngegg:797148409819562014>  **s!modlog** = Modlog kanalını belirlersiniz.")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'s!moderasyon'
}