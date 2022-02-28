import { roomEvents } from '../constant/events.js'

export default function addDroppedCards(droppedCards = []) {
  const droppedCardsElement = document.getElementById('dropped-cards')
  droppedCardsElement.innerHTML = ''
  const cardElement = document.createElement('div')
  const card = droppedCards.pop()
  if (!card) return

  cardElement.className = `player-card swap-card ${card.split('+')[0]}`
  cardElement.setAttribute('card-id', card)
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
