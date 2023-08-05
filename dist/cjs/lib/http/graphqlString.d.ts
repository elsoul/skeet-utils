export type QueryType = 'query' | 'mutation';
export type GraphQLResponse<T> = {
    data: {
        [key: string]: T;
    };
};
export declare const escapeGraphQLString: (str: string) => string;
export declare const graphqlString: <T extends Record<string, any>>(queryType: QueryType, queryName: string, params: T, outputString?: string[]) => string;
