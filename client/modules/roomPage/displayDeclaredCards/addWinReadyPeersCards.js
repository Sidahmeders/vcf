import { Card, LayedOffMelds } from '../components/index.js'

export default function addWinReadyPeersCards(winReadyPlayers) {
  const winReadyPeersContainer = document.getElementById('win-ready-peers')

  for (let playerName in winReadyPlayers) {
    const melds = winReadyPlayers[playerName]?.melds
    const playerMelds = Object.values({ ...melds.sequences, ...melds.sets })
    const peerMeldElement = CreatePeerMeldContainerEl(playerName)

    for (let meld of playerMelds) {
      const validHandMeldElement = LayedOffMelds()

      meld.forEach((card) => {
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
