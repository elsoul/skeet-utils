import { GraphQLResponse } from './sendGraphqlRequest';
export type CloudTaskResponse = {
    id: string;
};
export declare const createGraphqlTask: <T extends Record<string, any>>(queryName: string, params: T, endpoint: string, returnParams?: string[], inSeconds?: number) => Promise<GraphQLResponse<CloudTaskResponse>>;
