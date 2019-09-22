const Discord = require('discord.js')
exports.run = async (client, message, args) => {

   const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setTimestamp()
   .setThumbnail(client.user.displayAvatarURL)
   .addField("`k!addrole` **<@player> <Cargo>**", "Dar um cargo para um player")
   .addField("`k!anunciar` **<msg>**", "Anunciar Algo Que Você Queira")
   .addField("`k!ban` **<@player> <Motivo>** ", "Lista todos os comandos do bot")
   .addField("`k!removerole` **<@player> <cargo>**", "Retirar Cargo de um player")
   .addField("`k!ajuda`", "Lista todos os comandos do bot")
   .addField("`k!diga` **<mensagen>**", "o Bot Ira Falar oque Você Pediu")
   .addField("`k!kick` **<@player> <motivo>**", "Você Ira Kikar Alguem do Servidor")
   .addField("`k!limpar` **<numero de mensagens>**", "Ira Limpar Todas Mensagens abaixo de 2semanas")
   .addField("`k!tempmute` **<@player> <Tempo em minutos>**", "Mutar Alguem Temporariamente")
   .addField("`k!dog`", "ira aparecer uma foto fofa de um cachorro :dog:")
   .addField("`k!abraçar` **<@player>**", "Você ira abraçar alguem")
   .addField("`k!slap` **<@player>**", "Você dara um tapa em alguem")
   .addField("`k!roleta`", "irá aparecer uma mensagem que você perdeu ou ganhou aleatoriamente")
   .addField("`k!report` **<@player> <oque ele fez>**", "Para reporta alguem")
   .addField("`k!ping`", "ira mostra a latencía do bot")
   .addField("`k!acariciar` **<@player>**", "ira pasar a mão na cabeça de alguem")
   .addField("`k!botinfo`", "ira mostrar a informaçao do bot")
   .addField("`k!serverinfo`", "ira falar a informaçao do servidor")
   .addField("`k!beijar` **<@player>**", "ira beijar um player")


   message.reply(embed)
}

exports.config = {
    name: 'ajuda2',
    aliases: ['help'],
    category: 'util'
}