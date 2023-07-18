export const toGraphqlQuery = (queryType, queryName, query) => {
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
//# sourceMappingURL=toGraphqlQuery.js.map