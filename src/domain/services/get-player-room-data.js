module.exports = ({ InMemoryGames, Player }) => {
  return (roomName, username) => {
    if (!roomName || !username) throw Error('please make sure to pass the roomName and username')
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const players = Object.keys(targetRoom?.players)
    const player = new Player(targetRoom?.players[username])
    const droppedCards = targetRoom.droppedCards
    const declaredPlayers = Object(targetRoom?.declaredPlayers)

    return Object.freeze({ playerCards: player.cards, players, droppedCards, declaredPlayers })
  }
}
