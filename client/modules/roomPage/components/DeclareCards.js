export default function createDeclareCards({ roomEvents, socket, getRoomInfo, state }) {
  return function declareCards() {
    const declareButton = document.createElement('div')
    declareButton.id = 'declare-cards'
    declareButton.innerText = 'declare'
    declareButton.onclick = clickHandler
    declareButton.style = `
      position: absolute;
      left: 46%;
      bottom: 1%;
      min-width: 20vh;
      background-color: orange;
      color: white;
      padding: 10px;
      font-size: 28px;
      text-transform: uppercase;
    `

    document.body.appendChild(declareButton)
  }

  function clickHandler() {
    const { validMelds, totalPoints } = state.playerMeldsStatus

    if (totalPoints < 30) {
      console.warn('please make sure your score is above 30')
      return
    }

    const { roomName, username } = getRoomInfo()
    const payload = { roomName, username, meldsMap: validMelds }

    socket.emit(roomEvents.cards_declare, payload)
  }
}
