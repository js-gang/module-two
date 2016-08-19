
import loadProfile from 'handlers/search'
import './style.css'
document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search')
  searchButton.addEventListener('click', loadProfile)
})
