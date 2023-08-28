"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeBase64 = exports.encodeBase64 = void 0;
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
const encodeBase64 = (payload) => {
    return Buffer.from(payload).toString('base64');
};
exports.encodeBase64 = encodeBase64;
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
const decodeBase64 = (payload) => {
    return Buffer.from(payload, 'base64').toString('utf-8');
};
exports.decodeBase64 = decodeBase64;
//# sourceMappingURL=base64.js.map