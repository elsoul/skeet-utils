type QueryType = 'query' | 'mutation';
export declare const sendGraphqlRequest: <T extends Record<string, any>>(queryType: QueryType, queryName: string, query: T) => Promise<import("node-fetch").Response>;
export {};
