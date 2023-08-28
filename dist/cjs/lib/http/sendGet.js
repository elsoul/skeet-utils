"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendGet = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
/**
 * Sends a GET request to a specified URL with optional parameters and Bearer Token.
 * Content-Type is set to application/json.
 *
 * @param url - The URL to send the GET request to.
 * @param params - Optional query parameters to be appended to the URL.
 * @param token - Optional token to be included in the Authorization header.
 *
 * @returns The response from the GET request.
 *
 * @example
 * ```typescript
 * const response = await sendGet('https://api.example.com/data', { q: 'searchTerm' }, 'mytoken123');
 * const data = await response.json();
 * console.log(data);
 * ```
 *
 * @throws Will throw an error if the GET request fails.
 */
const sendGet = async (url, params, token) => {
    try {
        let headers = { 'Content-Type': 'application/json' };
        let urlWithParams = url;
        if (params) {
            const queryParams = new URLSearchParams(params).toString();
            urlWithParams = `${url}?${queryParams}`;
        }
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const res = await (0, node_fetch_1.default)(urlWithParams, {
            method: 'GET',
            headers,
        });
        return res;
    }
    catch (e) {
        console.log({ e });
        throw new Error('sendGET failed');
    }
};
exports.sendGet = sendGet;
//# sourceMappingURL=sendGet.js.map