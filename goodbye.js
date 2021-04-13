const {MessageEmbed} = require('discord.js') 
module.exports=(bot)=>{
    bot.on('guildMemberRemove',(member)=>{
        const channel = member.guild.channels.cache.find(ch=>ch.name ==='goodbye')
        if(!channel) return
        const embed = new MessageEmbed()
        .setTitle(`Goodbye ${member.user.username} from our server`)
        .setDescription(`Have a funtime in ${member.guild.name}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic : true,size :1024}))
        channel.send(embed)
    })
}