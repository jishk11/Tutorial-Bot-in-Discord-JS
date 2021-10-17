module.exports = {
    name: 'unban',
    description: "This command unbans a member!",
    async execute(client, message, args){
        const { member, mentions} = message
        if (
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('BAN_MEMBERS')
        )
       if(!args[0]) return message.channel.send("Please specify a user to unban.");
       {
           const user = await message.guild.members.unban(args[0]);
           return message.channel.send(`**${user.tag}** was unbanned!`);

       }
    }
}
