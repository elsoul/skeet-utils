import { randomBytes } from 'crypto'

export function generateRandomSalt(bytes = 16) {
  return randomBytes(bytes).toString('hex')
}
