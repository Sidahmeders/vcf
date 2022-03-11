module.exports = function validateMelds(serverSideCards, playerMelds) {
  const clientSideCards = extractCardsFromMelds(playerMelds)
  const filteredCards = clientSideCards.filter((card) => serverSideCards.includes(card))

  console.log(filteredCards)

  return Boolean(undefined)
}

function extractCardsFromMelds({ sets, sequences }) {
  const melds = { ...sets, ...sequences }
  const playerCards = []
  for (let key in melds) playerCards.push(...melds[key])
  return playerCards
}
