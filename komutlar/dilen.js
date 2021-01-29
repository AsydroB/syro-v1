exports.execute = async (client, message, args) => {
    let users = [
        "Enes Batur",
        "Pythonic",
        "Plasmic",
        "Orkun Işıldak",
      "Mühendis Bey",
      "sperkly",
      "wently",
      "lynx",
      "perfect",
      "swenlor",
      "yaman",
      "dilenci"
    ];
    let amount = Math.floor(Math.random() * 50) + 10;
    let beg = client.eco.beg(client.ecoAddUser, amount, { canLose: true });
    if (beg.onCooldown) return message.reply(`Ya bukadarda beleşçi olunulmazki ${beg.time.seconds} saniye sonra geri gel.`);
    if (beg.lost) return message.channel.send(`**${users[Math.floor(Math.random() * users.length)]}: **Para falan yok dedi.`);
    else return message.reply(`**${users[Math.floor(Math.random() * users.length)]}** sana acıdı ve **${beg.amount}** 💸 para verdi. Artık **${beg.after}** 💸'an var'.`);
};

exports.help = {
    name: "dilen",
    aliases: ['dilen'],
    usage: "dilen"
}
