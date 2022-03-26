export default function createLayedOffMelds({ roomEvents, socket, getRoomInfo, state }) {
  return function layedOffMelds(meldType, meldIndex) {
    const handMeldElement = document.createElement('div')
    handMeldElement.className = 'valid-hand-meld'
    handMeldElement.setAttribute('meld-type', meldType)
    handMeldElement.setAttribute('meld-index', meldIndex)

    handMeldElement.addEventListener('dragover', dragOver)
    handMeldElement.addEventListener('dragleave', dragLeave)
    handMeldElement.addEventListener('drop', dragDrop)

    function dragOver(event) {
      event.preventDefault()
      this.classList.add('hovered')
    }

    function dragLeave() {
      this.classList.remove('hovered')
    }

    function dragDrop() {
      this.classList.remove('hovered')
      const { roomName, username } = getRoomInfo()
      const peerName = this.parentNode?.id?.split('+')[0]
      const meldType = this.getAttribute('meld-type')
      const meldIndex = this.getAttribute('meld-index')
      const { cardId } = state.roomState

      const meldInfo = { meldType, meldIndex, cardToAdd: cardId }
      const payload = { roomName, username, peerName, meldInfo }

      socket.emit(roomEvents.cards_layoff, payload)
    }

    return handMeldElement
  }
}

/**
 * event => listner => event =>
 * cards:layoff -> cards:laidOff => cards:layoff
 */
