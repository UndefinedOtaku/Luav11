const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['740667474349129858', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://media1.tenor.com/images/f330c520a8dfa461130a799faca13c7e/tenor.gif?itemid=13911345",
    "https://media1.tenor.com/images/f5176d4c5cbb776e85af5dcc5eea59be/tenor.gif?itemid=5081286",
    "https://media1.tenor.com/images/da8f0e8dd1a7f7db5298bda9cc648a9a/tenor.gif?itemid=12018819",
    "https://media1.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif?itemid=9200932",
    "https://media1.tenor.com/images/857aef7553857b812808a355f31bbd1f/tenor.gif?itemid=13576017",
    "https://media1.tenor.com/images/0d2fb6ad9a6d71c3a018c0b37ffca50b/tenor.gif?itemid=16121044",
    "https://media1.tenor.com/images/005e8df693c0f59e442b0bf95c22d0f5/tenor.gif?itemid=10947495",
    "https://media1.tenor.com/images/bfdeb9ec7f89aad86170d06fe4189bec/tenor.gif?itemid=16085314",
    "https://media1.tenor.com/images/0a35a0cc82d3b613086e0f420a94c2ad/tenor.gif?itemid=15779012",
    "https://media1.tenor.com/images/54722063c802bac30d928db3bf3cc3b4/tenor.gif?itemid=8841561",
    "https://media1.tenor.com/images/8b5711095b0ba786c43b617bf9c675dd/tenor.gif?itemid=15735895",
    "https://media1.tenor.com/images/755b519f860ef65a4b9f889aece000fe/tenor.gif?itemid=16085284",
    "https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif?itemid=9920853",
    "https://media1.tenor.com/images/01a97fee428982b325269207ca22866b/tenor.gif?itemid=16085328",
    "https://media1.tenor.com/images/a73d80e5e7d245412f76034c6a34c1fe/tenor.gif?itemid=18043100",
    "https://media1.tenor.com/images/c2232aec426d8b5e85e026cbca410463/tenor.gif?itemid=11648944",
    "https://media1.tenor.com/images/28f4f29de42f03f66fb17c5621e7bedf/tenor.gif?itemid=8659513",
    "https://media1.tenor.com/images/6050e5640a4bb058fb1ba9a19e12d997/tenor.gif?itemid=4977531",
    "https://media1.tenor.com/images/e5fff7bc2fc641f8ed0cba92475ea741/tenor.gif?itemid=18243417",
    "https://media1.tenor.com/images/5466adf348239fba04c838639525c28a/tenor.gif?itemid=13284057",
    "https://media1.tenor.com/images/fad9a512808d29f6776e7566f474321c/tenor.gif?itemid=16917926"
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
        `\`${message.mentions.members.first().user.username}\`, \`${message.author.username}\` başını okşadı 😊`
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
  aliases: ["pat","başınıokşa"],
  permLevel: 0
};
exports.help = {
  name: "okşa",
  description: "istediğiniz kişiyi tokatlar!.",
  usage: "pat [isim]"
};