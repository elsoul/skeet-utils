export const encodeBase64 = async (payload: string) => {
  return Buffer.from(payload).toString('base64')
}
