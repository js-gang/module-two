import { PROXY_URL } from 'constants'


export default function loadUserRepos(username) {
  return fetch(`${PROXY_URL}/users/${username}/repos`)
    .then(
      resp => resp.json(),
      error => alert('Can\'t load user\'s repos')
    )
}
