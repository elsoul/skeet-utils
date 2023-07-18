type SkeetOptions = {
    name: string;
    projectId: string;
    region: string;
    appDomain: string;
    lbDomain: string;
    nsDomain: string;
};
export declare const createHttpTaskWithToken: (queue: string | undefined, payload: string, inSeconds: number | undefined, skeetOptions: SkeetOptions) => Promise<string | null | undefined>;
export {};
