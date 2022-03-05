export default function createCardElement({ addDragableEvents }) {
  return function cardElement(card, isDraggable) {
    const cardElement = document.createElement('div')
    cardElement.className = `player-card ${isDraggable ? '' : 'drag-disable'} ${card.split('+')[0]}`
    cardElement.setAttribute('card-id', card)
    cardElement.draggable = isDraggable
    if (isDraggable) addDragableEvents(cardElement)

    return cardElement
  }
}
