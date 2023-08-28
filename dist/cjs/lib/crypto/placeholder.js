"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gravatarIconUrl = void 0;
const crypto_1 = require("crypto");
/**
 * Generates a Gravatar icon URL for the given email address.
 *
 * @param email - The email address to generate the Gravatar icon URL for.
 * @returns The Gravatar icon URL.
 *
 * @example
 * const email = 'user@example.com';
 * const gravatarUrl = gravatarIconUrl(email);
 * console.log(gravatarUrl); // Gravatar icon URL
 */
const gravatarIconUrl = (email) => {
    try {
        const md5Hash = (0, crypto_1.createHash)('md5');
        const trimmedEmail = email.trim().toLowerCase();
        const hash = md5Hash.update(trimmedEmail).digest('hex');
        return `https://www.gravatar.com/avatar/${hash}?d=retro&s=256`;
    }
    catch (error) {
        throw new Error(`gravatarIconUrl: ${error}`);
    }
};
exports.gravatarIconUrl = gravatarIconUrl;
//# sourceMappingURL=placeholder.js.map