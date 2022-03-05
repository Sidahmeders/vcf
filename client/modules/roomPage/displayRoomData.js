import { Card, PeerStatus } from './components/index.js'
import updateSuiteStatus from './utils/updateSuiteStatus.js'

export default function displayRoomData(userData) {
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
  updateSuiteStatus()
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