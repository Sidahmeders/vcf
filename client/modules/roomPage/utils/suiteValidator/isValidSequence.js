// ALPHA
export default function isValidSequence(cards) {
  const validSequencesMap = {}
  const visitedCards = new Set()
  let prevRank, prevSuit
  let startIndex = 0
  let cardIndex = -1

  while (cardIndex++ < cards.length - 1) {
    let card = cards[cardIndex]?.split('+')[0]
    let [suit, rank] = [card[0], card[1]]

    const canCompare = prevRank && prevSuit
    const isGoodSoFar = suit === prevSuit && !visitedCards.has(card) && checkRank(prevRank, rank)
    const isInRange = cardIndex - startIndex >= 2

    if (canCompare && isGoodSoFar && isInRange) validSequencesMap[startIndex] = cards.slice(startIndex, cardIndex + 1)
    else if (!isGoodSoFar) {
      startIndex = cardIndex
      visitedCards.clear()
    }

    prevSuit = suit
    prevRank = rank
    visitedCards.add(card)
  }

  return validSequencesMap
}

function checkRank(prevRank, currRank) {
  const rankRef = currRank
  const TensRank = ['J', 'Q', 'K']

  if (TensRank.includes(prevRank)) prevRank = 10
  if (TensRank.includes(currRank)) currRank = 10
  if (prevRank === 'T') prevRank = 10
  if (currRank === 'T') currRank = 10
  if (prevRank === 'A') prevRank = 1
  if (currRank === 'A') currRank = 11

  let isSequence = parseInt(prevRank) + 1 === parseInt(currRank) && !TensRank.includes(rankRef)
  let isEqaul = prevRank === currRank && currRank === 10

  return Boolean(isSequence || isEqaul)
}
