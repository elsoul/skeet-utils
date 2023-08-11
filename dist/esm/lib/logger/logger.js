import chalk from 'chalk';
import { Spinner } from 'cli-spinner';
export var Logger;
(function (Logger) {
    Logger.successHex = chalk.hex('#39A845');
    Logger.warningHex = chalk.hex('#FFD02E');
    Logger.errorHex = chalk.hex('#B5332E');
    Logger.syncHex = chalk.hex('#3073B7');
    Logger.greyHex = chalk.hex('#BEBDBD');
    Logger.indigoHex = chalk.hex('#3950A0');
    Logger.pinkHex = chalk.hex('#D8A1C4');
    Logger.syncSpinner = async (text) => {
        const spinner = new Spinner(chalk.white(text) + ` %s\n`);
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
        console.log(chalk.white(text));
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
        const plainText = chalk.white(text);
        const textLog = `${check} ${plainText} 🎉`;
        console.log(textLog);
    };
})(Logger || (Logger = {}));
//# sourceMappingURL=logger.js.map