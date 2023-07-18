type QueryType = 'query' | 'mutation';
type Query = {
    [key: string]: string | number | boolean;
};
export declare const toGraphqlQuery: (queryType: QueryType, queryName: string, query: Query) => string;
export {};
