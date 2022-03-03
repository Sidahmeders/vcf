export default function addWinReadyPeers(
  winReadyPlayers = {
    sodium: {
      cards: ['CK+1', 'C3+1', 'DJ+1', 'C2+2', 'D6+2', 'H7+1', 'ST+1', 'CQ+2', 'D8+2', 'H6+2', 'C4+2', 'D4+2', 'D8+1'],
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
