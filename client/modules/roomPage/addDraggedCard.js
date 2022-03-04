import { CardElement } from './components/index.js'
import getPlayerCards from './utils/getPlayerCards.js'
import updateSuiteStatus from './utils/updateSuiteStatus.js'

export default function addDraggedCard(playerCards) {
  const oldPlayerCards = getPlayerCards()
  const targetCard = String(playerCards.filter((x) => !oldPlayerCards.includes(x)))
  if (!targetCard) return

  const playerElement = document.getElementById('local-player')
  const cardElement = CardElement(targetCard, true)
  playerElement.appendChild(cardElement)
  updateSuiteStatus()
}
