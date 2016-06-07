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