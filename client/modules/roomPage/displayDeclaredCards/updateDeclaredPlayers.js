export default function updateDeclaredPlayers(declaredPlayers) {
  const peerStatusNodes = document.getElementsByClassName('peername-win-status')
  setTimeout(() => {
    for (let peerNode of peerStatusNodes) {
      const peerName = peerNode.parentElement.textContent
      const isWinReady = Boolean(declaredPlayers[peerName])
      if (isWinReady) peerNode.classList.add('win-ready')
    }
  }, 1000)
}
