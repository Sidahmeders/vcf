import { roomEvents } from '../../constant/events.js'

export default function hiddenDeck() {
  const cardsContainer = document.getElementById('deck-cards')
  const hiddenCardElement = document.createElement('div')
  hiddenCardElement.className = 'hidden-card'
  const payload = getRoomInfo()
  hiddenCardElement.onclick = () => socket.emit(roomEvents.cards_drag, payload)
  cardsContainer.appendChild(hiddenCardElement)
}
