﻿const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("Bekle Kardeşim Çıkışta Buluşacağız Kaçamazsın Benden Ben Bi Yenileneyim Gelecem Tamam mı?").then(msg => {
        console.log("[BOT]Yeniden başlatılıyor");
        process.exit(0);
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'rr',
  description: 'Botu yeniden başlatır',
  usage: 'rr'
};
