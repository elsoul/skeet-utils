"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const chalk_1 = __importDefault(require("chalk"));
const cli_spinner_1 = require("cli-spinner");
var Logger;
(function (Logger) {
    Logger.successHex = chalk_1.default.hex('#39A845');
    Logger.warningHex = chalk_1.default.hex('#FFD02E');
    Logger.errorHex = chalk_1.default.hex('#B5332E');
    Logger.syncHex = chalk_1.default.hex('#3073B7');
    Logger.greyHex = chalk_1.default.hex('#BEBDBD');
    Logger.indigoHex = chalk_1.default.hex('#3950A0');
    Logger.pinkHex = chalk_1.default.hex('#D8A1C4');
    Logger.syncSpinner = async (text) => {
        const spinner = new cli_spinner_1.Spinner(chalk_1.default.white(text) + ` %s\n`);
        try {
            spinner.setSpinnerString(18);
            spinner.start();
            return spinner;
        }
        catch (error) {
            spinner.stop(true);
            throw new Error(`syncSpinner Error: ${error}`);
        }
    };
    Logger.normal = (text) => {
        console.log(chalk_1.default.white(text));
    };
    Logger.success = (text) => {
        console.log(Logger.successHex(text));
    };
    Logger.warning = (text) => {
        console.log(Logger.warningHex(text));
    };
    Logger.error = (text) => {
        console.log(Logger.errorHex(text));
    };
    Logger.errorString = (text) => {
        return Logger.errorHex(text);
    };
    Logger.sync = (text) => {
        console.log(Logger.syncHex(text));
    };
    Logger.grey = (text) => {
        console.log(Logger.greyHex(text));
    };
    Logger.successCheck = (text) => {
        const check = Logger.successHex('✔');
        const plainText = chalk_1.default.white(text);
        const textLog = `${check} ${plainText} 🎉`;
        console.log(textLog);
    };
})(Logger || (exports.Logger = Logger = {}));
//# sourceMappingURL=logger.js.map