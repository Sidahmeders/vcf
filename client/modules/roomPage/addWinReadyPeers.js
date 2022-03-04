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
  }, 1000)

  handleWinReadyPlayersCards(winReadyPlayers)
}

function handleWinReadyPlayersCards(winReadyPlayers) {
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
  peerSuiteElement.className = 'peer-suite-container' + ' ' + 'hidden'

  for (let handSuite of playerSuites) {
    const handSuiteElement = document.createElement('div')
    handSuiteElement.className = 'hand-suite'
    handSuiteElement.style = `
      display: flex;
      border: 2px solid red;
      border-radius: 5px;
    `

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

function handlePeersToggle() {
  setTimeout(() => {
    const peersContainer = document.getElementById('peers-container').childNodes
    for (let peerNode of peersContainer) {
      peerNode.onclick = toggleWinReadyPeer
    }
  }, 1000)
}

function toggleWinReadyPeer() {
  const peersContainer = document.getElementById('peers-container').childNodes
  const peerName = this.id
  const winReadyPeers = document.getElementById('win-ready-peers').childNodes
  winReadyPeers.forEach((node) => {
    if (node.id === peerName) node.classList.remove('hidden')
    else node.classList.add('hidden')
  })

  peersContainer.forEach((node) => node.classList.remove('focused'))
  this.classList.add('focused')
  this.classList.remove('hidden')
}

handlePeersToggle()

addWinReadyPeers()
