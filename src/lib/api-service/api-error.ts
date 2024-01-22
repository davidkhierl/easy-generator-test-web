export interface ApiErrorProperty {
  property: string
  value: string
  constraints: ErrorPropertyConstraint
}

export interface ErrorPropertyConstraint {
  [key: string]: string
}

export class ApiError extends Error {
  readonly error: string | undefined
  readonly statusCode: number
  readonly errors?: ApiErrorProperty[]
  readonly name = ApiError.name

  constructor({
    message,
    error,
    statusCode,
    errors,
  }: {
    message: string
    statusCode: number
    error?: string
    errors?: ApiErrorProperty[]
  }) {
    super(message)
    this.error = error
    this.statusCode = statusCode
    this.errors = errors
    Object.setPrototypeOf(this, ApiError.prototype)
  }

  getConstraints() {
    if (!this.errors) return
    return this.errors.map((error) => ({
      property: error.property,
      message: Object.values(error.constraints)[0],
    }))
  }
}
