
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BestprintondemandDataSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BestprintondemandDataSDK.test()
    equal(testsdk instanceof BestprintondemandDataSDK, true,
      'BestprintondemandDataSDK.test() must return a client synchronously')
  })

})
