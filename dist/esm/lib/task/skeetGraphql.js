import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import { graphqlString } from './sendGraphqlRequest';
dotenv.config();
const endpoint = process.env.SKEET_GRAPHQL_ENDPOINT_URL || '';
export const skeetGraphql = async (accessToken, queryType, queryName, params, returnParams = ['id']) => {
    try {
        const body = graphqlString(queryType, queryName, params, returnParams);
        const res = await fetch(endpoint, {
            method: 'POST',
            body,
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