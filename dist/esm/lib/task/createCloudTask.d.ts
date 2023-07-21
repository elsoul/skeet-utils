export declare const createCloudTask: <T extends {
    [key: string]: any;
}>(queryName: string, params: T, endpoint?: string, returnParams?: string[], inSeconds?: number) => Promise<import("./sendGraphqlRequest").GraphQLResponse>;
