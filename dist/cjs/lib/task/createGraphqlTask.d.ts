import { GraphQLResponse } from './sendGraphqlRequest';
import { CloudTaskResponse } from './createCloudTask';
export declare const createGraphqlTask: <T extends Record<string, any>>(accessToken: string, queryName: string, params: T, endpoint: string, returnParams?: string[], inSeconds?: number) => Promise<GraphQLResponse<CloudTaskResponse>>;
