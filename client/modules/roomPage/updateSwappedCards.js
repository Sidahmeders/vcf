import { getPlayerCards } from './utils.js'
import addDragableEvents from './addDragableEvents.js'
import updateSuitesStatus from './updateSuiteStatus.js'

export default function updateSwappedCards({ playerCards, droppedCards }) {
  const oldPlayerCards = getPlayerCards()
  const cardToAdd = String(playerCards.filter((x) => !oldPlayerCards.includes(x)))
  const cardToRemove = droppedCards.pop()

  const cardElement = document.createElement('div')
  cardElement.className = `player-card ${cardToAdd.split('+')[0]}`
  cardElement.setAttribute('card-id', cardToAdd)
  cardElement.setAttribute('draggable', true)
  addDragableEvents(cardElement)

  document.getElementById('player').appendChild(cardElement)
  document.querySelectorAll(`[card-id="${cardToRemove}"]`)[0].remove()

  updateSuitesStatus()
}
