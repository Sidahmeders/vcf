// ALPHA
export default function isValidSet(cards) {
  const validSetsMap = getValidSetMap(cards)
  const totalPointsMap = getTotalPoints(validSetsMap)

  return { validSetsMap, totalPointsMap }
}

function getValidSetMap(cards) {
  const validSetsMap = {}
  let prevRank, prevSuit
  let startIndex = 0,
    cardIndex = -1

  while (cardIndex++ < cards.length - 1) {
    let card = cards[cardIndex]
    let [suit, rank] = [card[0], card[1]]

    if (prevRank && prevSuit) {
      if (prevRank === rank && suit !== prevSuit) {
        if (cardIndex - startIndex >= 2) validSetsMap[startIndex] = cards.slice(startIndex, cardIndex + 1)
      } else startIndex = cardIndex
    }

    prevSuit = suit
    prevRank = rank
  }

  return validSetsMap
}

function getTotalPoints(validSets) {
  const validSetPoints = {}

  for (let key in validSets) {
    const suite = validSets[key]
    const suitePoints = getSuiteTotalPoints(suite)
    validSetPoints[key] = suitePoints
  }

  return validSetPoints
}

function getSuiteTotalPoints(suite) {
  const charRanks = { T: 10, J: 10, Q: 10, K: 10 }
  let pointsCounter = 0

  for (let i = 0; i < suite.length; i++) {
    const cardRank = suite[i][1]
    const cardPoint = parseInt(cardRank)

    if (cardPoint) pointsCounter += cardPoint
    else if (charRanks[cardRank]) pointsCounter += charRanks[cardRank]
    else if (cardRank === 'A' && pointsCounter) pointsCounter += 11
    else pointsCounter += 1
  }

  return pointsCounter
}
