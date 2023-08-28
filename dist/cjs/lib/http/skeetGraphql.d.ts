/**
 * Executes a GraphQL query against a given endpoint.
 *
 * @template T - The expected return type of the GraphQL query.
 * @template V - The type of the variables used in the GraphQL query.
 * @param {string} accessToken - The access token for authentication.
 * @param {string} endpoint - The endpoint URL for the GraphQL server.
 * @param {string} query - The GraphQL query to execute.
 * @param {V} variables - Optional variables to be used in the GraphQL query.
 * @returns {Promise<T>} - Returns a promise that resolves to the result of the GraphQL query.
 *
 * @throws Will throw an error if the GraphQL query fails.
 *
 * @example
 * ```typescript
 * const query: CreateUserQuery = `mutation { createUser(name: "EpicsDAO") { id name } }}`;
 * const accessToken = 'your_access_token';
 * const endpoint = 'https://your-production-endpoint.com/graphql';
 *
 * const user = await skeetGraphql<UserType, CreateUserQuery>(accessToken, endpoint, query)
 * console.log(user)
 * ```
 */
export declare const skeetGraphql: <T, V>(accessToken: string, endpoint: string, query: string, variables?: V) => Promise<T>;
