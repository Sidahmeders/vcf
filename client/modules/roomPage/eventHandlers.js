import { roomEvents } from '../constant/events.js'
import { Card, PeerStatus } from './components/index.js'
import getPlayerCards from './utils/getPlayerCards.js'
import updateSuiteStatus from './utils/updateSuiteStatus.js'

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
const displayRoomData = makeDisplayRoomData({ Card, PeerStatus, localUserName, updateSuiteStatus })
const addDraggedCard = makeAddDraggedCard({ Card, getPlayerCards, updateSuiteStatus })
const removeDroppedCard = makeRemoveDroppedCard({ getPlayerCards, updateSuiteStatus })
const updateSwappedCards = makeUpdateSwappedCards({ Card, getPlayerCards, updateSuiteStatus })
const addDroppedCards = makeAddDroppedCards({ Card, roomEvents })
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
