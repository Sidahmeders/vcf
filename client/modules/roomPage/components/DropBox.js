export default function createDropBoxElement({ socket, getRoomInfo, state, roomEvents }) {
  return function dropBoxElement() {
    const dropBoxElement = document.getElementById('drop-box')

    dropBoxElement.addEventListener('dragover', dragOver)
    dropBoxElement.addEventListener('dragleave', dragLeave)
    dropBoxElement.addEventListener('drop', dragDrop)
  }

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
    const { cardId } = state.roomState
    const payload = { roomName, username, cardId }
    socket.emit(roomEvents.cards_drop, payload)
  }
}
