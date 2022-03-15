export default function makeUpdatePlayerCards({ getPlayerCards }) {
  return function updatePlayerCards(newPlayerCards) {
    const playerCards = getPlayerCards()

    for (let card of playerCards) {
      if (!newPlayerCards.includes(card)) document.querySelectorAll(`[card-id="${card}"]`)[0].remove()
    }
  }
}
