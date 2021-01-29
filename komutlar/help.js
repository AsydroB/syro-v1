const discord = require("discord.js");
exports.execute = async (client, message, args) => {


const pythonic = new discord.MessageEmbed()
.setTitle("pythonic ekonomi botu")
.addField("e!al", "bir eşya alırsınız")
.addField("e!ara", "yerde birşeyler ararsın")
.addField("e!çalış", "işte çalışarak para kazanırsın")
.addField("e!dilen", "dilenirsin")
.addField("e!günlük", "günlük paranı alırsın")
.addField("e!market", "alabileceğin ürünlere bakarsın")
.addField("e!para-duzenle", "insanların parasını duzenlersin")
.addField("e!banka", "parana bakarsın")
.addField("e!sıralama", "en çok parası olanları görürsün")
.setColor("BLUE")
.setFooter("pythonic,plasmic,zero");


message.channel.send(pythonic)




}
exports.help = {
  name: "yardım",
  aliases: ["yardım"],
  usage: `yardım`
};