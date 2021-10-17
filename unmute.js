module.exports = {
    name: 'unmute',
    description: "This command unmutes a member!",
    execute(client, message, args){
        const { member, mentions} = message
        const tag = `<@${member.id}>`
        const target = message.mentions.users.first();
        if (
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('MANAGE_ROLES')
        ) {
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
           
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`${tag}, <@${memberTarget.user.id}> has been unmuted.`);

        }else{
            message.channel.send(`${tag}, Please specify a user to unmute.`);
        }
     } else {
            message.channel.send( `${tag}, You do not have permission to use that command.`);
        
        }
    }
}