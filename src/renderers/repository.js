export default function renderUserRepo({name, language, stargazers_count, forks}) {
  const tmpl = `
  <div class="repo_item">
    <p class="repo_item-name">${name}</p>
    <p>language: ${language}</p>
    <span>Stars: ${stargazers_count}, forks: ${forks}</span>
  </div>
  `
  return tmpl
}
