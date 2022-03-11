export default function createDeclareCards({ roomEvents, socket, state }) {
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

  function clickHandler(event) {
    const { validSuites, totalPoints } = state.playerSuiteStatus
    console.log(event.target.innerText + ': ' + totalPoints, validSuites)

    socket.emit(roomEvents.UNSET_EVENT, {})
  }
}
