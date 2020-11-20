const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, params) => {
  
  let prefix = ayarlar.prefix
 
  if (!params[0]) {
    message.channel.sendCode("asciidoc",`= Komut Grupları =

${prefix}avatar :: Avatarınızı Gösterir.
${prefix}aşkölçer :: Etiketlediğiniz Kişiyle Aşkınızı Ölçer.
${prefix}balıktut :: Balık Tutarsınız. 
${prefix}espri :: Espri Yapar.
${prefix}fbi :: FBİ Basar.
${prefix}havadurumu :: Belirtilen Şehirin Hava Durumunu Gösterir.
${prefix}istatistik :: Botun İstatistiklerini Gösterir.
${prefix}servericon :: Sunucunun Resmini Atar.
----------RP----------
${prefix}kiss/öp :: Etiketlenen kişiyi öper.
${prefix}slap/tokat/tokatla :: Etiketlenen kişiyi tokatlar.
${prefix}pat/okşa :: Etiketlenen kişinin başını okşar.

${prefix}çal :: Müziği çalar.
${prefix}duraklat :: Müziği duraklatır.
${prefix}devam :: Duraklatılmış müziği devam ettirir.
${prefix}geç :: Çalan müziği geçer.
${prefix}dur :: Müziği durdurur.
${prefix}ses :: Ses düzeyini ayarlarsınız.



`)
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.sendCode('asciidoc', `= ${command.help.name} =

Hakkında  :: ${command.help.description}
Kullanım  :: ${prefix}${command.help.usage}`);
    }
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Komut kategorilerini gösterir.',
  usage: 'yardım'
};