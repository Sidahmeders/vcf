import addDragableEvents from './addDragableEvents.js'

export default function addDroppedCards(droppedCards) {
  const droppedCardsElement = document.getElementById('dropped-cards')
  const cardElement = document.createElement('div')

  for (let card of droppedCards) {
    cardElement.className = `player-card ${card.split('+')[0]}`
    cardElement.setAttribute('card-id', card)
    cardElement.setAttribute('draggable', true)

    addDragableEvents(cardElement)
    droppedCardsElement.appendChild(cardElement)
  }
}
