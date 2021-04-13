    const {MessageEmbed} = require('discord.js')
module.exports = (bot) => {
    const channelID='756813694163222529'
    bot.on('guildMemberAdd', (member) => {
        const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
        if(!channel)return;
        const embed = new MessageEmbed()
        .setTitle(`Welcome ${member.user.username} to our ${member.guild.name} ` )
        .setColor('#00F7FF')
        .setThumbnail(member.user.displayAvatarURL({dynamic : true,size :512}))
        .setDescription(`Hello <@${member.user.id}> , Welcome to ${member.guild.name}. Thanks for joining our server`)
        .setFooter(`Read #rules channel for the rules`)
        channel.send(embed)
    })
}