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
const sendDiscord = async (content, options = {
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