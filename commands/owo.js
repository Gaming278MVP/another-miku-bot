const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

// START-MAIN
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send("UwU");
  else {
    const text = await neko.getSFWOwOify({
      text: args.join(" ")
    });
    message.channel.send(["**Thinking...**", "**Translating...**"].random())
      .then(m => m.edit(text.owo))
      .then(delete require.cache[require.resolve('./owo.js')]);
  }
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: "owo",
  category: "Fun",
  description: "OwO What\'s this?\nEnygwish Twanyswatow!",
  usage: "owo \`<text>\`",
  param: "",
  aliases: ""
};