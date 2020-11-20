const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['740667474349129858', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://media1.tenor.com/images/74db8b0b64e8d539aebebfbb2094ae84/tenor.gif?itemid=15144612",
    "https://media1.tenor.com/images/53d180f129f51575a46b6d3f0f5eeeea/tenor.gif?itemid=5373994",
    "https://media1.tenor.com/images/b7a844cc66ca1c6a4f06c266646d070f/tenor.gif?itemid=17423278",
    "https://media1.tenor.com/images/9ea4fb41d066737c0e3f2d626c13f230/tenor.gif?itemid=7355956",
    "https://media1.tenor.com/images/153b2f1bfd3c595c920ce60f1553c5f7/tenor.gif?itemid=10936993",
    "https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif?itemid=17314633",
    "https://media1.tenor.com/images/dcd359a74e32bca7197de46a58ec7b72/tenor.gif?itemid=12396060",
    "https://media1.tenor.com/images/477821d58203a6786abea01d8cf1030e/tenor.gif?itemid=7958720",
    "https://media1.tenor.com/images/e8f880b13c17d61810ac381b2f6a93c3/tenor.gif?itemid=17897236",
    "https://media1.tenor.com/images/ce295550c5436b7b61edac89b3a49b07/tenor.gif?itemid=16335313",
    "https://media1.tenor.com/images/fb17a25b86d80e55ceb5153f08e79385/tenor.gif?itemid=7919028",
    "https://media1.tenor.com/images/6138bdbf998fde7638b8362499ac5427/tenor.gif?itemid=11829035",
    "https://media1.tenor.com/images/fd14f63a93796ed26bd385c015df57b8/tenor.gif?itemid=4665506",
    "https://media1.tenor.com/images/86ef10d3dd7fdc643d9f62a902481097/tenor.gif?itemid=16649188",
    "https://media1.tenor.com/images/a73d80e5e7d245412f76034c6a34c1fe/tenor.gif?itemid=18043100"
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
        `\`${message.mentions.members.first().user.username}\`, \`${message.author.username}\` seni tokatladı 😔`
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
      .setTitle(`Kendini tokatlayamazsın 😟`)
      .setImage(üzgün)
    message.channel.send({ embed: candyEmb });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slap","tokatla"],
  permLevel: 0
};
exports.help = {
  name: "tokat",
  description: "istediğiniz kişiyi tokatlar!.",
  usage: "slap [isim]"
};