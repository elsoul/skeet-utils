"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skeetGraphql = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const skeetEnv = process.env.NODE_ENV || 'development';
/**
 * Executes a GraphQL query against a given endpoint.
 *
 * @template T - The expected return type of the GraphQL query.
 * @param {string} accessToken - The access token for authentication.
 * @param {string} endpoint - The endpoint URL for the GraphQL server.
 * @param {string} graphqlQuery - The GraphQL query to be executed.
 * @returns {Promise<T>} - Returns a promise that resolves to the result of the GraphQL query.
 *
 * @throws Will throw an error if the GraphQL query fails.
 *
 * @example
 * ```typescript
 * const query = `{ user { id, name } }`;
 * const accessToken = 'your_access_token';
 * const endpoint = 'https://your-production-endpoint.com/graphql';
 *
 * const user = await skeetGraphql<UserType>(accessToken, endpoint, query)
 * console.log(user)
 * ```
 */
const skeetGraphql = async (accessToken, endpoint, graphqlQuery) => {
    const baseUrl = skeetEnv === 'production' ? endpoint : 'http://localhost:3000/graphql';
    console.log({ graphqlQuery });
    try {
        const res = await (0, node_fetch_1.default)(baseUrl, {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
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
exports.skeetGraphql = skeetGraphql;
//# sourceMappingURL=skeetGraphql.js.map