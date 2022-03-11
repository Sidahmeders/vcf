module.exports = ({ InMemoryGames, validateScore }) => {
  return (roomName, username, playerMelds) => {
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const playerCards = targetRoom[username]
    const validPlayerCards = extractMeldCards(playerMelds)

    console.log(playerCards, validPlayerCards, '__+++__') //FIXME: REMOVE THIS LINE

    const isValidScore = validateScore({ ...sets, ...sequences })
    const isValidMelds = authenticateMelds(serverSideCards, { sets, sequences })
    if (!isValidScore || !isValidMelds) throw Error('please verify that your melds are valid and above 91 total points')

    return validPlayerCards
  }
}

function authenticateMelds(playerCards, validPlayerCards) {
  const filteredCards = validPlayerCards.filter((card) => playerCards.includes(card))
  const isValidMelds = filteredCards.length === validPlayerCards.length
  return Boolean(isValidMelds)
}

function extractMeldCards({ sets, sequences }) {
  const melds = { ...sets, ...sequences }
  const validPlayerCards = []
  for (let key in melds) validPlayerCards.push(...melds[key])
  return validPlayerCards
}
