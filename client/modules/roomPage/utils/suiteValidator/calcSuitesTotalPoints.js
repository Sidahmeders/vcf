export default function calcSuitesTotalPoints(validSuites) {
  const validSetPoints = {}

  for (let key in validSuites) {
    const suite = validSuites[key]
    validSetPoints[key] = getSuitePoints(suite)
  }

  return validSetPoints
}

function getSuitePoints(suite) {
  const charRanks = { T: 10, J: 10, Q: 10, K: 10 }
  let pointsCounter = 0
  let previousRank

  for (let i = 0; i < suite.length; i++) {
    const cardRank = suite[i][1]
    const cardPoint = parseInt(cardRank)

    if (cardPoint) pointsCounter += cardPoint
    else if (charRanks[cardRank]) pointsCounter += charRanks[cardRank]
    else if (cardRank === 'A' && previousRank !== 'A') pointsCounter += 11
    else pointsCounter += 1
    previousRank = cardRank
  }

  return pointsCounter
}
