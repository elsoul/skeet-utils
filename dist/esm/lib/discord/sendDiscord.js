import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();
export const sendDiscord = async (content, options = {
    webhookUrl: process.env.DISCORD_WEBHOOK_URL,
    username: 'Skeet Notifier',
}) => {
    try {
        const discordOptions = {
            webhookUrl: process.env.DISCORD_WEBHOOK_URL || options.webhookUrl,
            username: options.username || 'Skeet Notifier',
        };
        if (!discordOptions.webhookUrl)
            throw new Error('DISCORD_WEBHOOK_URL is empty\nPlease set DISCORD_WEBHOOK_URL in .env');
        const body = {
            content,
            username: discordOptions.username,
        };
        const res = await fetch(discordOptions.webhookUrl, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        });
        if (res.status !== 204)
            return false;
        return true;
    }
    catch (e) {
        console.log({ error: `Skeet sendDiscord Error - ${content}` });
        return false;
    }
};
//# sourceMappingURL=sendDiscord.js.map