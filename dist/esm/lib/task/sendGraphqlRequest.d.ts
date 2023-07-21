type QueryType = 'query' | 'mutation';
export declare const sendGraphqlRequest: <T extends Record<string, any>>(queryType: QueryType, queryName: string, params: T) => Promise<import("node-fetch").Response>;
export declare const graphqlString: <T extends Record<string, any>>(queryType: QueryType, queryName: string, params: T, outputString?: string[]) => string;
export {};
