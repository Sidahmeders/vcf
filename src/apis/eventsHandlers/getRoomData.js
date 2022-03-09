module.exports = ({ wsEventEmitter, events, updateInMemoryRoom, addOnlinePlayer, getPlayersStatus, getPlayerRoomData }) => {
  return async (payload) => {
    try {
      const { roomName, username } = payload
      if (!roomName || !username) throw Error('roomName or username is null or undefined')

      wsEventEmitter.joinSocketRooms(username, roomName)
      await updateInMemoryRoom(roomName)
      addOnlinePlayer(roomName, username)

      const playersStatus = getPlayersStatus(roomName)
      wsEventEmitter.broadcastToRoom(roomName, events.peersTrunToPick, playersStatus)
      wsEventEmitter.broadcastToRoom(roomName, events.peersConnect, playersStatus)

      const { playerCards, players, droppedCards } = getPlayerRoomData(roomName, username)
      wsEventEmitter.emit(events.roomsJoined, { playerCards, players })
      wsEventEmitter.broadcastToRoom(roomName, events.peersDroppedCard, droppedCards)
    } catch (err) {
      wsEventEmitter.emit(events.roomsError, err.message)
      console.error(err)
    }
  }
}
