"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomInt = void 0;
const getRandomInt = (min = 1, max = 10) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.getRandomInt = getRandomInt;
//# sourceMappingURL=random.js.map