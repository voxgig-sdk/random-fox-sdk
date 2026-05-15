
import { Context } from './Context'


class RandomFoxError extends Error {

  isRandomFoxError = true

  sdk = 'RandomFox'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  RandomFoxError
}

