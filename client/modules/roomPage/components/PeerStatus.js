export default function createPeerStatusElement() {
  return function peerStatusElement(peerName) {
    const peerElement = document.createElement('div')
    peerElement.id = peerName
    peerElement.innerText = peerName
    peerElement.className = 'peername'

    const onlineStatusEl = createElement('peername-online-status')
    const turnStatusEl = createElement('peername-turn-status')
    const winReadyStatusEl = createElement('peername-win-status')

    peerElement.appendChild(onlineStatusEl)
    peerElement.appendChild(turnStatusEl)
    peerElement.appendChild(winReadyStatusEl)

    return peerElement
  }
}

function createElement(className) {
  const onlineStatusElement = document.createElement('div')
  onlineStatusElement.className = className
  return onlineStatusElement
}
