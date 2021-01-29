const Discord = require('discord.js');
const chancejs = require('chance');
const chance = new chancejs();

const cevaplar = [
    "`YAZI-TURA`:**TURA**",
    "`YAZI-TURA`:**YAZI**"
];

exports.run = function(client, message) {
    
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    
    if (cevap === "`YAZI-TURA`:**YAZI**") {
        
         const pinkyazi = new Discord.MessageEmbed()
        .setColor(0xf4b942)
        .setDescription(cevap)
        .setThumbnail("http://www.freakonomics.com/wp-content/uploads/2013/01/coin-300x218.jpg")
        message.channel.send(pinkyazi);
        
    } else if (cevap === "`YAZI-TURA`:**TURA**") {
        
        const pinktura = new Discord.MessageEmbed()
        .setColor(0xf4b942)
        .setDescription(cevap)
        .setThumbnail("https://www.wallets-online.com/webadmin/items/ogon/ogon_cd_red_1.jpg")
        message.channel.send(pinktura);
        
    }
        

};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'yazıtura', 
  description: 'Yazı-Tura atar.',
  usage: 'yazıtura'
};