const renderSpinner = require('./renderSpinner.js')
const renderUserRepo = require('./renderUserRepo.js')

function loadUserRepos(node, username, PROXY_URL) {
  renderSpinner(node)
  fetch(`${PROXY_URL}/users/${username}/repos`)
    .then(resp => resp.json())
    .then(
      repos => {
        const html = repos.map(renderUserRepo).join('')
        node.innerHTML = html
      },
      error => alert(error)
    )
}

module.exports = loadUserRepos