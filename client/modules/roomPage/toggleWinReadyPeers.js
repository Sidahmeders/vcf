function toggleWinReadyPeers() {
  setTimeout(() => {
    const peersStatusContainer = document.getElementById('peers-status-container').childNodes
    for (let peerNode of peersStatusContainer) peerNode.onclick = clickHanlder
  }, 1000)
}

function clickHanlder() {
  const peersStatusContainer = document.getElementById('peers-status-container').childNodes
  const winReadyPeers = document.getElementById('win-ready-peers').childNodes
  const peerName = this.id

  winReadyPeers.forEach((node) => {
    if (node.id === peerName) node.classList.remove('hidden')
    else node.classList.add('hidden')
  })

  peersStatusContainer.forEach((node) => node.classList.remove('focused'))
  this.classList.add('focused')
}

toggleWinReadyPeers()
