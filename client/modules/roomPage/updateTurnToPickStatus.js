export default function makeUpdateTurnToPickStatus() {
  return function updateTurnToPickStatus(roomPlayers = {}) {
    const peerStatusNodes = document.getElementsByClassName('peername-turn-status')
    setTimeout(() => {
      for (let peerNode of peerStatusNodes) {
        const peerName = peerNode.parentElement.id
        const isTurnToPick = roomPlayers[peerName]?.turnToPick
        peerNode.style.background = isTurnToPick ? 'yellow' : '#ddd'
      }
    }, 1000)
  }
}
