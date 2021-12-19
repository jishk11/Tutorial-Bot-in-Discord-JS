//place this file in your commands folder
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'embed',
    description: "Commands!",
    execute(client, message, args, Discord) {
        const logo = 'https://yt3.ggpht.com/ytc/AAUvwni6s6sNc8zmbSjsMqryeFKTFbT4ERaxDHezRYNn=s88-c-k-c0x00ffffff-no-rj'
        const newEmbed = new Discord.MessageEmbed()
            .setColor(`00ffff`)
            .setTitle('Rules')
            .setAuthor('Jishan', logo)
            .setThumbnail('https://yt3.ggpht.com/ytc/AAUvwni6s6sNc8zmbSjsMqryeFKTFbT4ERaxDHezRYNn=s88-c-k-c0x00ffffff-no-rj')
            .setURL('https://www.youtube.com/channel/UCvtZXtG3mJErFkDpHg2mBQA')
            .setDescription('These are the rules you must follow!')
            .addFields(
                {
                    name: 'Rule 1: **Be Nice**',
                    value: 'test',
                    inline: true
                },

                { name: 'Rule 2:**Follow Jishans Youtube Channel**' ,
                inline: true},
                { name: 'Rule 3: Do not be weird' })
            .addField('Rule 4:', 'Be Nice')
            .addField('Rule 5:', 'lmfao')


            .setImage('https://www.planetware.com/wpimages/2020/04/iceland-best-waterfalls-seljalandsfoss.jpg')
            .setTimestamp()
            .setFooter('Powered by Jishan', 'https://thumbs.dreamstime.com/b/hw-h-w-letter-logo-design-initial-linked-circle-uppercase-monogram-red-blue-191634941.jpg.png');

        message.channel.send(newEmbed);
    }
}
