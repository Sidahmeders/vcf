const createDeck = require('./create-deck')
const shuffleDeck = require('./shuffle-deck')
const validateScore = require('./validate-score')
const authenticateMelds = require('./authenticate-melds.js')
const MeldsValidator = require('./meldValidator')

module.exports = { createDeck, shuffleDeck, validateScore, authenticateMelds, MeldsValidator }
