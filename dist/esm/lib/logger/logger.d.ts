import { Spinner } from 'cli-spinner';
export declare module Logger {
    const successHex: import("chalk").ChalkInstance;
    const warningHex: import("chalk").ChalkInstance;
    const errorHex: import("chalk").ChalkInstance;
    const syncHex: import("chalk").ChalkInstance;
    const greyHex: import("chalk").ChalkInstance;
    const indigoHex: import("chalk").ChalkInstance;
    const pinkHex: import("chalk").ChalkInstance;
    const syncSpinner: (text: string) => Promise<Spinner>;
    const normal: (text: string) => void;
    const success: (text: string) => void;
    const warning: (text: string) => void;
    const error: (text: string) => void;
    const errorString: (text: string) => string;
    const sync: (text: string) => void;
    const grey: (text: string) => void;
    const successCheck: (text: string) => void;
}
