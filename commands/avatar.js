const Discord = require('discord.js');

exports.run = (bot, message, args) => {
  if (!message.mentions.users.size) {
    const embed = new Discord.RichEmbed()
      .setAuthor("Miku -- Avatar", "", message.author.displayAvatarURL)
      .setColor(0x1a9ca8)
      .setFooter(`${message.author.username}\'s avatar`)
      .setImage(message.author.displayAvatarURL);
    message.channel.send({
      embed
    });
  } else {
    const mentionMember = message.mentions.users.first();
    const embed = new Discord.RichEmbed()
      .setAuthor("Miku -- Avatar", "", mentionMember.displayAvatarURL)
      .setColor(0x1a9ca8)
      .setImage(mentionMember.displayAvatarURL)
      .setFooter(`${mentionMember.username}\'s avatar`);
    message.channel.send({
      embed
    });
  }
};

exports.conf = {
  aliases: ["pfp"],
  cooldown: 7
};

exports.help = {
  name: "avatar",
  category: "Util.",
  description: "Display someone\'s avatar.",
  usage: "avatar [mention-user]",
  param: "",
  aliases: "pfp"
};