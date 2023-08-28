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
export declare function sleep(ms: number): Promise<void>;
/**
 * Returns the current UTC time.
 *
 * @returns The current UTC time.
 *
 * @example
 * const now = utcNow();
 * console.log(now); // Current UTC time
 */
export declare const utcNow: () => Date;
