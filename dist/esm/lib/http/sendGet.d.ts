import { Response as NodeFetchResponse } from 'node-fetch';
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
export declare const sendGet: (url: string, params?: any, token?: string) => Promise<NodeFetchResponse>;
