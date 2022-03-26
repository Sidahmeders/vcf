const createDeck = require('./create-deck')
const shuffleDeck = require('./shuffle-deck')
const authenticateMelds = require('./authenticate-melds.js')
const MeldsValidator = require('./meldValidator')

module.exports = { createDeck, shuffleDeck, authenticateMelds, MeldsValidator }
