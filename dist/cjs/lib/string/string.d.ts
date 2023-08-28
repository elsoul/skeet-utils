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
export declare const convertToKebabCase: (str: string) => string;
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
export declare const convertFromKebabCaseToLowerCase: (str: string) => string;
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
export declare const toPascalCase: (str: string) => string;
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
export declare const toCamelCase: (str: string) => string;
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
export declare const toUpperCase: (str: string) => Promise<string>;
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
export declare const toLowerCase: (str: string) => Promise<string>;
