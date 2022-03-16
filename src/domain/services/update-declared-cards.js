module.exports = ({ InMemoryGames, validateScore, authenticateMelds }) => {
  return (roomName, username, playerMelds) => {
    const { sets, sequences } = playerMelds
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const players = targetRoom?.players
    const player = players[username]

    const playerCards = player?.cards
    const isDeclared = player?.isDeclared
    const validPlayerCards = extractMeldCards({ ...sets, ...sequences })
    const isValidScore = validateScore({ ...sets, ...sequences })
    const isValidMelds = authenticateMelds(playerCards, validPlayerCards)

    if (isDeclared) throw Error("you can't declare twice")
    if (!isValidScore || !isValidMelds) throw Error('please verify that your melds are valid and above 90 total points')

    const newPlayerCards = playerCards.filter((card) => !validPlayerCards.includes(card)) //FIXME: REPEATED...
    const declaredCardsLength = validPlayerCards.length
    targetRoom.declaredPlayers[username] = { melds: playerMelds }
    player.cards = newPlayerCards
    player.maxCards = 15 - declaredCardsLength
    player.minCards = 14 - declaredCardsLength
    player.isDeclared = true
  }

  function extractMeldCards(melds) {
    const validPlayerCards = []
    for (let key in melds) validPlayerCards.push(...melds[key])
    return validPlayerCards
  }
}
