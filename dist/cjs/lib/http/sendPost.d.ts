import { Response as NodeFetchResponse } from 'node-fetch';
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
export declare const sendPost: <T>(url: string, body: T, token?: string) => Promise<NodeFetchResponse>;
