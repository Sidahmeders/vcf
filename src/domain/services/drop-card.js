module.exports = ({ InMemoryGames }) => {
  return (roomName, username, cardToDrop) => {
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const { players } = targetRoom
    const playerCards = players[username]?.cards
    if (playerCards.length <= 14) throw Error('make sure you have picked a card before you can drop')

    targetRoom.droppedCards.push(cardToDrop)
    players[username].cards = playerCards.filter((card) => card !== cardToDrop)
  }
}
