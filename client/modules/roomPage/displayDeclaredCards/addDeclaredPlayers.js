export default function addDeclaredPlayers({ Card, LayedOffMelds, declaredPlayers }) {
  const winReadyPeersContainer = document.getElementById('declared-players')
  winReadyPeersContainer.innerHTML = ''

  for (let playerName in declaredPlayers) {
    const melds = declaredPlayers[playerName]?.melds
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
  peerMeldContainerElement.className = 'peer-meld-container hidden'
  return peerMeldContainerElement
}
