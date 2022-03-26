export default function makeUpdateOnlineStatus({ getRoomInfo }) {
  return function updateOnlineStatus(roomPlayers = {}) {
    const { username } = getRoomInfo()
    setTimeout(() => {
      const peerStatusNodes = document.getElementsByClassName('peername-online-status')
      for (let peerNode of peerStatusNodes) {
        const peerName = peerNode.parentElement.id
        const isOnline = roomPlayers[peerName]?.isOnline
        peerNode.style.background = isOnline ? '#5f5' : 'gray'
      }

      const playerScore = document.getElementById('player-score')
      playerScore.innerText = 'Score: ' + roomPlayers[username]?.score
    }, 1000)
  }
}
