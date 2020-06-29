const SlackBot = require('slackbots');
const dotenv = require('dotenv');
const cron = require('node-cron');

dotenv.config();

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'lunchbot',
});

function createJob() {
    const task = cron.schedule(
        '32 12 * * 1-5',
        () => {
            bot.postMessageToChannel('lunchbot-test', 'go eat lunch ali');
        },
        {
            scheduled: true,
            timezone: 'America/New_York',
        }
    );

    task.start();
}

bot.on('start', function () {
    // bot.postMessageToUser('karen', 'lunchbox starting...');
    createJob();
});
