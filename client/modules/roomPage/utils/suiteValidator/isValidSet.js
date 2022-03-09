// ALPHA
export default function isValidSet(cards) {
  const validSetsMap = {}
  let prevRank, prevSuit
  let startIndex = 0
  let cardIndex = -1
  const visitedCards = new Set()

  while (cardIndex++ < cards.length - 1) {
    let card = cards[cardIndex]?.split('+')[0]
    let [suit, rank] = [card[0], card[1]]

    if (prevRank && prevSuit) {
      if (prevRank === rank && suit !== prevSuit && !visitedCards.has(card)) {
        if (cardIndex - startIndex >= 2) validSetsMap[startIndex] = cards.slice(startIndex, cardIndex + 1)
      } else {
        startIndex = cardIndex
        visitedCards.clear()
      }
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
