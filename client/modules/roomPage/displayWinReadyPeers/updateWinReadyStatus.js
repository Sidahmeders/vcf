export default function updateWinReadyStatus(winReadyPlayers) {
  const peerStatusNodes = document.getElementsByClassName('peername-win-status')
  setTimeout(() => {
    for (let peerNode of peerStatusNodes) {
      const peerName = peerNode.parentElement.textContent
      const isWinReady = Boolean(winReadyPlayers[peerName])
      if (isWinReady) peerNode.classList.add('win-ready')
    }
  }, 1000)
}
