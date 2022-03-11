module.exports = ({ wsEventEmitter, events, checkDeclaredCards }) => {
  return () => {
    try {
      const { username, roomName, suitesMap } = payload
      const { sequences, sets } = suitesMap

      checkDeclaredCards(roomName, username, sets, sequences)

      console.log(playerCards, 'DECLARE CARDS HANLDER>>>>')
    } catch (err) {
      wsEventEmitter.emit(events.roomsError, err.message)
      console.error(err)
    }
  }
}
