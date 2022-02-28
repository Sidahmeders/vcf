const { updateDroppedCard, getPlayerRoomData } = require('../../domain/services')

module.exports = ({ wsEventEmitter, events }) => {
  return (payload) => {
    try {
      const { roomName, username, cardId } = payload
      updateDroppedCard(roomName, username, cardId)

      const { droppedCards, playerCards } = getPlayerRoomData(roomName, username)

      wsEventEmitter.emit(events.cardsSwapped, { playerCards, droppedCards })
      wsEventEmitter.broadcastToRoom(roomName, events.peersDroppedCard, droppedCards)
    } catch (err) {
      wsEventEmitter.emit(events.roomsError, err.message)
      console.error(err)
    }
  }
}
