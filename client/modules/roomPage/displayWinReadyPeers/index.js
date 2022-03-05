import updateWinReadyStatus from './updateWinReadyStatus.js'
import addWinReadyPeersCards from './addWinReadyPeersCards.js'
import toggleWinReadyPeers from './toggleWinReadyPeers.js'

const hardCodedPlayers = {
  sodium: {
    cards: ['DT+1', 'DJ+1', 'DQ+1', 'DK+1', 'C3+1', 'C4+1', 'C5+1', 'H2+1', 'C2+1', 'C2+1', 'S7+1', 'S8+1', 'S9+1'],
  },
  kaiba: {
    cards: ['HT+2', 'C3+1', 'D9+2', 'D8+1', 'D7+1', 'CT+2', 'DT+2'],
  },
}

function winReadyPeers(winReadyPlayers = hardCodedPlayers) {
  updateWinReadyStatus(winReadyPlayers)
  addWinReadyPeersCards(winReadyPlayers)
  toggleWinReadyPeers()
}

winReadyPeers()
