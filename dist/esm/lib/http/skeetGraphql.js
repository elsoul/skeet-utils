import fetch from 'node-fetch';
const skeetEnv = process.env.NODE_ENV || 'development';
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
 * const query: CreateUserQuery = `mutation Mutation(
 * $uid: String
 * $username: String
 * $email: String
 * $iconUrl: String
 * ) {
 * createUser(uid: $uid, username: $username, email: $email, iconUrl: $iconUrl) {
 *  id
 *  rawId
 *  uid
 *  username
 *  email
 *  iconUrl
 *  role
 *  iv
 *  createdAt
 *  updatedAt
 *  }
 * }`
 * const accessToken = 'your_access_token'
 * const variables: CreateUserParams = {
 *  uid: 'your_uid',
 *  username: 'your_username',
 *  email: 'your_email',
 *  iconUrl: 'your_icon_url',
 * }
 *
 *
 *
 *
 *
 *
 * const endpoint = 'https://your-production-endpoint.com/graphql'
 *
 * const user = await skeetGraphql<UserType, CreateUserParams>(accessToken, endpoint, query, variables)
 * console.log(user)
 * ```
 */
export const skeetGraphql = async (accessToken, endpoint, query, variables = {}) => {
    const baseUrl = skeetEnv === 'production' ? endpoint : 'http://localhost:3000/graphql';
    console.log({ query });
    try {
        const res = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify({ query, variables }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const result = await res.json();
        return result;
    }
    catch (error) {
        throw new Error(`skeetGraphql failed: ${error}`);
    }
};
//# sourceMappingURL=skeetGraphql.js.map