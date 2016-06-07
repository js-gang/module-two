const renderSpinner = require('./renderSpinner.js')
const loadUserRepos = require('./loadUserRepos.js')
const renderUserProfile = require('./renderUserProfile.js')

function getUserSubmitCallback(nodeForResult, PROXY_URL) {
  return () => {
    let username = document.getElementById('username').value
    renderSpinner(nodeForResult)
    fetch(`${PROXY_URL}/users/${username}`)
      .then(resp => resp.json())
      .then(
        data => nodeForResult.innerHTML = renderUserProfile(data),
        error => alert('Unknow error')
      )
      .then(
        () => {
          const reposHolder = document.getElementsByClassName('profile_repos')[0]
          return loadUserRepos(reposHolder, username, PROXY_URL)
        }
      )
  }
}

module.exports = getUserSubmitCallback