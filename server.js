const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
client.lang = new Map();

client.on("message", msg => {
    const kzgn = client.emojis.get("512302904141545509");
    const embedlul = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription( msg.author + " Reklam Yasak Bunu Bilmiyor musun baaaaka!")
    
const embedlulz = new Discord.RichEmbed()
    .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
      .setColor(0x00AE86)
      .setDescription("-uyar <kişi> komutu ile onu uyarabilir ya da -kick <kişi> veya -ban <kişi> komutlarını kullanarak onu sunucudan uzaklaştırabilirsin!")
    .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/) (htpp)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    if(msg.member.hasPermission('BAN_MEMBERS')){
    return;
    } else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send(embedlul)
     msg.guild.owner.send(embedlulz).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
      };
    })
;

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

//SA VB.
client.on("message", msg => {
  if (msg.content.toLowerCase() === "sa") {
const embed = new Discord.RichEmbed()
msg.channel.send("<@" + msg.author.id + ">, Aleyküm selamm!")
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "sea") {
const embed = new Discord.RichEmbed()
msg.channel.send("<@" + msg.author.id + ">, Aleyküm selamm!")
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "yaşamak") {
const embed = new Discord.RichEmbed()
msg.channel.send("https://s8.gifyu.com/images/ezgif.com-video-to-gif-1795c2e816827e2a5.gif https://s8.gifyu.com/images/ezgif.com-video-to-gif-25f6f0383d834fdd6.gif")
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "lua") {
const embed = new Discord.RichEmbed()
msg.channel.send("<@" + msg.author.id + ">, Efendim cnm :3")
  }
});
const nasılsın = [
  "Süte batırılmış bisküvi gibiyim, erimiş ve düşmeye hazır… Sen nasılsın?",
  "Makarna kadar kıvrak ve refleksli.",
  "Gökkuşağı gibiyim. Farklı ve birbirinden bağımsız çok şey hissediyorum!",
  "Nasılsın sorusunu iyiyim diye geçiştirmek istemeyen ama başka da bi cevap bulamayan insan yavrusu gibiyim."
];
client.on("message", msg => {
  if (msg.content.toLowerCase() === "lua nasılsın") {
    var nasılsıncevap = nasılsın[Math.floor(Math.random() * nasılsın.length)];
    msg.reply(nasılsıncevap);
  }
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "lua sen kimsin") {
const embed = new Discord.RichEmbed()
msg.channel.send("<@" + msg.author.id + ">, Beni görmek demek mutlaka yüzümü görmek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu kafidir.")
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "nikki") {
    msg.channel.send("İmparatorum Çok Yaşa!");
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "hoş geldin bebeğim") {
const embed = new Discord.RichEmbed()
msg.channel.send("<@" + msg.author.id + ">, Beni sevmeyen birine cevap vermem...")
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "lua hoş geldin bebeğim") {
const embed = new Discord.RichEmbed()
msg.channel.send("<@" + msg.author.id + ">, Beni sevmeyen birine cevap vermem...")
  }
});
client.on("message", msg => {
  if (msg.content.toLowerCase() === "kriyus kimdir") {
const embed = new Discord.RichEmbed()
msg.channel.send("<@" + msg.author.id + ">, Kriyus, Yunan mitolojisinde bir titan. Uranus ile Gaia'nın oğlu. Eurybia'dan Perses ve Pallas isimli oğullara sahip olmuştur. Bu on iki titan arasında hiçbir bilgiye sahip olmayan daha doğrusu hakkında pek araştırma yapılmayan tek titan Krios'dur. Ne tanrısı olduğu belli olmayan bu titan hakkında pek çok tez atılmış fakat açıklık getirilememiştir. Tarihi kaynaklarda kabul edilen özelliği ve hakkında bilgi olmamasının sebebi şöyle açıklanmaktadır: Krios, Gaia ile titanların lideri Uranüs'ün oğludur. Ve Nike'nin en büyük atasoyudur. Eurybia ile evlendikten ve Pallas isimli bir çocuk sahibi olduktan sonra diğer titanlar tarafından tehdit olarak görülmüş fakat gücü ve kudretiyle baş edemeyeceklerini bilen titanlar onu ailesiyle tehdit edip lanetlemiştir. Ve bütün bilgileri kaybolmuştur, bulunamamıştır. Krios'a tapan yüz binlerce insan onun kudretine ve gücüne hayrandır. Yunan mitolojisinde Kronos'tan daha güçlü olduğu sanılan tek titandır.")
  }
});
client.on("message", message => {
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        const dmlog = new Discord.RichEmbed()
         .setTitle(`${client.user.username}'a Özelden Mesaj Gönderildi!`)
         .setColor('RANDOM')
         .addField('Mesajı Gönderen',` \`\`\` ${message.author.tag} \`\`\` `)
         .addField('Mesajı Gönderenin ID', ` \`\`\`${message.author.id}\`\`\` `)
         .addField(`Gönderilen Mesaj`, message.content)
         .setThumbnail(message.author.avatarURL) 
    client.channels.get("760592872100593724").send(dmlog);
    }
});

////////////////////////

client.on("message", msg => {
  const uyarıembed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setDescription(":crown: " + msg.author + "Reklam Yapmayı Kes Seni Yetkililere Söyledim :angry: :rage: ")

const dmembed = new Discord.RichEmbed()
  .setTitle("Sunucunda " + msg.author.tag + " reklam yapıyor!")
    .setColor(0x00AE86)
    .setDescription(" " + msg.author.tag + " Sunucunda Reklam Yapıyor k?uyar komutu ile kişiyi uyara bilir k?ban Komutu İle Kişiyi Banlayabilirsin ")
  .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
  if(msg.member.hasPermission('BAN_MEMBERS')){
  return;
  } else {
  msg.delete(30).then(deletedMsg => {
   deletedMsg.channel.send(uyarıembed)
   msg.guild.owner.send(dmembed).catch(e => {
          console.error(e);
        });
      }).catch(e => {
        console.error(e);
      });
    };
    };
  })


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

process.setMaxListeners(0);

process.on('warning', e => console.warn(e.stack));

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
