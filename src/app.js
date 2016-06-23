const getUserSubmitCallback = require('./modules/getUserSubmitCallback.js')
const PROXY_URL = 'http://188.166.73.133/gh-api'

function replaceProxyUrl(url) {
  return url.repalce('https://api.github.com', PROXY_URL)
}

document.addEventListener('DOMContentLoaded', () => {
  const profile = document.getElementsByClassName('profile')[0]
  const searchButton = document.getElementById('search')
  searchButton.addEventListener('click', getUserSubmitCallback(profile, PROXY_URL))
})
