export type SkeetOptions = {
    name: string;
    projectId: string;
    region: string;
    appDomain: string;
    lbDomain: string;
    nsDomain: string;
    graphqlEndpoint: string;
};
export declare const createGraphqlTask: <T extends Record<string, any>>(skeetOptions: SkeetOptions, queryName: string, params: T, inSeconds?: number) => Promise<string | null | undefined>;
