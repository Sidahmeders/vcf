module.exports = ({ wsEventEmitter, events, dropCard, getPlayerRoomData }) => {
  return (payload) => {
    try {
      const { username, roomName, cardId } = payload
      dropCard(roomName, username, cardId)

      const { droppedCards, playerCards } = getPlayerRoomData(roomName, username)
      wsEventEmitter.emit(events.cardsDropped, playerCards)
      wsEventEmitter.broadcastToRoom(roomName, events.peersDroppedCard, droppedCards)
    } catch (err) {
      wsEventEmitter.emit(events.roomsError, err.message)
      console.error(err)
    }
  }
}
