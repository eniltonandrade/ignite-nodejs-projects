export class LateCheckInValidationError extends Error {
  constructor() {
    super('The Check-in can only be validated upon 20 minutes of its creation')
  }
}
