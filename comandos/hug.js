const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first();

        const gifs =
            ['https://data.whicdn.com/images/314477536/original.gif', 'https://data.whicdn.com/images/313943103/original.gif', 'https://data.whicdn.com/images/314477536/original.gif', 'https://data.whicdn.com/images/312506748/original.gif', 'https://data.whicdn.com/images/309930546/original.gif', 'https://data.whicdn.com/images/306631481/original.gif', 'https://data.whicdn.com/images/297126486/original.gif', 'https://data.whicdn.com/images/297126127/original.gif', 'https://data.whicdn.com/images/294164107/original.gif', 'https://data.whicdn.com/images/285365078/original.gif'];

        if (message.mentions.users.first() === message.author) return message.channel.send('Sozinho Para Sempre...');
        if (message.mentions.users.size < 1) return message.reply('**Primeiro Você presisa Mencionar Alguem.**').catch(console.error); //Para que mencione a alguien.
        message.channel.send({
            embed: {
                description: message.author.username + " **esta Abraçando :** " + user.username,
                color: 15105570, //Puedes poner el color de tu preferencia.
                image: {
                    url: gifs[Math.floor(gifs.length * Math.random())]  //MathRandom para los gifs, pueden poner el rich embed, pero yo lo dejo así xD
                }
            }
        })

}

exports.config = {
    name: 'abraçar',
    aliases: ['hug'],
    category: 'random'
}