module.exports = (Discord, client, member) => {

    let welcomeRole = member.guild.roles.cache.find(role => role.name === 'Member'); //In the quotation marks, place the EXACT name of the role you want to assign to incoming members.

    member.roles.add(welcomeRole);
    member.guild.channels.cache.get('874054604105592922').send(`Welcome <@${member.user.id}> to **${member.guild.name}**! Make sure to check out <#874059286874038322>!`) // replace the channel ids with your own channel ids.

}
