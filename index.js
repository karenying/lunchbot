const SlackBot = require('slackbots');
const dotenv = require('dotenv');
const cron = require('node-cron');

dotenv.config();

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'lunchbot',
});

function createJob() {
    /*
    const task = cron.schedule('15 12 * * 1-5', () => {
        bot.postMessageToUser('karen', 'hi!');
    }); */

    const task = cron.schedule('0,15,30,45 * * * * *', () => {
        bot.postMessageToUser('karen', 'hi!');
    });

    task.start();
}

bot.on('start', function () {
    bot.postMessageToUser('karen', 'starting');
    createJob();
});
