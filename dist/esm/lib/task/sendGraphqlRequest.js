import fetch from 'node-fetch';
export const sendGraphqlRequest = async (queryType, queryName, params) => {
    try {
        const body = graphqlString(queryType, queryName, params);
        const baseUrl = 'http://localhost:3000/graphql';
        const res = await fetch(baseUrl, {
            method: 'POST',
            body,
            headers: { 'Content-Type': 'application/json' },
        });
        return res;
    }
    catch (error) {
        throw new Error(`sendGraphqlRequest failed: ${error}`);
    }
};
export const graphqlString = (queryType, queryName, params) => {
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
        const graphql = JSON.stringify({
            query: `${queryType} { ${queryName}(${inputString}) { id } }`,
            variables: {},
        });
        return graphql;
    }
    catch (error) {
        throw new Error(`graphqlString failed: ${error}`);
    }
};
//# sourceMappingURL=sendGraphqlRequest.js.map