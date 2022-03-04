export default function getPlayerCards() {
  const cardsIdList = []
  const cardsNodes = document.getElementById('local-player').childNodes

  for (let node of cardsNodes) {
    const cardId = node.getAttribute('card-id')
    cardsIdList.push(cardId)
  }

  return cardsIdList
}
