export default function makeDisplayRoomData({ Card, PeerStatus, localUserName, updateMeldStatus }) {
  return function displayRoomData(userData) {
    const { playerCards, players } = userData
    displayPlayerCards(playerCards)
    displayPeersNames(players)
  }

  function displayPlayerCards(playerCards) {
    const playerElement = document.getElementById('local-player')

    for (let card of playerCards) {
      const cardElement = Card(card, true)
      playerElement.appendChild(cardElement)
    }
    updateMeldStatus()
  }

  function displayPeersNames(players) {
    const peersStatusContainer = document.getElementById('peers-status-container')
    peersStatusContainer.innerHTML = ''

    for (let peerName of players) {
      if (peerName !== localUserName) {
        const peerElement = PeerStatus(peerName)
        peersStatusContainer.appendChild(peerElement)
      }
    }
  }
}
