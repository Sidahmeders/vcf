// ALPHA
export default function isValidSet(cards) {
  const validSetsMap = {}
  const visitedCards = new Set()
  let prevRank, prevSuit
  let startIndex = 0
  let cardIndex = -1

  while (cardIndex++ < cards.length - 1) {
    let card = cards[cardIndex]?.split('+')[0]
    let [suit, rank] = [card[0], card[1]]

    const canCompare = prevRank && prevSuit
    const isGoodSoFar = prevRank === rank && suit !== prevSuit && !visitedCards.has(card)
    const isInRange = cardIndex - startIndex >= 2

    if (canCompare && isGoodSoFar && isInRange) validSetsMap[startIndex] = cards.slice(startIndex, cardIndex + 1)
    else if (!isGoodSoFar) {
      startIndex = cardIndex
      visitedCards.clear()
    }

    prevSuit = suit
    prevRank = rank
    visitedCards.add(card)
  }

  return validSetsMap
}

/*
  C.5+2, S.5+2, D.5+2, S.5+1
*/
