type QueryType = 'query' | 'mutation';
export declare const toGraphqlQuery: <T extends {
    [key: string]: string | number | boolean;
}>(queryType: QueryType, queryName: string, query: T) => string;
export {};
