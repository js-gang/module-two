
const PROXY_URL = 'http://188.166.73.133/gh-api'

function replaceProxyUrl(url) {
  return url.repalce('https://api.github.com', PROXY_URL)
}


function renderSpinner(parent) {
  const domNode = document.createElement('div')
  domNode.setAttribute('class', 'spinner')
  parent.innerHTML = ''
  parent.appendChild(domNode)
}

function loadUserRepos(node, username) {
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
function renderUserRepo({name, language, stargazers_count, forks}) {
  const tmpl = `
  <div class="repo_item">
    <p class="repo_item-name">${name}</p>
    <p>language: ${language}</p>
    <span>Stars: ${stargazers_count}, forks: ${forks}</span>
  </div>
  `
  return tmpl
}

function renderUserProfile({avatar_url, name, email}) {
  const tmpl = `
  <div class="profile_photo">
    <img src="${avatar_url}" alt="" width="150px" height="150px"/>
  </div>
  <div class="profile_data">
    <h1 class="profile_name">${name}</h1>
    <p class="profile_data-item">${email}</p>
    <div class="profile_repos"></div>
  </div>
  <div style="clear: both;">
  </div>
  `
  return tmpl
}

function getUserSubmitCallback(nodeForResult) {
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
          return loadUserRepos(reposHolder, username)
        }
      )
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const profile = document.getElementsByClassName('profile')[0]
  const searchButton = document.getElementById('search')
  searchButton.addEventListener('click', getUserSubmitCallback(profile))
})
