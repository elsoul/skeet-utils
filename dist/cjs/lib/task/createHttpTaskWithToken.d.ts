export type SkeetOptions = {
    name: string;
    projectId: string;
    region: string;
    appDomain: string;
    lbDomain: string;
    nsDomain: string;
};
export declare const createHttpTaskWithToken: <T>(skeetOptions: SkeetOptions, queue: string | undefined, graphqlQuery: T, inSeconds?: number) => Promise<string | null | undefined>;
