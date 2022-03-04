export default function createDeckHidden({ roomEvents, socket, getRoomInfo }) {
  return function deckHidden() {
    const cardsContainer = document.getElementById('deck-cards')
    const hiddenCardElement = document.createElement('div')
    hiddenCardElement.className = 'hidden-card'
    const payload = getRoomInfo()
    hiddenCardElement.onclick = () => socket.emit(roomEvents.cards_drag, payload)
    cardsContainer.appendChild(hiddenCardElement)
  }
}
