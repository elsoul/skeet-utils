type DiscordOptions = {
    webhookUrl?: string;
    username?: string;
};
export declare const sendDiscord: (content: string, options?: DiscordOptions) => Promise<boolean>;
export {};
