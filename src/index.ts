import Telegraf from "telegraf";
import { Hobot } from "hobot";
import { startController } from "./controllers/start";

// Paste your token here
const token = '566877871:AAFPkKg8ii0Q8PZIYB9GUWd5JfkwKaRssyQ';
const bot = new Telegraf(token);

// Wrapping bot with hobot
export const hobot = new Hobot(bot, {
    defaultPath: '/start',
    commands: [
        // Setting controller bound to '/start' path to execute on start command
        { command: 'start', path: '/start' }
        // You can also add other commands in this array
    ],
    controllers: [
        startController
    ]
});
// Adding controller to send user to
// and to execute its code when user is on it
// hobot.createRoute(startController);

// Start telegram bot
bot.launch();