import { SkeetOptions } from './createGraphqlTask';
export declare const createCloudTask: <T extends {
    [key: string]: any;
}>(skeetOptions: SkeetOptions, queryName: string, params: T, inSeconds?: number) => Promise<string | import("node-fetch").Response | null | undefined>;
