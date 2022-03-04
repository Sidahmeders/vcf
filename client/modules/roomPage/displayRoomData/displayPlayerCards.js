import { CardElement } from '../components/index.js'

export default function displayPlayerCards(playerCards) {
  const playerElement = document.getElementById('local-player')

  for (let card of playerCards) {
    const cardElement = CardElement(card, true)
    playerElement.appendChild(cardElement)
  }
}
