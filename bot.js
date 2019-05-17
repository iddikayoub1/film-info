client.on("message", async message => {
    if(message.content.startsWith(prefix + "help")) {
     var prfix = "-";
     let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`-{perfix}help لمعرفة اوامر البوت`);
            message.channel.sendEmbed(help);
    }
});
