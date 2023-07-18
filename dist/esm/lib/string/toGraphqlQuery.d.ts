type QueryType = 'query' | 'mutation';
export declare const toGraphqlQuery: <T extends {
    [key: string]: string | number | boolean | string[] | number[] | boolean[] | null | undefined;
}>(queryType: QueryType, queryName: string, query: T) => string;
export {};
