const discord = require("discord.js");
const bot = new discord.Client()
const token = "NjU4NzI3NDIwNDcxMjc5NjQ3.XgD9vg.BAvcZhA2QrWO1H7R8fzkVLaKxaE"

bot.on("message", message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = '.';
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    if (cmd === `${prefix}info`) {

        let InfoEmbed = new discord.RichEmbed()
            .setTitle("GTRLife")
            .setDescription("GTRLife if a arma 3 altis life server that has had lots of work put in to make it unique and enjoyable for all players")
            .addField("Website", "https://gtrlife.co.uk/", true)
            .addField("Discord:", "https://discord.gg/Da9rzDF", true)
            .addField("Teamspeak", "gtrlife.co.uk", true)
            .setFooter("GTRLife")

        message.channel.send(InfoEmbed)
        message.delete()

        return;
    }

    if (cmd === `${prefix}shutdown`) {

        message.delete()
        if (message.author.id != 475742970650296328) return message.channel.send(`you dont have permission for this command only <@475742970650296328> does`)
        message.channel.send(`i have been shutdown due to an internal issue please be patient.`).then(m => {
            bot.destroy()
        })

        return;
    }
})

bot.login(token)
