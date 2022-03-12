module.exports = function validateScore(validMelds) {
  let totalPoints = 0
  for (let key in validMelds) totalPoints += getMeldPoints(validMelds[key])
  return Boolean(totalPoints >= 91)
}

function getMeldPoints(meld) {
  const charRanks = { T: 10, J: 10, Q: 10, K: 10 }
  let pointsCounter = 0
  let previousRank

  for (let card of meld) {
    const cardRank = card[1]
    const cardPoint = parseInt(cardRank)

    if (cardPoint) pointsCounter += cardPoint
    else if (charRanks[cardRank]) pointsCounter += charRanks[cardRank]
    else if (cardRank === 'A' && previousRank !== 'A') pointsCounter += 11
    else pointsCounter += 1
    previousRank = cardRank
  }

  return pointsCounter
}
