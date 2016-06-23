function renderSpinner(parent) {
  const domNode = document.createElement('div')
  domNode.setAttribute('class', 'spinner')
  parent.innerHTML = ''
  parent.appendChild(domNode)
}

module.exports = renderSpinner