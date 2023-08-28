"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomSalt = void 0;
const crypto_1 = require("crypto");
/**
 * Generates a random salt for key derivation.
 *
 * @param bytes - The number of bytes for the generated salt. Default is 16 bytes.
 * @returns The generated salt as a hexadecimal string.
 *
 * @example
 * const salt = generateRandomSalt();
 * console.log(salt); // Random hexadecimal salt
 */
function generateRandomSalt(bytes = 16) {
    try {
        return (0, crypto_1.randomBytes)(bytes).toString('hex');
    }
    catch (error) {
        throw new Error(`generateRandomSalt: ${error}`);
    }
}
exports.generateRandomSalt = generateRandomSalt;
//# sourceMappingURL=genRandomSalt.js.map