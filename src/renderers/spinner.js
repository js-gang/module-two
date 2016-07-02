
export default function renderSpinner(node) {
  const domNode = document.createElement('div')
  domNode.setAttribute('class', 'spinner')
  node.innerHTML = ''
  node.appendChild(domNode)
}
