export function getPlayerCards() {
  const cardsIdList = []
  const cardsNodes = document.getElementById('player').childNodes

  for (let node of cardsNodes) {
    const cardId = node.getAttribute('card-id')
    cardsIdList.push(cardId)
  }

  return cardsIdList
}
