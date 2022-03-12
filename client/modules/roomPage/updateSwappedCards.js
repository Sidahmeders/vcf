export default function makeUpdateSwappedCards({ Card, getPlayerCards, updateMeldStatus }) {
  return function updateSwappedCards({ playerCards, droppedCards }) {
    const oldPlayerCards = getPlayerCards()
    const cardToAdd = String(playerCards.filter((x) => !oldPlayerCards.includes(x)))
    const cardToRemove = droppedCards.pop()

    const cardElement = Card(cardToAdd, true)
    document.getElementById('local-player').appendChild(cardElement)
    document.querySelectorAll(`[card-id="${cardToRemove}"]`)[0].remove()

    updateMeldStatus()
  }
}
