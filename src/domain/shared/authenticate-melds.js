module.exports = function authenticateMelds(playerCards, validPlayerCards) {
  const filteredCards = validPlayerCards.filter((card) => playerCards.includes(card))
  const isValidMelds = filteredCards.length === validPlayerCards.length
  return Boolean(isValidMelds)
}
