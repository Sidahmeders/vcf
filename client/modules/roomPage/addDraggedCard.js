import getPlayerCards from './utils/getPlayerCards.js'
import addDragableEvents from './utils/addDragableEvents.js'
import updateSuiteStatus from './utils/updateSuiteStatus.js'

export default function addDraggedCard(playerCards) {
  const oldPlayerCards = getPlayerCards()
  const targetCard = String(playerCards.filter((x) => !oldPlayerCards.includes(x)))
  if (!targetCard) return

  const playerElement = document.getElementById('local-player')
  const cardElement = document.createElement('div')

  cardElement.className = `player-card ${targetCard.split('+')[0]}`
  cardElement.setAttribute('card-id', targetCard)
  cardElement.setAttribute('draggable', true)

  addDragableEvents(cardElement)
  playerElement.appendChild(cardElement)

  updateSuiteStatus()
}
