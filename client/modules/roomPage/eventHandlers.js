import { roomEvents } from '../constant/events.js'
import { Card, PeerStatus } from './components/index.js'
import getPlayerCards from './utils/getPlayerCards.js'
import updateMeldStatus from './utils/updateMeldStatus.js'

import getRoomInfo from './utils/getRoomInfo.js'
import state from '../state/index.js'
const roomState = state.roomState

import makeFetchRoomData from './fetchRoomData.js'
import makeDisplayRoomData from './displayRoomData.js'
import makeAddDraggedCard from './addDraggedCard.js'
import makeRemoveDroppedCard from './removeDroppedCard.js'
import makeUpdateSwappedCards from './updateSwappedCards.js'
import makeAddDroppedCards from './addDroppedCards.js'
import makeUpdateOnlineStatus from './updateOnlineStatus.js'
import makeUpdateTurnToPickStatus from './updateTurnToPickStatus.js'
import makeDisplayWinReadyPeers from './displayWinReadyPeers/index.js'

const fetchRoomData = makeFetchRoomData({ socket, getRoomInfo, roomEvents })
const displayRoomData = makeDisplayRoomData({ Card, PeerStatus, localUserName, updateMeldStatus })
const addDraggedCard = makeAddDraggedCard({ Card, getPlayerCards, updateMeldStatus })
const removeDroppedCard = makeRemoveDroppedCard({ getPlayerCards, updateMeldStatus })
const updateSwappedCards = makeUpdateSwappedCards({ Card, getPlayerCards, updateMeldStatus })
const addDroppedCards = makeAddDroppedCards({ Card, roomEvents, socket, getRoomInfo, roomState })
const updateOnlineStatus = makeUpdateOnlineStatus()
const updateTurnToPickStatus = makeUpdateTurnToPickStatus()
const displayWinReadyPeers = makeDisplayWinReadyPeers()

export {
  fetchRoomData,
  displayRoomData,
  addDraggedCard,
  removeDroppedCard,
  updateSwappedCards,
  addDroppedCards,
  updateOnlineStatus,
  updateTurnToPickStatus,
  displayWinReadyPeers,
}
