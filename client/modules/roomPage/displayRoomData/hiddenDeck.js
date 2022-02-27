import { roomEvents } from '../../constant/events.js'

export default function hiddenDeck() {
  const cardsContainer = document.getElementById('cards')
  const hiddenCardElement = document.createElement('div')
  hiddenCardElement.className = 'card hidden'
  const payload = getRoomInfo()
  hiddenCardElement.onclick = () => socket.emit(roomEvents.cards_drag, payload)
  cardsContainer.appendChild(hiddenCardElement)
}
