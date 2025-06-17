export class AuthError extends Error {
  originalMessage: string
  constructor (msg: string) {
    super(`Auth error - ${msg}`)
    this.originalMessage = msg
  }
}