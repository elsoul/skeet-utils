"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlString = exports.escapeGraphQLString = void 0;
const escapeGraphQLString = (str) => {
    return str
        .replace(/\\`/g, '`') // replace \` with `
        .replace(/\\/g, '\\\\') // replace \ with \\
        .replace(/"/g, '\\"') // replace " with \"
        .replace(/\n/g, '\\n'); // replace newline with \n
};
exports.escapeGraphQLString = escapeGraphQLString;
const graphqlString = (queryType, queryName, params, outputString = ['id']) => {
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
                const escapedValue = (0, exports.escapeGraphQLString)(value);
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
exports.graphqlString = graphqlString;
//# sourceMappingURL=graphqlString.js.map