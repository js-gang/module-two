
const PROXY_URL = 'http://188.166.73.133/gh-api'


function removeAllChilren(node) {
  for (let key of Object.keys(node.childNodes)) {
    if (typeof node.childNodes[key] === 'object') node.removeChild(node.childNodes[key])
  }
}


function renderSpinner(parent) {
  const domNode = document.createElement('div')
  domNode.setAttribute('class', 'spinner')
  // removeAllChilren(parent)
  parent.innerHTML = ''
  parent.appendChild(domNode)
}

function renderUserProfile({avatar_url, name, public_repos}) {
  const tmpl = `
  <div class="profile_photo">
    <img src="${avatar_url}" alt="" width="150px" height="150px"/>
  </div>
  <div class="profile_data">
    <h1 class="profile_name">${name}</h1>
    <p class="profile_data-item">repos: ${public_repos}</p>

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
      .then(resp => {
        if (resp.ok) {
          resp.json().then(
            (data) => nodeForResult.innerHTML = renderUserProfile(data)
          )

        } else {
          alert('Unknow error')
        }
      })

  }
}

function submitUserSearch() {

}

document.addEventListener('DOMContentLoaded', () => {
  const profile = document.getElementsByClassName('profile')[0]
  const searchButton = document.getElementById('search')
  searchButton.addEventListener('click', getUserSubmitCallback(profile))
  console.log('ready')
})
