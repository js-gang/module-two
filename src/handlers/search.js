import loadUserProfile from 'loaders/user'
import loadUserRepos from 'loaders/repos'
import showSpinner from 'renderers/spinner'
import renderUserProfile from 'renderers/user_profile'
import renderUserRepo from 'renderers/repository'

export default function loadProfile() {
  const nodeForResult = document.getElementsByClassName('js-profile')[0]
  const username = document.getElementById('username').value
  showSpinner(nodeForResult)
  loadUserProfile(username)
    .then(profileData => {
      nodeForResult.innerHTML = renderUserProfile(profileData)
    })
    .then(() => loadUserRepos(username))
    .then((repos) => {
      const reposHolder = document.getElementsByClassName('js-profile_repos')[0]
      const html = repos.map(renderUserRepo).join('')
      reposHolder.innerHTML = html
    })


}
