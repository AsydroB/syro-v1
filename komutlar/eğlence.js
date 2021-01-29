const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<:emoji2:797077332304461844>  BOT BEY Eğlence Komutları <:mustafakemalataturk:797783230970331136> ")
 .setTimestamp()
.setDescription(" :snowman2:    **!!kartopu** = Kartopu atar . \n  :coin:   **!!yazıtura** = Yazıtura oynar . \n  <:Danger_Zone_Case:801179239848214588>    **!!kasaaç** = CS:GO kasası açar . \n:police_car:    **!!polis** = Polis çağırır . \n :fire_engine:     **!!itfaiye** = İtfaiye çağırır . \n :ambulance:     **!!ambulans** = Ambulans çağırır . \n :game_die:    **!!zarat** = Zar atar. \n :sob:   **!!ağla** = Botu ağlatır.    \n <:pngegg2:797819625088876574>  **!!soygun** = soygun yaparsınız.    \n:pencil2:  **!!tersyazı** = Bir Yazıyı Bot Ters Yazar. \n <:minecraft1logo:790706393240961059>  **!!mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n <:maxresdefault:797783234917826590>  **!!kutuaç** = Brawl Stars kutusu açar. \n <:170pxSeal_of_the_FBI:797783228990881803>  **!!fbi** = Bot FBi Gif Atar.   \n :page_facing_up:  **!!token** = Tokenimi Öğrenmek İstemezmisin?   \n <:revolver1558139_640:797783230891163668>  **!!düello** = Düello Atarsın.   \n <:pngkey:797783230072750080>  **!!wasted** = Polis tarafından yakalanırsın.   \n <:mustafakemalataturk:797783230970331136>  **!!atatürk** = Dene ve gör... (1881-1938)  ")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!!eğlence'
}