module.exports = ({ InMemoryGames }) => {
  return (roomName, username) => {
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const { cardsDeck, players } = targetRoom
    const player = players[username]
    const playerCards = player?.cards
    const maxCards = player?.maxCards

    console.log(maxCards)

    if (playerCards.length >= maxCards) throw Error('please drop a card before you can pick again')
    const pickedCard = cardsDeck.pop()
    if (!pickedCard) throw Error('the cards deck is empty')
    playerCards.push(pickedCard)
  }
}
