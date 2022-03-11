import splitCards from './splitCards.js'
import { Card, LayedOffMelds } from '../components/index.js'

export default function addWinReadyPeersCards(winReadyPlayers) {
  const winReadyPeersContainer = document.getElementById('win-ready-peers')

  for (let playerName in winReadyPlayers) {
    const playerCards = winReadyPlayers[playerName]?.cards
    const playerSuites = splitCards(playerCards)
    const peerSuiteElement = CreatePeerSuiteContainerEl(playerName)

    for (let handSuite of playerSuites) {
      const validHandSuiteElement = LayedOffMelds()

      handSuite.forEach((card) => {
        const cardElement = Card(card, false)
        validHandSuiteElement.append(cardElement)
      })

      peerSuiteElement.appendChild(validHandSuiteElement)
    }

    winReadyPeersContainer.appendChild(peerSuiteElement)
  }
}

function CreatePeerSuiteContainerEl(playerName) {
  const peerSuiteContainerElement = document.createElement('div')
  peerSuiteContainerElement.id = playerName
  peerSuiteContainerElement.className = 'peer-suite-container hidden'
  return peerSuiteContainerElement
}
