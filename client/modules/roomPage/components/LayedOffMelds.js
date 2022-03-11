export default function createLayedOffMelds({ roomEvents, socket, getRoomInfo, state }) {
  return function layedOffMelds() {
    const handSuiteElement = document.createElement('div')
    handSuiteElement.className = 'valid-hand-suite'

    handSuiteElement.addEventListener('dragover', dragOver)
    handSuiteElement.addEventListener('dragleave', dragLeave)
    handSuiteElement.addEventListener('drop', dragDrop)

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

    return handSuiteElement
  }
}
