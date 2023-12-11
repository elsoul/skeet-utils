"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLowerCase = exports.toUpperCase = exports.toCamelCase = exports.toPascalCase = exports.convertFromKebabCaseToLowerCase = exports.convertToKebabCase = void 0;
/**
 * Converts a string to kebab case.
 *
 * @param str - The input string to be converted.
 * @returns The kebab case version of the input string.
 *
 * @example
 * const inputString = 'convertToKebabCase';
 * const kebabCaseString = convertToKebabCase(inputString);
 * console.log(kebabCaseString); // "convert-to-kebab-case"
 */
const convertToKebabCase = (str) => {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
exports.convertToKebabCase = convertToKebabCase;
/**
 * Converts a kebab case string to lower case.
 *
 * @param str - The input string in kebab case.
 * @returns The lower case version of the input string.
 *
 * @example
 * const inputString = 'convert-to-kebab-case';
 * const lowerCaseString = convertFromKebabCaseToLowerCase(inputString);
 * console.log(lowerCaseString); // "converttokebabcase"
 */
const convertFromKebabCaseToLowerCase = (str) => {
    return str.replace(/-/g, '').toLowerCase();
};
exports.convertFromKebabCaseToLowerCase = convertFromKebabCaseToLowerCase;
/**
 * Converts a string to Pascal case.
 *
 * @param str - The input string to be converted.
 * @returns The Pascal case version of the input string.
 *
 * @example
 * const inputString = 'to_pascal_case';
 * const pascalCaseString = toPascalCase(inputString);
 * console.log(pascalCaseString); // "ToPascalCase"
 */
const toPascalCase = (str) => {
    return str
        .split(/(?=[A-Z])|[-_\s]/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
};
exports.toPascalCase = toPascalCase;
/**
 * Converts a string to Camel case.
 *
 * @param str - The input string to be converted.
 * @returns The Camel case version of the input string.
 *
 * @example
 * const inputString = 'to_camel_case';
 * const camelCaseString = toCamelCase(inputString);
 * console.log(camelCaseString); // "toCamelCase"
 */
const toCamelCase = (str) => {
    return str
        .split(/(?=[A-Z])|[-_\s]/)
        .map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
        .join('');
};
exports.toCamelCase = toCamelCase;
/**
 * Converts the first character of a string to upper case.
 *
 * @param str - The input string.
 * @returns The input string with the first character in upper case.
 *
 * @example
 * const inputString = 'hello';
 * const upperCaseString = await toUpperCase(inputString);
 * console.log(upperCaseString); // "Hello"
 */
const toUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
exports.toUpperCase = toUpperCase;
/**
 * Converts the first character of a string to lower case.
 *
 * @param str - The input string.
 * @returns The input string with the first character in lower case.
 *
 * @example
 * const inputString = 'World';
 * const lowerCaseString = await toLowerCase(inputString);
 * console.log(lowerCaseString); // "world"
 */
const toLowerCase = (str) => {
    return str.charAt(0).toLowerCase() + str.slice(1);
};
exports.toLowerCase = toLowerCase;
//# sourceMappingURL=string.js.map