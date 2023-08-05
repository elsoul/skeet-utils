export const escapeGraphQLString = (str) => {
    return str
        .replace(/\\`/g, '`') // replace \` with `
        .replace(/\\/g, '\\\\') // replace \ with \\
        .replace(/"/g, '\\"') // replace " with \"
        .replace(/\n/g, '\\n'); // replace newline with \n
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
                // Escape special characters in the string
                const escapedValue = escapeGraphQLString(value);
                return `${key}: \"${escapedValue}\"`;
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
//# sourceMappingURL=graphqlString.js.map