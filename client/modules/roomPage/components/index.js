import addDragableEvents from '../utils/addDragableEvents.js'
import { roomEvents } from '../../constant/events.js'

import createCardElement from './CardElement.js'
import createDropBoxElement from './DropBoxElement.js'
import createPeerStatusElement from './PeerStatusElement.js'
import createToggleWinReadyPeers from './ToggleWinReadyPeers.js'
import createDeckHidden from './DeckHidden.js'

const CardElement = createCardElement({ addDragableEvents })
const DropBoxElement = createDropBoxElement({ socket, getRoomInfo, roomState, roomEvents })
const PeerStatusElement = createPeerStatusElement()
const ToggleWinReadyPeers = createToggleWinReadyPeers()
const DeckHidden = createDeckHidden({ roomEvents, socket, getRoomInfo })

export { CardElement, DropBoxElement, DeckHidden, PeerStatusElement, ToggleWinReadyPeers }
