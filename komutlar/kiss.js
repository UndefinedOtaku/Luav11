const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['740667474349129858', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://media1.tenor.com/images/d307db89f181813e0d05937b5feb4254/tenor.gif?itemid=16371489",
    "https://media1.tenor.com/images/bc5e143ab33084961904240f431ca0b1/tenor.gif?itemid=9838409",
    "https://media1.tenor.com/images/d0cd64030f383d56e7edc54a484d4b8d/tenor.gif?itemid=17382422",
    "https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865",
    "https://media1.tenor.com/images/621ceac89636fc46ecaf81824f9fee0e/tenor.gif?itemid=4958649",
    "https://media1.tenor.com/images/ea9a07318bd8400fbfbd658e9f5ecd5d/tenor.gif?itemid=12612515",
    "https://media1.tenor.com/images/a1f7d43752168b3c1dbdfb925bda8a33/tenor.gif?itemid=10356314",
    "https://media1.tenor.com/images/b8d0152fbe9ecc061f9ad7ff74533396/tenor.gif?itemid=5372258",
    "https://media1.tenor.com/images/02d9cae34993e48ab5bb27763d5ca2fa/tenor.gif?itemid=4874618",
    "https://media1.tenor.com/images/a390476cc2773898ae75090429fb1d3b/tenor.gif?itemid=12837192",
    "https://media1.tenor.com/images/4b5d5afd747fe053ed79317628aac106/tenor.gif?itemid=5649376",
    "https://media1.tenor.com/images/632a3db90c6ecd87f1242605f92120c7/tenor.gif?itemid=5608449",
    "https://media1.tenor.com/images/f34f73decaef049f9354b27984dfb09c/tenor.gif?itemid=14958166",
    "https://media1.tenor.com/images/df692538bbf513f7bd94709435e96342/tenor.gif?itemid=10358839",
    "https://media1.tenor.com/images/d93c9a9c201ec1fe3c8011718b18a83c/tenor.gif?itemid=16317577",
    "https://media1.tenor.com/images/d1a11805180742c70339a6bfd7745f8d/tenor.gif?itemid=4883557"
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
        `\`${message.mentions.members.first().user.username}\`, \`${message.author.username}\` seni öptü 😳`
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
      .setTitle(`Kendini öpemezsin 😟`)
      .setImage(üzgün)
    message.channel.send({ embed: candyEmb });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kiss"],
  permLevel: 0
};
exports.help = {
  name: "öp",
  description: "istediğiniz kişiyi öper!.",
  usage: "öp [isim]"
};