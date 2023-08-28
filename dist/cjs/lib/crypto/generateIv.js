"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateIv = void 0;
const crypto_1 = require("crypto");
const crypto_2 = require("./crypto");
/**
 * Generates a random initialization vector (IV) for encryption.
 *
 * @returns The generated initialization vector as a base64-encoded string.
 *
 * @example
 * const iv = generateIv();
 * console.log(iv); // Random base64-encoded initialization vector
 */
const generateIv = () => {
    try {
        const iv = (0, crypto_1.randomBytes)(16);
        return Buffer.from(iv).toString(crypto_2.outputEncoding);
    }
    catch (error) {
        throw new Error(`generateIv: ${error}`);
    }
};
exports.generateIv = generateIv;
//# sourceMappingURL=generateIv.js.map