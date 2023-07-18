"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeBase64 = void 0;
const encodeBase64 = async (payload) => {
    return Buffer.from(payload).toString('base64');
};
exports.encodeBase64 = encodeBase64;
//# sourceMappingURL=base64.js.map