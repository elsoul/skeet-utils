"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDiscord = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
/**
 * Sends a message to a Discord channel using a webhook.
 *
 * @param content - The content of the message to be sent.
 * @param options - Configuration options for sending the message.
 * @returns A promise that resolves to `true` if the message was sent successfully, or `false` otherwise.
 *
 * @example
 * ```typescript
 * sendDiscord('Hello from Skeet Notifier', {
 *   webhookUrl: 'YOUR_DISCORD_WEBHOOK_URL',
 *   username: 'CustomUsername'
 * });
 *
 * // Or you can set the webhook url in .env
 * process.env.DISCORD_WEBHOOK_URL = 'your webhook url'
 * sendDiscord('Hello from Skeet Notifier')
 * ```
 * **options overrides process.env.DISCORD_WEBHOOK_URL**
 */
const sendDiscord = async (content, options = {
    webhookUrl: process.env.DISCORD_WEBHOOK_URL,
    username: 'Skeet Notifier',
}) => {
    try {
        const discordOptions = {
            webhookUrl: options.webhookUrl || process.env.DISCORD_WEBHOOK_URL,
            username: options.username || 'Skeet Notifier',
        };
        if (!discordOptions.webhookUrl) {
            throw new Error('DISCORD_WEBHOOK_URL is empty\nPlease set DISCORD_WEBHOOK_URL in .env');
        }
        const body = {
            content,
            username: discordOptions.username,
        };
        const res = await (0, node_fetch_1.default)(discordOptions.webhookUrl, {
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
exports.sendDiscord = sendDiscord;
//# sourceMappingURL=sendDiscord.js.map