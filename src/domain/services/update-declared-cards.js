module.exports = ({ InMemoryGames, validateScore, authenticateMelds }) => {
  return (roomName, username, playerMelds) => {
    const { sets, sequences } = playerMelds
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const players = targetRoom?.players

    const playerCards = players[username]?.cards
    const validPlayerCards = extractMeldCards({ ...sets, ...sequences })
    const isValidScore = validateScore({ ...sets, ...sequences })
    const isValidMelds = authenticateMelds(playerCards, validPlayerCards)

    if (!isValidScore || !isValidMelds) throw Error('please verify that your melds are valid and above 91 total points')
    const newPlayerCards = playerCards.filter((card) => !validPlayerCards.includes(card)) //FIXME: REPEATED...

    players[username].cards = newPlayerCards
    targetRoom.declaredPlayers[username] = { melds: playerMelds }
  }

  function extractMeldCards(melds) {
    const validPlayerCards = []
    for (let key in melds) validPlayerCards.push(...melds[key])
    return validPlayerCards
  }
}
