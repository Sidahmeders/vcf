import addDragableEvents from '../addDragableEvents.js'

export default function displayPlayerCards(playerCards) {
  const playerElement = document.getElementById('local-player')

  for (let card of playerCards) {
    const cardElement = document.createElement('div')
    cardElement.className = `player-card ${card.split('+')[0]}`
    cardElement.setAttribute('card-id', card)
    cardElement.setAttribute('draggable', true)
    addDragableEvents(cardElement)

    playerElement.appendChild(cardElement)
  }
}
