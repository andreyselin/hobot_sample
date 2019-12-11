import { hobot } from "../index";

export const startController = {
    path: '/start',

    // Get function is executed when we send user
    // to path by hobot.gotoPath(ctx, 'your path', { optional parameters })
    get: async (ctx, data) =>
        ctx.replyWithHTML('Send "PING" message to get "PONG" response or "NEXT" to go to another controller'),

    post: async (ctx, updateType) => {
        if (updateType === hobot.updateTypes.text) {
            const text = ctx.update.message.text;
            if (text === 'PING') {
                return await ctx.replyWithHTML('PONG');
            }
        }
        await ctx.replyWithHTML('I don`t understand it, only PING please!');
    }
};