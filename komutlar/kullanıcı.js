const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<:emoji4:797077332430028840> Syro Bot Kullanıcı Komutları <:emoji2:797077332304461844> ")
 .setTimestamp()
.setDescription("<:rol:797077332849721355>   **!!rolüye** = Role sahip olan kullanıcıları listeler. \n :flag_tr:     **!!türkiye** = Türkiye hakkınd bilgi verir.  \n <:toppng:798171587814883379>     **!!osmanlı** = Osmanlı Devleti hakkınd bilgi verir. \n <:googlelogo9808:798171587689185320>    **!!google** = Yazdığınız şeyi google da aratır. \n <:pngegg3:797821534826921984>    **!!havadurumu** = Yazdığınız şehirin hava durumunu gösterir. \n :mount_fuji:  **!!deprembilgi** = Son 10 depremi görürsünüz. \n<:afk:797103764036124712>   **!!afk** = Belirttiğiniz sepepte afk kalırsınız. \n <:birinsansilueti:797104107742691348>   **!!avatar** = Avatarınıza bakarsınız. \n :money_with_wings:    **!!döviz** = Yazdığın paranın anlık değerini gösterir. \n <:rol:797077332849721355>    **!!yetkilerim** = Yetkilerini görürsün.  \n <:idcard_119573:797107760478552125>     **!!profil** = Profilini görürsün. \n <:kisspngsteamlinkportablenetworkg:797112788324974603>     **!!steamoyun** = Yazdığın oyunun Özelliklerini görürsün. \n :camera:   **!!sunucuresmi** = Sunucu resmini gösterir. \n <:rol:797077332849721355>     **!!rolbilgi** = Etiketlediğin Rolün Özelliklerine Bakarsın. \n <:ping:797077332480360450>    **!!ping** = Botun Pingine Bakarsın.  \n <:1f194:797107760033693706>   **!!id** = Birisinin id'sine Bakarsın.  \n :inbox_tray:    **!!davet** = Beni Sunucuna Ekle.  \n :chart_with_downwards_trend:   **!!istatistik** = Bot istatistiklerini görürsünüz.   \n <:kisspngemojipediaemailtextmessag:797104107801411594>    **!!hata** = Yazdığınız hatayı yapımcılarıma bildirir.   \n <:kisspngemojipediaemailtextmessag:797104107801411594>    **!!istek** = Yazdığınız isteği yapımcılarıma bildirir.   \n <:pngwing:797104373155102740>   **!!canlıdestek** = Canlıdestek ekibiyle iletişime geçersiniz.  ")

message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'kullanıcı'
} 