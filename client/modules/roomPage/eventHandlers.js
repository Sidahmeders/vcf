import state from '../state/index.js'
import { roomEvents } from '../constant/events.js'
import { Card, PeerStatus, LayedOffMelds } from './components/index.js'
import { getPlayerCards, updateMeldStatus, getRoomInfo } from './utils/index.js'

import makeFetchRoomData from './fetchRoomData.js'
import makeDisplayRoomData from './displayRoomData.js'
import makeAddDraggedCard from './addDraggedCard.js'
import makeRemoveDroppedCard from './removeDroppedCard.js'
import makeUpdateSwappedCards from './updateSwappedCards.js'
import makeAddDroppedCards from './addDroppedCards.js'
import makeUpdateOnlineStatus from './updateOnlineStatus.js'
import makeUpdateTurnToPickStatus from './updateTurnToPickStatus.js'
import makeUpdatePlayerCards from './updatePlayerCards.js'
import makeDisplayDeclaredCards from './displayDeclaredCards/index.js'
import makeUpdateLaidoffMeld from './updateLaidoffMeld.js'

const { roomState } = state

const fetchRoomData = makeFetchRoomData({ socket, getRoomInfo, roomEvents })
const displayRoomData = makeDisplayRoomData({ Card, PeerStatus, localUserName, updateMeldStatus })
const addDraggedCard = makeAddDraggedCard({ Card, getPlayerCards, updateMeldStatus })
const removeDroppedCard = makeRemoveDroppedCard({ getPlayerCards, updateMeldStatus })
const updateSwappedCards = makeUpdateSwappedCards({ Card, getPlayerCards, updateMeldStatus })
const addDroppedCards = makeAddDroppedCards({ Card, roomEvents, socket, getRoomInfo, roomState })
const updateOnlineStatus = makeUpdateOnlineStatus({ getRoomInfo })
const updateTurnToPickStatus = makeUpdateTurnToPickStatus()
const updatePlayerCards = makeUpdatePlayerCards({ getPlayerCards })
const displayDeclaredCards = makeDisplayDeclaredCards({ Card, LayedOffMelds })
const updateLaidoffMeld = makeUpdateLaidoffMeld({ LayedOffMelds, Card })

export {
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
  updateLaidoffMeld,
}
