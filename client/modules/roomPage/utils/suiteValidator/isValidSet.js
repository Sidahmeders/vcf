// ALPHA
export default function isValidSet(cards) {
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
