module.exports = ({ InMemoryGames, validateScore, validateMelds }) => {
  return (roomName, username, sets, sequences) => {
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const playerCards = targetRoom[username]

    const isValidScore = validateScore({ ...sets, ...sequences })
    const isValidMelds = validateMelds(serverSideCards, { sets, sequences })

    return Boolean(null)
  }
}
