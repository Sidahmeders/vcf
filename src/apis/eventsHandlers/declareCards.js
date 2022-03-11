module.exports = ({ wsEventEmitter, events, checkDeclaredCards, getPlayerRoomData }) => {
  return (payload) => {
    try {
      const { roomName, username, meldsMap } = payload

      const validPlayerCards = checkDeclaredCards(roomName, username, meldsMap)
      const { playerCards } = getPlayerRoomData(roomName, username)

      playerCards = playerCards.filter((card) => !validPlayerCards.includes(card))
      console.log(playerCards, 'DECLARE CARDS HANLDER>>>>') // FIXME: REMOVE THIS LINE
    } catch (err) {
      wsEventEmitter.emit(events.roomsError, err.message)
      console.error(err)
    }
  }
}
