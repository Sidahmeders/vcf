export default class MeldValidator {
  #validMeldMap = {
    sequences: {},
    sets: {},
  }
  #totalPoints = 0

  validatePlayerCards(playerCards) {
    this.#validate(playerCards, MeldValidator.SEQUENCES)
    this.#validate(playerCards, MeldValidator.SETS)

    return this.#validMeldMap
  }

  calculatePoints() {
    const setsPoints = getTotalPointsMap(this.#validMeldMap.sets)
    const sequencesPoints = getTotalPointsMap(this.#validMeldMap.sequences)
    let playerPoints = 0
    for (let key in setsPoints) playerPoints += parseInt(setsPoints[key])
    for (let key in sequencesPoints) playerPoints += parseInt(sequencesPoints[key])
    this.#totalPoints = playerPoints

    return this.#totalPoints
  }

  #validate(cards, MeldType) {
    const visitedCards = new Set()
    let prevRank, prevSuit
    let startIndex = 0
    let cardIndex = -1

    while (cardIndex++ < cards.length - 1) {
      let card = cards[cardIndex]?.split('+')[0]
      let [suit, rank] = [card[0], card[1]]

      const canCompare = prevRank && prevSuit
      const isInRange = cardIndex - startIndex >= 2
      const isValidSetSoFar = suit !== prevSuit && prevRank === rank && !visitedCards.has(card)
      const isValidRunSoFar = suit === prevSuit && this.#checkRank(prevRank, rank) && !visitedCards.has(card)

      if (canCompare && isInRange && MeldType === MeldValidator.SETS && isValidSetSoFar) {
        this.#validMeldMap.sets[startIndex] = cards.slice(startIndex, cardIndex + 1)
      } else if (canCompare && isInRange && MeldType === MeldValidator.SEQUENCES && isValidRunSoFar) {
        this.#validMeldMap.sequences[startIndex] = cards.slice(startIndex, cardIndex + 1)
      }

      if ((MeldType === MeldValidator.SETS && !isValidSetSoFar) || (MeldType === MeldValidator.SEQUENCES && !isValidRunSoFar)) {
        startIndex = cardIndex
        visitedCards.clear()
      }

      prevSuit = suit
      prevRank = rank
      visitedCards.add(card)
    }
  }

  #checkRank = (prevRank, currRank) => {
    const rankRef = currRank
    const TensRank = ['J', 'Q', 'K']

    if (TensRank.includes(prevRank)) prevRank = 10
    if (TensRank.includes(currRank)) currRank = 10
    if (prevRank === 'T') prevRank = 10
    if (currRank === 'T') currRank = 10
    if (prevRank === 'A') prevRank = 1
    if (currRank === 'A') currRank = 11

    const isSequence = parseInt(prevRank) + 1 === parseInt(currRank) && !TensRank.includes(rankRef)
    const isEqaul = prevRank === currRank && currRank === 10

    return Boolean(isSequence || isEqaul)
  }
}

function getTotalPointsMap(validMelds) {
  const validSetPoints = {}

  for (let key in validMelds) {
    const Meld = validMelds[key]
    validSetPoints[key] = getMeldPoints(Meld)
  }

  return validSetPoints
}

function getMeldPoints(Meld) {
  const charRanks = { T: 10, J: 10, Q: 10, K: 10 }
  let pointsCounter = 0
  let previousRank

  for (let i = 0; i < Meld.length; i++) {
    const cardRank = Meld[i][1]
    const cardPoint = parseInt(cardRank)

    if (cardPoint) pointsCounter += cardPoint
    else if (charRanks[cardRank]) pointsCounter += charRanks[cardRank]
    else if (cardRank === 'A' && previousRank !== undefined && previousRank !== 'A') pointsCounter += 11
    else pointsCounter += 1
    previousRank = cardRank
  }

  return pointsCounter
}

MeldValidator.SETS = Symbol('3 or more cards of the same rank')
MeldValidator.SEQUENCES = Symbol(' 3 or more consecutive cards of the same suit')
