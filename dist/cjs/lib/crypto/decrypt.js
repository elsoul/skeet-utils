"use strict";
/**
 * @module crypto
 * @preferred
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = void 0;
const crypto_1 = require("crypto");
const crypto_2 = require("./crypto");
/**
 * Decrypts data using the given parameters.
 *
 * @param encryptedData - The encrypted data.
 * @param iv - The initialization vector.
 * @param password - The password for decryption.
 * @param salt - The salt for key derivation.
 * @returns The decrypted data.
 *
 * @example
 * const encrypted = 'EncryptedDataHere'; // Encrypted data obtained from the encryption process
 * const iv = '1234567890123456'; // Initialization vector used in the encryption process
 * const password = 'MySecretPassword'; // Password used in the encryption process
 * const salt = 'MySalt'; // Salt used in the encryption process
 * const decrypted = decrypt(encrypted, iv, password, salt);
 * console.log(decrypted);
 */
const decrypt = (encryptedData, iv, password, salt) => {
    try {
        const key = (0, crypto_1.scryptSync)(password, salt, 32);
        const decipher = (0, crypto_1.createDecipheriv)(crypto_2.algorithm, key, Buffer.from(iv, crypto_2.outputEncoding));
        let decryptedData = decipher.update(encryptedData, crypto_2.outputEncoding, crypto_2.inputEncoding);
        decryptedData += decipher.final(crypto_2.inputEncoding);
        return decryptedData;
    }
    catch (error) {
        throw new Error(`decrypt: ${error}`);
    }
};
exports.decrypt = decrypt;
//# sourceMappingURL=decrypt.js.map