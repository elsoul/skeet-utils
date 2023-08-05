import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || '';
export const sendDiscord = async (content) => {
    try {
        if (DISCORD_WEBHOOK_URL === '')
            throw new Error('DISCORD_WEBHOOK_URL is empty\nPlease set DISCORD_WEBHOOK_URL in .env');
        const body = {
            content,
            username: 'Skeet Notifier',
        };
        const res = await fetch(DISCORD_WEBHOOK_URL, {
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