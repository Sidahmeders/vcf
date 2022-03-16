export default function createDeclareCardsBtn({ roomEvents, socket, getRoomInfo, state }) {
  return function declareCardsBtn(score_points) {
    const declareButton = document.createElement('button')
    declareButton.id = 'declare-cards'
    declareButton.innerText = 'declare'
    declareButton.onclick = clickHandler
    declareButton.disabled = Boolean(score_points <= 10)

    document.body.appendChild(declareButton)
  }

  function clickHandler() {
    const { validMelds } = state.playerMeldsStatus
    const { roomName, username } = getRoomInfo()
    const payload = { roomName, username, meldsMap: validMelds }
    socket.emit(roomEvents.cards_declare, payload)
  }
}
