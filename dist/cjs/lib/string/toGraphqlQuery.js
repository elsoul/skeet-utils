"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGraphqlQuery = void 0;
const toGraphqlQuery = (queryType, queryName, query) => {
    try {
        const inputString = Object.entries(query)
            .map(([key, value]) => typeof value === 'number' || typeof value === 'boolean'
            ? `${key}: ${value}`
            : `${key}: \"${value.toString()}\"`)
            .join(', ');
        const body = JSON.stringify({
            query: `${queryType} { ${queryName}(input: { ${inputString} }) { response }}`,
            variables: {},
        });
        return body;
    }
    catch (error) {
        throw new Error(`Error in toGraphqlQuery: ${error}`);
    }
};
exports.toGraphqlQuery = toGraphqlQuery;
//# sourceMappingURL=toGraphqlQuery.js.map