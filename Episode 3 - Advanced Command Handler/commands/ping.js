module. exports = {
    name: 'ping',
    description: "This is a pong command",

    async execute (client, message, args, Discord) {
        message.channel.send('Pong!');
    }
}
