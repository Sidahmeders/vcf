export default function toggleDeclaredPlayers() {
  setTimeout(() => {
    const peersStatusContainer = document.getElementById('peers-status-container').childNodes
    for (let peerNode of peersStatusContainer) peerNode.onclick = clickHanlder
  }, 1000)
}

function clickHanlder() {
  const peersStatusContainer = document.getElementById('peers-status-container').childNodes
  const declaredPlayers = document.getElementById('declared-players').childNodes
  const peerName = this.id + '+laidoff_meld'

  declaredPlayers.forEach((node) => {
    if (node.id === peerName) node.classList.remove('hidden')
    else node.classList.add('hidden')
  })

  peersStatusContainer.forEach((node) => node.classList.remove('focused'))
  this.classList.add('focused')
}
