import { PeerStatusElement } from '../components/index.js'

export default function displayPeersNames(players) {
  const peersStatusContainer = document.getElementById('peers-status-container')
  peersStatusContainer.innerHTML = ''

  for (let peerName of players) {
    if (peerName !== localUserName) {
      const peerElement = PeerStatusElement(peerName)
      peersStatusContainer.appendChild(peerElement)
    }
  }
}
