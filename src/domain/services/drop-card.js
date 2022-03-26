module.exports = ({ InMemoryGames }) => {
  return (roomName, username, cardToDrop) => {
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const { players } = targetRoom
    const player = players[username]
    const playerCards = player?.cards
    const minCards = player?.minCards

    if (playerCards.length <= minCards) throw Error('make sure you have picked a card before you can drop')

    targetRoom.droppedCards.push(cardToDrop)
    players[username].cards = playerCards.filter((card) => card !== cardToDrop)
  }
}
