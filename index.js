const SlackBot = require('slackbots');
const dotenv = require('dotenv');
const cron = require('node-cron');

dotenv.config();

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'lunchbot',
});

function createJob() {
    const task = cron.schedule('15 12 * * 1-5', () => {
        bot.postMessageToUser('karen', 'go eat lunch ali');
        bot.postMessageToUser('ali', 'go eat lunch ali');
    });

    task.start();
}

bot.on('start', function () {
    bot.postMessageToUser('karen', 'starting');
    createJob();
});
