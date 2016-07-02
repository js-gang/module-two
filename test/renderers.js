import { assert } from 'chai'

import showSpinner from '../src/renderers/spinner'
import renderUserProfile from '../src/renderers/user_profile'

describe('Spinner renderer', function() {
  it('should replace content of passed node and put div with spinner', function() {
    showSpinner(document.body)
    assert.equal(document.body.innerHTML, '<div class="spinner"></div>')
  })
})


describe('User profile renderer', function() {
  const avatar_url = 'http://foo'
  const name = 'testUser'
  const email = 'foo@bar.baz'
  beforeEach(function() {
    document.body.innerHTML = renderUserProfile({avatar_url, name, email})
  })
  afterEach(function() {
    document.body.innerHTML = ''
  })
  it('should render image with passer src', function() {
    const userAvatar = document.getElementsByTagName('img')[0]
    assert.equal(userAvatar.getAttribute('src'), avatar_url)
  })
})
