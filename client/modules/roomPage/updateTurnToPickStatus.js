export default function updateTurnToPickStatus(roomPlayers = {}) {
  const peerStatusNodes = document.getElementsByClassName('peername-turn-status')
  setTimeout(() => {
    for (let peerNode of peerStatusNodes) {
      const peerName = peerNode.parentElement.textContent
      const isTurnToPick = roomPlayers[peerName]?.turnToPick
      peerNode.style.background = isTurnToPick ? 'yellow' : '#ddd'
    }
  }, 1000)
}
