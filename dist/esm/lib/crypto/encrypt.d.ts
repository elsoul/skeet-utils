/**
 * @module crypto
 * @preferred
 */
/**
 * Encrypts data using the given parameters.
 *
 * @param data - The data to be encrypted.
 * @param iv - The initialization vector.
 * @param password - The password for encryption.
 * @param salt - The salt for key derivation.
 * @returns The encrypted data.
 *
 * @example
 * const data = 'Sensitive information';
 * const iv = '1234567890123456'; // 16 characters
 * const password = 'MySecretPassword';
 * const salt = 'MySalt';
 * const encrypted = encrypt(data, iv, password, salt);
 * console.log(encrypted);
 */
export declare const encrypt: (data: string, iv: string, password: string, salt: string) => string;
