/**
 * @module crypto
 * @preferred
 */
/**
 * Decrypts data using the given parameters.
 *
 * @param encryptedData - The encrypted data.
 * @param iv - The initialization vector.
 * @param password - The password for decryption.
 * @param salt - The salt for key derivation.
 * @returns The decrypted data.
 *
 * @example
 * const encrypted = 'EncryptedDataHere'; // Encrypted data obtained from the encryption process
 * const iv = '1234567890123456'; // Initialization vector used in the encryption process
 * const password = 'MySecretPassword'; // Password used in the encryption process
 * const salt = 'MySalt'; // Salt used in the encryption process
 * const decrypted = decrypt(encrypted, iv, password, salt);
 * console.log(decrypted);
 */
export declare const decrypt: (encryptedData: string, iv: string, password: string, salt: string) => string;
