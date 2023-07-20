"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlString = exports.sendGraphqlRequest = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const sendGraphqlRequest = async (queryType, queryName, params) => {
    try {
        const body = (0, exports.graphqlString)(queryType, queryName, params);
        const baseUrl = 'http://localhost:3000/graphql';
        const res = await (0, node_fetch_1.default)(baseUrl, {
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
exports.sendGraphqlRequest = sendGraphqlRequest;
const graphqlString = (queryType, queryName, params) => {
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
exports.graphqlString = graphqlString;
//# sourceMappingURL=sendGraphqlRequest.js.map