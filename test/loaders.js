import { assert } from 'chai'
import sinon from 'sinon'

import userLoader from '../src/loaders/user'


function jsonOk(body) {
  const mockResponse = new window.Response(JSON.stringify(body), {
    status: 200,
    headers: {
      'Content-type': 'application/json'
    }
  })

  return Promise.resolve(mockResponse)
}

describe('userLoader', function() {
  const testResp = {test: 'ok'}
  beforeEach(function() {
    sinon.stub(window, 'fetch')

    window.fetch.returns(jsonOk(testResp))
  })
  afterEach(function() {
    window.fetch.restore()
  })
  it('should call fetch when loader invoked', function() {
    userLoader('test')
      .then(resp => assert.deepEqual(resp, testResp))

    assert.equal(window.fetch.firstCall.args[0], 'http://188.166.73.133/gh-api/users/test')
  })

})
