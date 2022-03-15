import updateWinReadyStatus from './updateWinReadyStatus.js'
import addWinReadyPeersCards from './addWinReadyPeersCards.js'
import toggleWinReadyPeers from './toggleWinReadyPeers.js'

export default function makeDisplayDeclaredCards() {
  return function displayDeclaredCards(declaredPlayers) {
    updateWinReadyStatus(declaredPlayers)
    addWinReadyPeersCards(declaredPlayers)
    toggleWinReadyPeers()
  }
}
