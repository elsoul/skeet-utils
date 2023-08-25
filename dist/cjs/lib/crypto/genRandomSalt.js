"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomSalt = void 0;
const crypto_1 = require("crypto");
function generateRandomSalt(bytes = 16) {
    return (0, crypto_1.randomBytes)(bytes).toString('hex');
}
exports.generateRandomSalt = generateRandomSalt;
//# sourceMappingURL=genRandomSalt.js.map