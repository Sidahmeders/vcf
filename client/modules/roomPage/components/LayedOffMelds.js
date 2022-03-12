export default function createLayedOffMelds({ roomEvents, socket, getRoomInfo, state }) {
  return function layedOffMelds() {
    const handMeldElement = document.createElement('div')
    handMeldElement.className = 'valid-hand-Meld'

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
      console.log('DRAG DROP')
      // TODO: HANDLE EVENT PUSH
      const { roomName, username } = getRoomInfo()
      const { cardId } = state.roomState
      const payload = { roomName, username, cardId }
      socket.emit('Some-Random-Event', payload)
      // ----------------------
    }

    return handMeldElement
  }
}
