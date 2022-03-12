import splitCards from './splitCards.js'
import { Card, LayedOffMelds } from '../components/index.js'

export default function addWinReadyPeersCards(winReadyPlayers) {
  const winReadyPeersContainer = document.getElementById('win-ready-peers')

  for (let playerName in winReadyPlayers) {
    const playerCards = winReadyPlayers[playerName]?.cards
    const playerMelds = splitCards(playerCards)
    const peerMeldElement = CreatePeerMeldContainerEl(playerName)

    for (let handMeld of playerMelds) {
      const validHandMeldElement = LayedOffMelds()

      handMeld.forEach((card) => {
        const cardElement = Card(card, false)
        validHandMeldElement.append(cardElement)
      })

      peerMeldElement.appendChild(validHandMeldElement)
    }

    winReadyPeersContainer.appendChild(peerMeldElement)
  }
}

function CreatePeerMeldContainerEl(playerName) {
  const peerMeldContainerElement = document.createElement('div')
  peerMeldContainerElement.id = playerName
  peerMeldContainerElement.className = 'peer-Meld-container hidden'
  return peerMeldContainerElement
}
