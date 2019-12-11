import { hobot } from "../index";

export const nextController = {
    path: 'path_next',

    get: async (ctx, data) =>
        ctx.replyWithHTML('Type "BACK" to return to start controller or press /start command:'),

    post: async (ctx, updateType) => {
        if (updateType === hobot.updateTypes.text) {
            const text = ctx.update.message.text;
            if (text === 'BACK') {
                return await hobot.gotoPath(ctx, 'path_start');
            }
        }
        await ctx.replyWithHTML('I don`t understand it, only "BACK" please!');
    }
};