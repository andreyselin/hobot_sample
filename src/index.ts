import Telegraf from "telegraf";
import { Hobot } from "hobot";
import { startController } from "./controllers/start";
import { nextController } from "./controllers/next";

// Paste your token here
const token = '566877871:AAFPkKg8ii0Q8PZIYB9GUWd5JfkwKaRssyQ';
const bot = new Telegraf(token);

// Wrapping bot with hobot
export const hobot = new Hobot(bot, {
    defaultPath: 'path_start',
    commands: [
        // Setting controller bound to '/start' path to execute on start command
        { command: 'start', path: 'path_start' }
        // You can also add other commands in this array
    ],

    // Add here controllers you want to work with:
    controllers: [
        startController,
        nextController
    ]
});

// Start telegram bot
bot.launch();