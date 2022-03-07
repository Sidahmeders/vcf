import '../peers-call/index.js'
import './displayWinReadyPeers/index.js' // FIXME: MAKE THIS AN EVENT HANDLER...
import { DropBox, DeckHidden } from './components/index.js'

import PlayerStatus from './components/PlayerStatus.js'
PlayerStatus()

DropBox()
DeckHidden()

import { roomEvents } from '../constant/events.js'
import { roomListeners } from '../constant/listeners.js'

import { errorNotification } from '../notifications/index.js'
import displayRoomData from './displayRoomData.js'
import addDraggedCard from './addDraggedCard.js'
import removeDroppedCard from './removeDroppedCard.js'
import updateSwappedCards from './updateSwappedCards.js'
import addDroppedCards from './addDroppedCards.js'
import updateOnlineStatus from './updateOnlineStatus.js'
import updateTurnToPickStatus from './updateTurnToPickStatus.js'

document.addEventListener('DOMContentLoaded', fetchRoomNameData)

function fetchRoomNameData() {
  const { roomName, username } = getRoomInfo()
  socket.emit(roomEvents.rooms_data, { username, roomName })
}

socket.on(roomListeners.rooms_error, errorNotification)
socket.on(roomListeners.rooms_joined, displayRoomData)

socket.on(roomListeners.cards_dragged, addDraggedCard)
socket.on(roomListeners.cards_dropped, removeDroppedCard)
socket.on(roomListeners.cards_swapped, updateSwappedCards)
socket.on(roomListeners.peers_dropped_card, addDroppedCards)

socket.on(roomListeners.peers_disconnect, updateOnlineStatus)
socket.on(roomListeners.peers_connect, updateOnlineStatus)
socket.on(roomListeners.peers_trunToPick, updateTurnToPickStatus)
