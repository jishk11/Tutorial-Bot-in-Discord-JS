module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message, args){
        const { member, mentions} = message
        const tag = `<@${member.id}>`
        const target = message.mentions.users.first();

        if (
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('KICK_MEMBERS')
        ) {
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.kick();
                message.channel.send(`<@${member.id}>, <@${memberTarget.user.id}> has been kicked.`);
            } else {
                message.channel.send( `<@${member.id}> Please specify user you want to kick.`);
            }
        } else {
            message.channel.send( `<@${member.id}> You do not have permission to use that command.`);
        
        }
        }
    }
