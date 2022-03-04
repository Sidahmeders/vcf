export default function displayPeersNames(players) {
  const peersStatusContainer = document.getElementById('peers-status-container')
  peersStatusContainer.innerHTML = ''

  for (let peerName of players) {
    if (peerName !== localUserName) {
      const peerElement = document.createElement('div')
      peerElement.id = peerName
      peerElement.innerText = peerName
      peerElement.className = 'peername'

      const onlineStatusEl = peerStatusElement('peername-online-status')
      const turnStatusEl = peerStatusElement('peername-turn-status')
      const winReadyStatusEl = peerStatusElement('peername-win-status')

      peerElement.appendChild(onlineStatusEl)
      peerElement.appendChild(turnStatusEl)
      peerElement.appendChild(winReadyStatusEl)
      peersStatusContainer.appendChild(peerElement)
    }
  }
}

function peerStatusElement(className) {
  const onlineStatusElement = document.createElement('div')
  onlineStatusElement.className = className
  return onlineStatusElement
}
