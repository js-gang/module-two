/* eslint-env node, mocha */
import { assert } from 'chai'
import sinon from 'sinon'
import mockery from 'mockery'
import sinonStubPromise from 'sinon-stub-promise'

import loadUserProfile from 'loaders/user'
sinonStubPromise(sinon)

describe('search handler', function() {
  let showSpinnerStub = sinon.stub()
  let userLoaderStub = sinon.stub().returnsPromise()

  let loadProfile
  before(function(){
    document.body.innerHTML = `
    <input type="text" value="foo" id="username">
    <div class="js-profile"></div>
    `
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    })
    mockery.registerMock('loaders/user', userLoaderStub);
    mockery.registerMock('renderers/spinner', showSpinnerStub);

    loadProfile = require('handlers/search').default
  })

  after(function(){
    mockery.disable()
  });
  it('should get username from input', function() {
    loadProfile()
    assert.isTrue(userLoaderStub.calledWith('foo'))
  })

  it('should show spinner', function() {
    loadProfile()
    assert.isTrue(showSpinnerStub.called)

  })
})
