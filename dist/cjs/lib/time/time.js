"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utcNow = exports.sleep = void 0;
const date_fns_tz_1 = require("date-fns-tz");
/**
 * Sleeps for the specified number of milliseconds.
 *
 * @param ms - The number of milliseconds to sleep.
 * @returns A promise that resolves after the specified time.
 *
 * @example
 * async function main() {
 *   console.log('Start');
 *   await sleep(2000); // Sleep for 2 seconds
 *   console.log('End'); // Printed after sleep
 * }
 * main();
 */
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
exports.sleep = sleep;
/**
 * Returns the current UTC time.
 *
 * @returns The current UTC time.
 *
 * @example
 * const now = utcNow();
 * console.log(now); // Current UTC time
 */
const utcNow = () => {
    const now = new Date();
    const timeZone = 'UTC';
    const nowUtc = (0, date_fns_tz_1.utcToZonedTime)(now, timeZone);
    return nowUtc;
};
exports.utcNow = utcNow;
//# sourceMappingURL=time.js.map