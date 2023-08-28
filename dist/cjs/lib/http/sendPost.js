"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPost = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
/**
 * Sends a POST request to a specified URL with a given body and Bearer Token.
 * Content-Type is set to application/json.
 *
 * @template T - The type of the request body.
 *
 * @param url - The URL to send the POST request to.
 * @param body - The body of the POST request.
 * @param token - Optional token to be included in the Authorization header.
 *
 * @returns The response from the POST request.
 *
 * @example
 * ```typescript
 * const response = await sendPost<{ name: string }>('https://api.example.com/users', { name: 'Alice' }, 'mytoken123');
 * const data = await response.json();
 * console.log(data);
 * ```
 *
 * @throws Will throw an error if the POST request fails, including the failed request body.
 */
const sendPost = async (url, body, token) => {
    try {
        let headers = { 'Content-Type': 'application/json' };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const response = await (0, node_fetch_1.default)(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers,
        });
        return response;
    }
    catch (e) {
        console.log({ e });
        throw new Error(`sendPost failed: ${JSON.stringify(body)}`);
    }
};
exports.sendPost = sendPost;
//# sourceMappingURL=sendPost.js.map