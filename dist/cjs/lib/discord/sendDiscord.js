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
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || '';
const sendDiscord = async (content) => {
    try {
        if (DISCORD_WEBHOOK_URL === '')
            throw new Error('DISCORD_WEBHOOK_URL is empty\nPlease set DISCORD_WEBHOOK_URL in .env');
        const body = {
            content,
            username: 'Skeet Notifier',
        };
        const res = await (0, node_fetch_1.default)(DISCORD_WEBHOOK_URL, {
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