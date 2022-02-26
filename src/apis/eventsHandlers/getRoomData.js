const { updateInMemoryRoom, addOnlinePlayer, getPlayersStatus, getPlayerRoomData } = require('../../domain/services')

module.exports = ({ wsEventEmitter, events }) => {
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

      const userData = getPlayerRoomData(roomName, username)
      wsEventEmitter.emit(events.roomsJoined, userData)
    } catch (err) {
      wsEventEmitter.emit(events.roomsError, err.message)
      console.error(err)
    }
  }
}
