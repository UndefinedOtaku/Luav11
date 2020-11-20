const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['740667474349129858', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://media1.tenor.com/images/4db088cfc73a5ee19968fda53be6b446/tenor.gif?itemid=14637016",
    "https://media1.tenor.com/images/5ccc34d0e6f1dccba5b1c13f8539db77/tenor.gif?itemid=17694740",
    "https://media1.tenor.com/images/bb9c0c56769afa3b58b9efe5c7bcaafb/tenor.gif?itemid=16831471",
    "https://media1.tenor.com/images/e9d7da26f8b2adbb8aa99cfd48c58c3e/tenor.gif?itemid=14721541",
    "https://media1.tenor.com/images/506aa95bbb0a71351bcaa753eaa2a45c/tenor.gif?itemid=7552075",
    "https://media1.tenor.com/images/969f0f462e4b7350da543f0231ba94cb/tenor.gif?itemid=14246498",
    "https://media1.tenor.com/images/1069921ddcf38ff722125c8f65401c28/tenor.gif?itemid=11074788",
    "https://media1.tenor.com/images/7e30687977c5db417e8424979c0dfa99/tenor.gif?itemid=10522729",
    "https://media1.tenor.com/images/daffa3b7992a08767168614178cce7d6/tenor.gif?itemid=15249774",
    "https://media1.tenor.com/images/c7efda563983124a76d319813155bd8e/tenor.gif?itemid=15900664",
    "https://media1.tenor.com/images/d2a2b216ef3bc74406f661049f937999/tenor.gif?itemid=17023255",
    "https://media1.tenor.com/images/44b4b9d5e6b4d806b6bcde2fd28a75ff/tenor.gif?itemid=9383138",
    "https://media1.tenor.com/images/8679b6265fc8d9914ec809b630ccfd16/tenor.gif?itemid=15435022",
    "https://media1.tenor.com/images/5ca8c6a7f60070bcca7ed110cf42ffc8/tenor.gif?itemid=16939687",
    "https://media1.tenor.com/images/85dcef131af84b515106955e142df54e/tenor.gif?itemid=13857541"
  ];
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kullanıcı) {
    const buyEmb = new Discord.RichEmbed()
      .setDescription(`\`${message.author.username}\` birini etiketlemen lazım ab`);
    message.channel.send({ embed: buyEmb });
    return;
  }
  if (
    !message.mentions.members.first().user.username ===
    message.isMentioned(message.author)
  ) {
    const candyEmb = new Discord.RichEmbed()
      .setDescription(
        `\`${message.mentions.members.first().user.username}\`, \`${message.author.username}\` sana sarıldı 😁`
      )
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
    return;
  }
  var öpemezsin = [
    "https://media1.tenor.com/images/792d01df5154f95d6a5e480a3a627892/tenor.gif?itemid=16249499"
  ];
  let üzgün = öpemezsin[Math.floor(Math.random() * öpemezsin.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (message.author.id === kullanıcı.id) {
    const candyEmb = new Discord.RichEmbed()
      .setTitle(`Kendine sarılamazsın 😟`)
      .setImage(üzgün)
    message.channel.send({ embed: candyEmb });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hug"],
  permLevel: 0
};
exports.help = {
  name: "sarıl",
  description: "istediğiniz kişiye sarılır!.",
  usage: "hug [isim]"
};