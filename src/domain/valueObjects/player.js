module.exports = class Player {
  constructor({ cards = [], isOnline = false, turnToPick = false, maxCards = 15, minCards = 14, isDeclared = false, score = 0 }) {
    this.cards = cards
    this.isOnline = isOnline
    this.turnToPick = turnToPick
    this.maxCards = maxCards
    this.minCards = minCards
    this.isDeclared = isDeclared
    this.score = score
  }
}
