
import loadProfile from 'handlers/search'

document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search')
  searchButton.addEventListener('click', loadProfile)
})
