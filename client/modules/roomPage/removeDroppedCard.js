export default function makeRemoveDroppedCard({ getPlayerCards, updateMeldStatus }) {
  return function removeDroppedCard(playerCards) {
    const oldPlayerCards = getPlayerCards()
    const targetCard = String(oldPlayerCards.filter((x) => !playerCards.includes(x)))
    if (!targetCard) return
    document.querySelectorAll(`[card-id="${targetCard}"]`)[0].remove()
    updateMeldStatus()
  }
}
