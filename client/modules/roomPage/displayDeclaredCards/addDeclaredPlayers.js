export default function addDeclaredPlayers({ Card, LayedOffMelds, declaredPlayers }) {
  const winReadyPeersContainer = document.getElementById('declared-players')
  winReadyPeersContainer.innerHTML = ''

  Object.entries(declaredPlayers).forEach(([playerName, playerHand]) => {
    const peerMeldElement = CreatePeerMeldContainerEl(playerName)
    Object.entries(playerHand?.melds).forEach(([meldType, meld]) => {
      Object.entries(meld).forEach(([meldIndex, meldCards]) => {
        const validHandMeldElement = LayedOffMelds(meldType, meldIndex)
        meldCards.forEach((card) => {
          const cardElement = Card(card, false)
          validHandMeldElement.append(cardElement)
        })
        peerMeldElement.appendChild(validHandMeldElement)
      })
      winReadyPeersContainer.appendChild(peerMeldElement)
    })
  })
}

function CreatePeerMeldContainerEl(playerName) {
  const peerMeldContainerElement = document.createElement('div')
  peerMeldContainerElement.id = playerName + '+laidoff_meld'
  peerMeldContainerElement.className = 'peer-meld-container hidden'
  return peerMeldContainerElement
}
