export default function makeDddDraggedCard({ Card, getPlayerCards, updateSuiteStatus }) {
  return function addDraggedCard(playerCards) {
    const oldPlayerCards = getPlayerCards()
    const targetCard = String(playerCards.filter((x) => !oldPlayerCards.includes(x)))
    if (!targetCard) return

    const playerElement = document.getElementById('local-player')
    const cardElement = Card(targetCard, true)
    playerElement.appendChild(cardElement)
    updateSuiteStatus()
  }
}
