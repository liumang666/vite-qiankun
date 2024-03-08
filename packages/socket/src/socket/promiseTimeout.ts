export class TimeoutError extends Error {
  name = 'TimeoutError'
  message = ''
  stack: string | undefined = ''
  constructor(message?: string) {
    super(message)
    this.message = message || 'Timeout Occurred'
    this.stack = new Error().stack
  }
}

export const promiseTimeout = <T>(promise: Promise<T>, timeoutSeconds = 10, message?: string): Promise<T> => {
  let timeout: NodeJS.Timeout
  return Promise.race([
    promise,
    new Promise<T>((resolve, reject) => {
      timeout = setTimeout(() => {
        const error = new TimeoutError(message)
        reject(error)
      }, timeoutSeconds * 1000)
    }),
  ]).then(
    (v) => {
      clearTimeout(timeout)
      return v
    },
    (err) => {
      clearTimeout(timeout)
      throw err
    }
  )
}
