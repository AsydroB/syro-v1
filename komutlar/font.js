const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<:altn:797143878293520395>  Syro Bot Font Komutları <:kisspngdiamonddrawingclipartdiam:797143914728652900> ")
 .setTimestamp()
.setDescription("<:pngwing:797145108570308648>  ** s!dinamik** = Dinamik logo oluşturur.  \n <:altn:797143878293520395>    ** s!altın** = Altın logo oluşturur.   \n <:pngwing:797145108570308648>  ** s!banner** = Banner logo oluşturur.   \n <:pngwing:797145108570308648>  ** s!basit** = Basit logo oluşturur.   \n <:kisspngdiamonddrawingclipartdiam:797143914728652900>   ** s!elmas** = Elmas logo oluşturur.   \n <:188ec0653821a946dbbf9494cc992ad9:797143877734760458>   ** s!sarı** = Sarı logo oluşturur.   \n <:rernk:797143880369438751>   ** s!neonmavi** = Neon mavi logo oluşturur.   \n <:pngwing:797145108570308648>  ** s!kalın** = Kalın logo oluşturur.   \n <:anime940x533:799019692177620992>    ** s!anime** = Anime yazı tipinde logo oluşturur.   \n <:pngwing:797145108570308648>  ** s!habbo** = Habbo yazı tipinde logo oluşturur.   \n <:arrow:797143880822161418>   ** s!arrow** = Ok işaretli logo oluşturur.   \n <:images:797143880821899334>   ** s!green** = Yeşil logo oluşturur.   \n <:5a3499a892cc49:797146852168302602>  ** s!alev** = Alevli logo oluşturur.   \n <:indir:797143881291661313>   ** s!red** = Kırmızı logo oluşturur.  ")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["font"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'font',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'s!font'
}