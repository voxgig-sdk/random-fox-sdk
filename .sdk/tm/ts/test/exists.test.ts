
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RandomFoxSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = RandomFoxSDK.test()
    equal(testsdk instanceof RandomFoxSDK, true,
      'RandomFoxSDK.test() must return a client synchronously')
  })

})
