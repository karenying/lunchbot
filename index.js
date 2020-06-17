const SlackBot = require('slackbots');
const dotenv = require('dotenv');

dotenv.config();

var bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`, // Add a bot https://my.slack.com/services/new/bot and put the token
    name: 'lunchbot',
});

bot.on('start', function () {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':apple:',
    };

    // define existing username instead of 'user_name'
    bot.postMessageToUser('karen', 'hi!');
});
