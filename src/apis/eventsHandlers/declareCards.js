module.exports = ({ wsEventEmitter, events, updateDeclaredCards, getPlayerRoomData }) => {
  return (payload) => {
    try {
      const { roomName, username, meldsMap } = payload

      const { validPlayerCards, newPlayerCards } = updateDeclaredCards(roomName, username, meldsMap)
      wsEventEmitter.emit(events.cards_updated, newPlayerCards)
      wsEventEmitter.broadcastToRoom(roomName, events.cards_declared, validPlayerCards)
    } catch (err) {
      wsEventEmitter.emit(events.roomsError, err.message)
      console.error(err)
    }
  }
}
