export default function addWinReadyPeers(
  winReadyPlayers = {
    sodium: {
      cards: ['DT+1', 'DJ+1', 'DQ+1', 'DK+1', 'C3+1', 'C4+1', 'C5+1', 'H2+1', 'C2+1', 'C2+1', 'S7+1', 'S8+1', 'S9+1'],
    },
    kaiba: {
      cards: ['HT+2', 'C3+1', 'D9+2', 'D8+1', 'D7+1', 'CT+2', 'DT+2'],
    },
  }
) {
  const peerStatusNodes = document.getElementsByClassName('peername-win-status')
  setTimeout(() => {
    for (let peerNode of peerStatusNodes) {
      const peerName = peerNode.parentElement.textContent
      const isWinReady = Boolean(winReadyPlayers[peerName])
      if (isWinReady) peerNode.classList.add('win-ready')
    }
    addPlayerCards(winReadyPlayers.sodium.cards)
  }, 1000)
}

function addPlayerCards(playerCards) {
  const winReadyPeersContainer = document.getElementById('win-ready-peers')

  for (let card of playerCards) {
    const cardElement = document.createElement('div')
    cardElement.className = `player-card drag-disable ${card.split('+')[0]}`
    cardElement.setAttribute('card-id', card)

    winReadyPeersContainer.appendChild(cardElement)
  }
}

addWinReadyPeers()
