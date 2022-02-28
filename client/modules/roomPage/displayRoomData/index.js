import displayPlayerCards from './displayPlayerCards.js'
import hiddenDeck from './hiddenDeck.js'
import displayPeersNames from './displayPeersNames.js'

export default function displayRoomData(userData) {
  const { playerCards, players } = userData
  hiddenDeck()
  displayPlayerCards(playerCards)
  displayPeersNames(players)
}
