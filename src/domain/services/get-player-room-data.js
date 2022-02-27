module.exports = ({ InMemoryGames, Player }) => {
  return (roomName, username) => {
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const players = Object.keys(targetRoom?.players)
    const player = new Player(targetRoom?.players[username])
    const droppedCards = targetRoom.droppedCards

    return Object.freeze({ playerCards: player.cards, players, droppedCards })
  }
}
