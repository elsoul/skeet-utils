import { SkeetOptions } from './createHttpTaskWithToken';
export declare const createCloudTask: <T extends {
    [key: string]: any;
}>(skeetOptions: SkeetOptions, queue: string | undefined, graphqlQuery: T, inSeconds?: number) => Promise<string | import("node-fetch").Response | null | undefined>;
