module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    execute(client, message, args){
        const { member, mentions} = message
        const tag = `<@${member.id}>`
        const target = message.mentions.users.first();

        if (
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('BAN_MEMBERS')
        ) {
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send(`${tag}, <@${memberTarget.user.id}> has been banned.`);
            } else {
                message.channel.send( ` ${tag} Please specify a user you want to ban.`);
            }
        } else {
            message.channel.send( `${tag} You do not have permission to use that command.`);
        
        }
        }
    }

   