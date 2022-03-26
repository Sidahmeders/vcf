import '../peers-call/index.js'
import { DropBox, DeckHidden, PlayerStatus, DeclareCardsBtn } from './components/index.js'
import { roomListeners } from '../constant/listeners.js'
import { errorNotification } from '../notifications/index.js'
import {
  fetchRoomData,
  displayRoomData,
  addDraggedCard,
  removeDroppedCard,
  updateSwappedCards,
  addDroppedCards,
  updateOnlineStatus,
  updateTurnToPickStatus,
  updatePlayerCards,
  displayDeclaredCards,
} from './eventHandlers.js'

//////////////////
import { Card, LayedOffMelds } from './components/index.js'
/////////////////

document.addEventListener('DOMContentLoaded', fetchRoomData)

DeclareCardsBtn()
DropBox()
DeckHidden()

document.addEventListener('state-change', (event) => {
  const { payload } = event.detail
  if (payload.type === 'player-points') {
    PlayerStatus(payload.data)
    DeclareCardsBtn(payload.data)
  } else console.warn('state has been changed...')
})

socket.on(roomListeners.rooms_error, errorNotification)
socket.on(roomListeners.rooms_joined, displayRoomData)

socket.on(roomListeners.cards_dragged, addDraggedCard)
socket.on(roomListeners.cards_dropped, removeDroppedCard)
socket.on(roomListeners.peers_dropped_card, addDroppedCards)
socket.on(roomListeners.cards_swapped, updateSwappedCards)

socket.on(roomListeners.cards_updated, updatePlayerCards)
socket.on(roomListeners.cards_declared, displayDeclaredCards)
socket.on(roomListeners.cards_laidoff, updateLaidoffMeld)

socket.on(roomListeners.peers_disconnect, updateOnlineStatus)
socket.on(roomListeners.peers_connect, updateOnlineStatus)
socket.on(roomListeners.peers_trunToPick, updateTurnToPickStatus)

function updateLaidoffMeld(updatedMelds) {
  const { peerName, melds } = updatedMelds
  const winReadyPeersContainer = document.getElementById('declared-players')
  const peerMeldElement = winReadyPeersContainer.querySelector(`#${peerName}`) // FIXME:
  peerMeldElement.innerHTML = ''

  Object.entries(melds).forEach(([meldType, meld]) => {
    Object.entries(meld).forEach(([meldIndex, meldCards]) => {
      const validHandMeldElement = LayedOffMelds(meldType, meldIndex)
      meldCards.forEach((card) => {
        const cardElement = Card(card, false)
        validHandMeldElement.append(cardElement)
      })
      peerMeldElement.appendChild(validHandMeldElement)
    })
  })
}
