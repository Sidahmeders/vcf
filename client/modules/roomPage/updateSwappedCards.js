import { Card } from './components/index.js'
import getPlayerCards from './utils/getPlayerCards.js'
import updateSuiteStatus from './utils/updateSuiteStatus.js'

export default function updateSwappedCards({ playerCards, droppedCards }) {
  const oldPlayerCards = getPlayerCards()
  const cardToAdd = String(playerCards.filter((x) => !oldPlayerCards.includes(x)))
  const cardToRemove = droppedCards.pop()

  const cardElement = Card(cardToAdd, true)
  document.getElementById('local-player').appendChild(cardElement)
  document.querySelectorAll(`[card-id="${cardToRemove}"]`)[0].remove()

  updateSuiteStatus()
}
