const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Não Foi Possivel Encontrar o Membro!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Você não tem permissao nescessaria pra executar este comando!");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("Esse Membro não pode ser banido!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("🔨 Membro Banido")
    .setColor("#bc0000")
    .addField("Usuario Banido", `${bUser} with ID ${bUser.id}`)
    .addField("Banido Por", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banido Em", message.channel)
    .addField("Hora", message.createdAt)
    .addField("Razão", bReason)
    .addfooter("GAME OVER? | Membros Banidos")

    let incidentchannel = message.guild.channels.find(`name`, "banimentos-kicks");
    if(!incidentchannel) return message.channel.send("Não Encontrei o canal.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

exports.config = {
    name: "ban",
    aliases: [],
    category: "mod"
}