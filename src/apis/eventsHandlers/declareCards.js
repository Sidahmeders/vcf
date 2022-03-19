module.exports = ({ wsEventEmitter, events, updateDeclaredCards, getPlayerRoomData }) => {
  return (payload) => {
    try {
      const { roomName, username, meldsMap } = payload

      updateDeclaredCards(roomName, username, meldsMap)

      const { declaredPlayers, playerCards } = getPlayerRoomData(roomName, username)
      wsEventEmitter.emit(events.cards_updated, playerCards)
      wsEventEmitter.broadcastToRoom(roomName, events.cards_declared, declaredPlayers)
    } catch (err) {
      wsEventEmitter.emit(events.roomsError, err.message)
      console.error(err)
    }
  }
}
