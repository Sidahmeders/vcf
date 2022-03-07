export default function createDeclareCards() {
  return function declareCards() {
    const declareButton = document.createElement('div')
    declareButton.id = 'declare-cards-box'
    declareButton.innerText = 'Declare'
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
