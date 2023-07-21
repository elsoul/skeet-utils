import { CloudTaskResponse } from './createGraphqlTask';
import { GraphQLResponse } from './sendGraphqlRequest';
export declare const createCloudTask: <T extends {
    [key: string]: any;
}>(queryName: string, params: T, endpoint?: string, returnParams?: string[], inSeconds?: number) => Promise<GraphQLResponse<CloudTaskResponse> | GraphQLResponse<GraphQLResponse<Record<string, any>>>>;
