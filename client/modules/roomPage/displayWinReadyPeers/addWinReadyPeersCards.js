import splitCards from './splitCards.js'

export default function addWinReadyPeersCards(winReadyPlayers) {
  const winReadyPeersContainer = document.getElementById('win-ready-peers')

  for (let playerName in winReadyPlayers) {
    const playerCards = winReadyPlayers[playerName]?.cards
    const playerSuites = splitCards(playerCards)
    const peerSuiteElement = CreatePeerSuiteContainerEl('peer-suite-container hidden', playerName)

    for (let handSuite of playerSuites) {
      const handSuiteElement = CreateHandSuiteEl('hand-suite')

      handSuite.forEach((cardId) => {
        const cardElement = CreateCardEl('player-card drag-disable', cardId)
        handSuiteElement.append(cardElement)
      })

      peerSuiteElement.appendChild(handSuiteElement)
    }

    winReadyPeersContainer.appendChild(peerSuiteElement)
  }
}

function CreateCardEl(_className, cardId) {
  const cardElement = document.createElement('div')
  cardElement.className = `${_className} ${cardId.split('+')[0]}`
  return cardElement
}

function CreateHandSuiteEl(_className) {
  const handSuiteElement = document.createElement('div')
  handSuiteElement.className = _className
  return handSuiteElement
}

function CreatePeerSuiteContainerEl(_className, playerName) {
  const peerSuiteContainerElement = document.createElement('div')
  peerSuiteContainerElement.id = playerName
  peerSuiteContainerElement.className = _className
  return peerSuiteContainerElement
}
