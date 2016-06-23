/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const getUserSubmitCallback = __webpack_require__(1)
	const PROXY_URL = 'http://188.166.73.133/gh-api'

	function replaceProxyUrl(url) {
	  return url.repalce('https://api.github.com', PROXY_URL)
	}

	document.addEventListener('DOMContentLoaded', () => {
	  const profile = document.getElementsByClassName('profile')[0]
	  const searchButton = document.getElementById('search')
	  searchButton.addEventListener('click', getUserSubmitCallback(profile, PROXY_URL))
	})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const renderSpinner = __webpack_require__(2)
	const loadUserRepos = __webpack_require__(3)
	const renderUserProfile = __webpack_require__(5)

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	function renderSpinner(parent) {
	  const domNode = document.createElement('div')
	  domNode.setAttribute('class', 'spinner')
	  parent.innerHTML = ''
	  parent.appendChild(domNode)
	}

	module.exports = renderSpinner

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const renderSpinner = __webpack_require__(2)
	const renderUserRepo = __webpack_require__(4)

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

/***/ },
/* 4 */
/***/ function(module, exports) {

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

	module.exports = renderUserRepo

/***/ },
/* 5 */
/***/ function(module, exports) {

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

	module.exports = renderUserProfile

/***/ }
/******/ ]);