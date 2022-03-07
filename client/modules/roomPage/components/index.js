import addDragableEvents from '../utils/addDragableEvents.js'
import { roomEvents } from '../../constant/events.js'

import createCardElement from './Card.js'
import createDropBox from './DropBox.js'
import createPeerStatus from './PeerStatus.js'
import createDeckHidden from './DeckHidden.js'
import createValidHandSuite from './ValidHandSuite.js'
import createPlayerStatus from './PlayerStatus.js'
import createDeclareCards from './DeclareCards.js'

const Card = createCardElement({ addDragableEvents })
const DropBox = createDropBox({ socket, getRoomInfo, roomState, roomEvents })
const PeerStatus = createPeerStatus()
const DeckHidden = createDeckHidden({ roomEvents, socket, getRoomInfo })
const ValidHandSuite = createValidHandSuite({ roomEvents, socket, getRoomInfo, roomState })
const PlayerStatus = createPlayerStatus()
const DeclareCards = createDeclareCards()

export { Card, DropBox, DeckHidden, PeerStatus, ValidHandSuite, PlayerStatus, DeclareCards }
