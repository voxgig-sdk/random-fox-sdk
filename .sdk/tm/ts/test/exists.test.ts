
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { RandomFoxSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await RandomFoxSDK.test()
    equal(null !== testsdk, true)
  })

})
