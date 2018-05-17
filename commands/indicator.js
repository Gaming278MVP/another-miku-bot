const config = require('../config.json');
exports.run = function(bot, message, args) {
  // if args[0] length is not 1, return
  if (args[0].length != 1) {
    message.channel.send("Error.")
  } else {
    message.channel.send(`https://emojipedia.org/regional-indicator-symbol-letter-${args[0]}`);
  }
};

exports.conf = {
  aliases: ["indi"]
};

exports.help = {
  name: "indicator",
  category: "Development",
  description: "I\'ll give you link for \`text-indicator\` that you\'re looking for.",
  usage: "indicator \`<letter>\`",
  param: "",
  aliases: "indi"
};