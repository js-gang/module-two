/* eslint-env node, mocha */
import { assert } from 'chai'

function sum(a, b) { return a + b }

describe('Math operations', function() {    // class TestBlaBLA
    it('should sum two numbers', function() {  // test case
      assert.equal(sum(1, 2), 3)
    })

    it('should do nothing if one of arguments is zero', function () {
      assert.equal(sum(1,0), 1)
    })

})
