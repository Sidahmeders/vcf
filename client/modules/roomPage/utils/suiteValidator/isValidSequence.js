// ALPHA
export default function isValidSequence(cards) {
  const validSequencesMap = {}
  let prevRank,
    prevSuit,
    startIndex = 0,
    cardIndex = -1

  while (cardIndex++ < cards.length - 1) {
    let card = cards[cardIndex]
    let [suit, rank] = [card[0], card[1]]

    if (prevSuit && prevRank) {
      if (suit === prevSuit && checkRank(prevRank, rank)) {
        if (cardIndex - startIndex >= 2) validSequencesMap[startIndex] = cards.slice(startIndex, cardIndex + 1)
      } else startIndex = cardIndex
    }

    prevSuit = suit
    prevRank = rank
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
  const isValidRank = isSequence || isEqaul

  return Boolean(isValidRank)
}
