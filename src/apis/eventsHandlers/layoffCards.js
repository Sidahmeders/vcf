module.exports = ({ wsEventEmitter, events, updateLayoffCards }) => {
  return (payload) => {
    try {
      const { roomName, playerName, meldInfo } = payload

      updateLayoffCards(roomName, playerName, meldInfo)

      return undefined
    } catch (err) {
      wsEventEmitter.emit(events.roomsError, err.message)
      console.error(err)
    }
  }
}
