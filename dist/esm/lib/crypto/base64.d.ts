/**
 * Encodes a payload to base64.
 *
 * @param payload - The data to be encoded.
 * @returns The base64-encoded payload.
 *
 * @example
 * const data = 'Hello, world!';
 * const encodedData = encodeBase64(data);
 * console.log(encodedData); // Base64-encoded data
 */
export declare const encodeBase64: (payload: string) => string;
/**
 * Decodes a base64-encoded payload to a string.
 *
 * @param payload - The base64-encoded data to be decoded.
 * @returns The decoded payload as a UTF-8 string.
 *
 * @example
 * const encodedData = 'SGVsbG8sIHdvcmxkIQ=='; // Base64-encoded data
 * const decodedData = decodeBase64(encodedData);
 * console.log(decodedData); // Decoded data: "Hello, world!"
 */
export declare const decodeBase64: (payload: string) => string;
