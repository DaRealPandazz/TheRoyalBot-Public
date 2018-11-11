module.exports.run = async (bot, message, args) => {
if(message.content.indexOf(process.env.PREFIX) !== 0) return;
  let msg = await message.channel.send("Generating avatar...");
  let target = message.mentions.users.first() || message.author;

  await message.channel.send({files: [
    {
      attachment: target.displayAvatarURL,
      name: "avatar.png"
    }
  ]});

  message.delete();
  msg.delete();
}

module.exports.help = {
    name: "avatar"
}
