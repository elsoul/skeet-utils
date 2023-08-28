/**
 * Generates a random integer within the specified range.
 *
 * @param min - The minimum value of the range (inclusive). Default is 1.
 * @param max - The maximum value of the range (inclusive). Default is 10.
 * @returns A random integer within the specified range.
 *
 * @example
 * const randomNum = getRandomInt(5, 20);
 * console.log(randomNum); // Random integer between 5 and 20 (inclusive)
 */
export const getRandomInt = (min = 1, max = 10) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//# sourceMappingURL=random.js.map