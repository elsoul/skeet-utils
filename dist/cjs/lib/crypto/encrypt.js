"use strict";
/**
 * @module crypto
 * @preferred
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = void 0;
const crypto_1 = require("crypto");
const crypto_2 = require("./crypto");
/**
 * Encrypts data using the given parameters.
 *
 * @param data - The data to be encrypted.
 * @param iv - The initialization vector.
 * @param password - The password for encryption.
 * @param salt - The salt for key derivation.
 * @returns The encrypted data.
 *
 * @example
 * const data = 'Sensitive information';
 * const iv = '1234567890123456'; // 16 characters
 * const password = 'MySecretPassword';
 * const salt = 'MySalt';
 * const encrypted = encrypt(data, iv, password, salt);
 * console.log(encrypted);
 */
const encrypt = (data, iv, password, salt) => {
    try {
        const key = (0, crypto_1.scryptSync)(password, salt, 32);
        const cipher = (0, crypto_1.createCipheriv)(crypto_2.algorithm, key, Buffer.from(iv, crypto_2.outputEncoding));
        let cipheredData = cipher.update(data, crypto_2.inputEncoding, crypto_2.outputEncoding);
        cipheredData += cipher.final(crypto_2.outputEncoding);
        return cipheredData;
    }
    catch (error) {
        throw new Error(`encrypt: ${error}`);
    }
};
exports.encrypt = encrypt;
//# sourceMappingURL=encrypt.js.map