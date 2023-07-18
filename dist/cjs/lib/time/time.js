"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimestamp = exports.sleep = void 0;
const date_fns_1 = require("date-fns");
const date_fns_tz_1 = require("date-fns-tz");
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
exports.sleep = sleep;
const getTimestamp = async () => {
    const now = new Date();
    const timeZone = 'UTC';
    const nowUtc = (0, date_fns_tz_1.utcToZonedTime)(now, timeZone);
    const timestamp = (0, date_fns_1.format)(nowUtc, 'yyyy-MM-dd:HH:mm:ss');
    return timestamp;
};
exports.getTimestamp = getTimestamp;
//# sourceMappingURL=time.js.map