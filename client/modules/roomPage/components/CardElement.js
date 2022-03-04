export default function createCardElement({ addDragableEvents }) {
  // TODO: NOT USED
  return function cardElement(_className, cardId, isDraggable) {
    const cardElement = document.createElement('div')
    cardElement.className = `${_className} ${cardId.split('+')[0]}`
    cardElement.setAttribute('card-id', cardId)
    cardElement.draggable = isDraggable
    if (isDraggable) addDragableEvents(cardElement)

    return cardElement
  }
}
