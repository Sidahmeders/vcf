export default function createDeclareCards({ state }) {
  return function declareCards() {
    const declareButton = document.createElement('div')
    declareButton.id = 'declare-cards'
    declareButton.innerText = 'declare'
    declareButton.onclick = (event) => clickHandler(event, state)
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
}

function clickHandler(event, state) {
  // TODO: handle sending the event to the backend
  const { validSuites, totalPoints } = state.playerSuiteStatus
  console.log(event.target.innerText + ': ' + totalPoints, validSuites)
}
