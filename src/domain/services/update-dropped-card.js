module.exports = ({ InMemoryGames }) => {
  return (roomName, username, cardToSwap) => {
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const players = Object(targetRoom?.players)
    const droppedCards = targetRoom?.droppedCards
    const playerCards = players[username]?.cards
    if (!players[username].turnToPick) throw Error('please wait for your Turn To Pick or Swap')

    const pickedCard = droppedCards.pop()
    droppedCards.push(cardToSwap)
    playerCards.push(pickedCard)
    players[username].cards = playerCards.filter((card) => card !== cardToSwap)
  }
}
