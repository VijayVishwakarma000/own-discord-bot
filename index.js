'use strict'
const Discord = require('discord.js');
const MessageAttachment = Discord.MessageAttachment
const bot = new Discord.Client();
const config = require('./config.json')
const filesystem = require('fs');
const welcome = require('./welcome');
const goodbye = require('./goodbye')
const prefix = config.prefix
bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    welcome(bot)
    goodbye(bot)
});
bot.user.setActivity("to TOXIC", {
  type: "LISTENING"
});
bot.on('message', msg => {
    if (msg.content === `${config.prefix}play`) {
        msg.reply('Type $playcommand to get list of commands');
    }


    function coinFlip() {
        const coin = ['Heads', 'Tails']
        return coin[Math.floor(Math.random() * 2)];
    }
    if (msg.content === `${prefix}coin`) {
        msg.reply(coinFlip())
    }
    if (msg.content === `${config.prefix}myavtar`) {
        msg.channel.send(msg.author.displayAvatarURL({ dynamic: true }))
    }

    if (msg.content === `${config.prefix}playcommand`) {
        const playcmd = ['$coin', '$card']
        msg.reply(`${playcmd}`)
    }
    if (msg.content === `${config.prefix}text`) {

        const reader = filesystem.readFileSync('./text.txt')
        const attachment = new MessageAttachment(reader, 'Sample text.txt');

        msg.channel.send(`${msg.author}`, attachment);
    }

});


bot.login(config.token);
