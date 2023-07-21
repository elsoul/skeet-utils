export declare const createCloudTask: <T extends {
    [key: string]: any;
}>(projectId: string, region: string, queryName: string, params: T, endpoint: string, inSeconds?: number) => Promise<string | import("node-fetch").Response | null | undefined>;
