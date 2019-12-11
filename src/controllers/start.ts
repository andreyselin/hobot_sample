import { hobot } from "../index";

export const startController = {
    path: 'path_start',

    // Get function is executed when we send user
    // to path by hobot.gotoPath(ctx, 'your path', { optional parameters })
    get: async function (ctx, data) {
        return ctx.replyWithHTML('Send "PING" message to get "PONG" response or "NEXT" to go to another controller')
    },

    post: async function (ctx, updateType) {
        if (updateType === hobot.updateTypes.text) {
            const text = ctx.update.message.text;
            if (text === 'PING') {
                return await ctx.replyWithHTML('PONG');
            } else if (text === 'NEXT') {
                return await hobot.gotoPath(ctx, 'path_next');
            }
        }
        await ctx.replyWithHTML('I don`t understand it, only PING please!');
    }
};