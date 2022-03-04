import addDragableEvents from '../utils/addDragableEvents.js'
import { roomEvents } from '../../constant/events.js'

import createCardElement from './Card.js'
import createDropBox from './DropBox.js'
import createPeerStatus from './PeerStatus.js'
import createToggleWinReadyPeers from './ToggleWinReadyPeers.js'
import createDeckHidden from './DeckHidden.js'

const Card = createCardElement({ addDragableEvents })
const DropBox = createDropBox({ socket, getRoomInfo, roomState, roomEvents })
const PeerStatus = createPeerStatus()
const ToggleWinReadyPeers = createToggleWinReadyPeers()
const DeckHidden = createDeckHidden({ roomEvents, socket, getRoomInfo })

export { Card, DropBox, DeckHidden, PeerStatus, ToggleWinReadyPeers }
