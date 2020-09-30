const Commando = require("discord.js-commando");
const discord = require("discord.js");
const db = require("quick.db");
const BotData = require("../../data.js");

class RateCommand extends Commando.Command
{
    constructor(client) 
    {
        super(client,{
            name: "rate", 
            group: "simple",
            memberName: 'rate',
            description: 'Rates the thing you say from 0-10!'
        });
    }

    async run(message, args)
    {
        let words = args.split(' ');
        let reason = words.slice(0).join(' ');
        if (!reason)return message.reply('Please supply something to rate! EXP: -rate This command');

        var chance = Math.floor(Math.random() * 11);
        if (chance == 0)
        {
            message.reply("I rate, "+reason+' a 0/10 :broken_heart: ');
        }
        if (chance == 1)
        {
            message.reply("I rate, "+reason+' a 1/10 :rage: ');
        }
        if (chance == 2)
        {
            message.reply("I rate, "+reason+' a 2/10 :confounded: ');
        }
        if (chance == 3)
        {
            message.reply("I rate, "+reason+' a 3/10 :persevere: ');
        }
        if (chance == 4)
        {
            message.reply("I rate, "+reason+' a 4/10 :unamused: ');
        }
        if (chance == 5)
        {
            message.reply("I rate, "+reason+' a 5/10 :rolling_eyes: ');
        }
        if (chance == 6)
        {
            message.reply("I rate, "+reason+' a 6/10 :expressionless: ');
        }
        if (chance == 7)
        {
            message.reply("I rate, "+reason+' a 7/10 :neutral_face: ');
        }
        if (chance == 8)
        {
            message.reply("I rate, "+reason+' a 8/10 :slight_smile: ');
        }
        if (chance == 9)
        {
            message.reply("I rate, "+reason+' a 9/10 :grinning: ');
        }
        if (chance == 10)
        {
            message.reply("I rate, "+reason+' a 10/10 :grin: ');
        }
    }
}

module.exports = RateCommand;