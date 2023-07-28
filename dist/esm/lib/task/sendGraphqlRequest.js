import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || '';
export const sendGraphqlRequest = async (queryType, queryName, params, returnParams = ['id'], endpoint = 'http://localhost:3000/graphql') => {
    const body = graphqlString(queryType, queryName, params, returnParams);
    try {
        const res = await fetch(endpoint, {
            method: 'POST',
            body,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
        });
        const result = await res.json();
        console.log(`GraphQL body: ${body}`);
        return result;
    }
    catch (error) {
        console.log(`GraphQL body: ${body}`);
        throw new Error(`sendGraphqlRequest failed: ${error}`);
    }
};
export const graphqlString = (queryType, queryName, params, outputString = ['id']) => {
    try {
        const inputString = Object.entries(params)
            .map(([key, value]) => {
            if (value === undefined || value === null) {
                return `${key}: ""`;
            }
            else if (typeof value === 'number' || typeof value === 'boolean') {
                return `${key}: ${value}`;
            }
            else {
                return `${key}: "${value}"`;
            }
        })
            .join(', ');
        const returnParams = outputString.join(' ');
        const graphql = JSON.stringify({
            query: `${queryType} { ${queryName}(${inputString}) { ${returnParams} } }`,
            variables: {},
        });
        return graphql;
    }
    catch (error) {
        throw new Error(`graphqlString failed: ${error}`);
    }
};
//# sourceMappingURL=sendGraphqlRequest.js.map