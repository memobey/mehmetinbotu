const Discord = require("discord.js");
const botconfig = require("../botconfig");
let purple = botconfig.purple;
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {

  if(!xp[message.author.id]){
   xp[message.author.id] = {
     xp: 0,
     level: 1
  };
}
  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvlXp = curlvl * 300;
  let difference = nxtLvlXp - curxp;

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(purple)
  .addField("Seviye", curlvl, true)
  .addField("İlerleme", curxp, true)
  .setFooter(`${difference} İlerlemen Olunca Seviye Atlıcaksın Dostum.`, message.author.displayAvatarURL);

  message.channel.send(lvlEmbed).then(msg);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rank',
  description: 'Rank, yani Rütbenizi Gösterir.',
  usage: 'rank'
};
