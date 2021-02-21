const { Message } = require('discord.js');
const { rawEmb } = require('../index')

module.exports = {
    name: 'invite',
    syntax: 'invite',
    args: false,
    description: 'Get my Invite link here!',
    commands: ['invite', 'inv', 'link', 'support', 'vote'],

    /**
     *@document
     * @this
     * @param {Message} msg 
     * @param {String[]} args 
     */
    async execute(msg) {
        const { colors, emotes } = msg.client;

        let link = "https://discord.com/api/oauth2/authorize?client_id=" + msg.client.user.id + "&permissions=8&scope=bot",
            invite = "https://discord.gg/xgvxGQfmEU"

        let emb = rawEmb()
            .setTitle("Invite Links")
            .addField("**Bot-Invite**", `[Invite](${link})`)
            .addField("**Support Server**", `[join](${invite})`)
        msg.channel.send(emb);
    }
};