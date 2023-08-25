export const encodeBase64 = (payload: string) => {
  return Buffer.from(payload).toString('base64')
}

export const decodeBase64 = (payload: string) => {
  return Buffer.from(payload, 'base64').toString('utf-8')
}
