import state from '../../state/index.js'
import getPlayerCards from './getPlayerCards.js'
import MeldValidator from './meldValidator.js'
import getRoomInfo from './getRoomInfo.js'

import makeUpdateMeldsStatus from './updateMeldStatus.js'
import makeAddDragableEvents from './addDragableEvents.js'

const { roomState } = state

const updateMeldStatus = makeUpdateMeldsStatus({ getPlayerCards, MeldValidator, state })
const addDragableEvents = makeAddDragableEvents({ roomState, updateMeldStatus })

export { addDragableEvents, updateMeldStatus, getPlayerCards, MeldValidator, getRoomInfo }
