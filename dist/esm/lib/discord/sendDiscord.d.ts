/**
 * Options for sending a message to Discord.
 */
export type DiscordOptions = {
    /** The Discord webhook URL. */
    webhookUrl?: string;
    /** The username that will be displayed when sending the message. */
    username?: string;
};
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
export declare const sendDiscord: (content: string, options?: DiscordOptions) => Promise<boolean>;
