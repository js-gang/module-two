import { PROXY_URL } from '../constants'


export default function loadUserProfile(username) {
  return window.fetch(`${PROXY_URL}/users/${username}`)
    .then(
      resp => resp.json(),
      error => alert('Can\'t load user profile')
    )
}
