import addDragableEvents from '../utils/addDragableEvents.js'
import { roomEvents } from '../../constant/events.js'
import getRoomInfo from '../utils/getRoomInfo.js'
import state from '../../state/index.js'

import createCardElement from './Card.js'
import createDropBox from './DropBox.js'
import createPeerStatus from './PeerStatus.js'
import createDeckHidden from './DeckHidden.js'
import createLayedOffMelds from './LayedOffMelds.js'
import createPlayerStatus from './PlayerStatus.js'
import createDeclareCards from './DeclareCards.js'

const Card = createCardElement({ addDragableEvents })
const DropBox = createDropBox({ socket, getRoomInfo, state, roomEvents })
const PeerStatus = createPeerStatus()
const DeckHidden = createDeckHidden({ roomEvents, socket, getRoomInfo })
const LayedOffMelds = createLayedOffMelds({ roomEvents, socket, getRoomInfo, state })
const PlayerStatus = createPlayerStatus()
const DeclareCards = createDeclareCards({ roomEvents, socket, getRoomInfo, state })

export { Card, DropBox, DeckHidden, PeerStatus, LayedOffMelds, PlayerStatus, DeclareCards }
