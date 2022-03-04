export default function addWinReadyPeersCards(winReadyPlayers) {
  const winReadyPeersContainer = document.getElementById('win-ready-peers')

  for (let playerName in winReadyPlayers) {
    const playerCards = winReadyPlayers[playerName]?.cards
    const peerSuiteElement = groupPlayerCards(playerName, playerCards)

    winReadyPeersContainer.appendChild(peerSuiteElement)
  }
}

function groupPlayerCards(playerName, playerCards) {
  const playerSuites = splitCards(playerCards)
  const peerSuiteElement = document.createElement('div')
  peerSuiteElement.id = playerName
  peerSuiteElement.className = 'peer-suite-container hidden'

  for (let handSuite of playerSuites) {
    const handSuiteElement = document.createElement('div')
    handSuiteElement.className = 'hand-suite'

    handSuite.forEach((card) => {
      const cardElement = document.createElement('div')
      cardElement.className = `player-card drag-disable ${card.split('+')[0]}`
      handSuiteElement.append(cardElement)
    })

    peerSuiteElement.appendChild(handSuiteElement)
  }

  return peerSuiteElement
}

function splitCards(cards) {
  let subArrays = []
  let k = 0
  while (cards.length) {
    subArrays[k] = []
    let j = 0
    while (j < 4 && cards.length) {
      subArrays[k][j] = cards.pop()
      j++
    }
    k++
  }
  return subArrays
}
