export default function makeAddDroppedCards({ Card, roomEvents, socket, getRoomInfo, roomState }) {
  return function addDroppedCards(droppedCards = []) {
    const droppedCardsElement = document.getElementById('dropped-cards')
    droppedCardsElement.innerHTML = ''
    const card = droppedCards.pop()
    if (!card) return

    const cardElement = Card(card, false)
    cardElement.addEventListener('dragover', dragOver)
    cardElement.addEventListener('dragleave', dragLeave)
    cardElement.addEventListener('drop', dragDrop)
    droppedCardsElement.appendChild(cardElement)
  }

  function dragOver(event) {
    event.preventDefault()
    this.classList.add('hovered')
  }

  function dragLeave() {
    this.classList.remove('hovered')
  }

  function dragDrop() {
    this.classList.remove('hovered')
    const { roomName, username } = getRoomInfo()
    const { cardId } = roomState
    const payload = { roomName, username, cardId }
    socket.emit(roomEvents.cards_swap, payload)
  }
}
