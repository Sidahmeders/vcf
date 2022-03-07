const { checkPlayersTurn, dragCard, getPlayersStatus, getPlayerRoomData } = require('../../domain/services')

module.exports = ({ wsEventEmitter, events }) => {
  return (payload) => {
    try {
      const { roomName, username } = payload
      /* TODO: 
        check if the user has droped a card before he can pick.
        check if server didn't carsh and cleared the inMemory games.
      */

      //FIXME: ADD THIS LINES BACK...
      // const isPlayerTurn = checkPlayersTurn(roomName, username)
      // if (!isPlayerTurn) throw Error('please wait for your Turn To Pick')

      dragCard(roomName, username)
      const playersStatus = getPlayersStatus(roomName)
      wsEventEmitter.broadcastToRoom(roomName, events.peersTrunToPick, playersStatus)

      const { playerCards } = getPlayerRoomData(roomName, username)
      wsEventEmitter.emit(events.cardsDragged, playerCards)
    } catch (err) {
      wsEventEmitter.emit(events.roomsError, err.message)
      console.error(err)
    }
  }
}
