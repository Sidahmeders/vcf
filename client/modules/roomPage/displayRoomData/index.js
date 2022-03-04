import displayPlayerCards from './displayPlayerCards.js'
import displayPeersNames from './displayPeersNames.js'

export default function displayRoomData(userData) {
  const { playerCards, players } = userData
  displayPlayerCards(playerCards)
  displayPeersNames(players)
}
