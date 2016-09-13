/* eslint-env node, mocha */
import { assert } from 'chai'
import sinon from 'sinon'


function sum(a, b) { return a + b }

function promise(onSuccess) {
  return Promise.resolve().then(onSuccess)
}

describe('Math operations', function() {    // class TestBlaBLA
    it('should sum two numbers', function() {  // test case
      assert.equal(sum(1, 2), 3)
    })

    it('should do nothing if one of arguments is zero', function () {
      assert.equal(sum(1,0), 1)
    })

})

describe('Test promise', function() {
  it('should call callback if resolve', function(done) {
    const cb = sinon.spy()
    promise(cb).then(() => {
      assert.isTrue(cb.calledOnce)
    }).then(done, done)
  })
})
