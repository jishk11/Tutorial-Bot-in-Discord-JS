module. exports = {
    name: 'embed',
    description: 'this is an embed command',
    execute (client, message, args, Discord) {
        const logo = 'https://yt3.ggpht.com/ytc/AKedOLT_jR5vVjNbfnoqLohHtzFX9B7alnS2cN0S6s63=s900-c-k-c0x00ffffff-no-rj'
        const newEmbed = new Discord.MessageEmbed()
        .setColor('049074')
        .setTitle('Rules')
        .setAuthor('Jishan', logo)
        .setThumbnail('https://images.squarespace-cdn.com/content/v1/504779d6e4b0dcecada0fc99/1487873936517-5KGYL2H6N6RWPTC5LCW1/rules1.jpg?format=1500w')
        .setURL('https://www.youtube.com/jishankharbanda1')
        .setDescription('This is an embed about the server rules!')
        .addFields(
            {
                name: 'Rule 1',
                value: 'Be respectful to others.',
                inline: true
            },
        )
        .addFields(
            {
                name: 'Rule 2',
                value: 'Respect the decisions of moderators/admins.',
                inline: true
            },
        )
        .addFields(
            {
                name: 'Rule 3',
                value: '**Make sure to subscribe to Jishan\'s YouTube channel.**',
                inline: true
            },
        )
        .setImage('https://www.kindpng.com/picc/m/117-1174974_3-number-png-number-three-transparent-background-png.png')
        .setTimestamp()
        .setFooter('Bot made by Jishan', logo)
message.channel.send(newEmbed);
    }
}
