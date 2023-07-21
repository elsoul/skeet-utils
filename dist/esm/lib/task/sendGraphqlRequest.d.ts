export type QueryType = 'query' | 'mutation';
export type GraphQLResponse = {
    data: Record<string, any>;
};
export declare const sendGraphqlRequest: <T extends Record<string, any>>(queryType: QueryType, queryName: string, params: T, returnParams?: string[]) => Promise<GraphQLResponse>;
export declare const graphqlString: <T extends Record<string, any>>(queryType: QueryType, queryName: string, params: T, outputString?: string[]) => string;
