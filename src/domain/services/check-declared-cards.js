module.exports = ({ InMemoryGames, validateScore }) => {
  return (roomName, username, playerMelds) => {
    const { sets, sequences } = playerMelds
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const playerCards = targetRoom?.players[username]?.cards
    const validPlayerCards = extractMeldCards({ ...sets, ...sequences })

    const isValidScore = validateScore({ ...sets, ...sequences })
    const isValidMelds = authenticateMelds(playerCards, validPlayerCards)
    if (!isValidScore || !isValidMelds) throw Error('please verify that your melds are valid and above 91 total points')

    return validPlayerCards
  }
}

function authenticateMelds(playerCards, validPlayerCards) {
  const filteredCards = validPlayerCards.filter((card) => playerCards.includes(card))
  const isValidMelds = filteredCards.length === validPlayerCards.length
  return Boolean(isValidMelds)
}

function extractMeldCards(melds) {
  const validPlayerCards = []
  for (let key in melds) validPlayerCards.push(...melds[key])
  return validPlayerCards
}
