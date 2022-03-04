import getPlayerCards from './utils/getPlayerCards.js'
import updateSuiteStatus from './utils/updateSuiteStatus.js'

export default function removeDroppedCard(playerCards) {
  const oldPlayerCards = getPlayerCards()
  const targetCard = String(oldPlayerCards.filter((x) => !playerCards.includes(x)))
  if (!targetCard) return
  document.querySelectorAll(`[card-id="${targetCard}"]`)[0].remove()
  updateSuiteStatus()
}
