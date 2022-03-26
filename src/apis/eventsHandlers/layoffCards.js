module.exports = ({ wsEventEmitter, events, updateLayoffCards, dropCard, getPlayerRoomData }) => {
  return (payload) => {
    try {
      const { roomName, username, peerName, meldInfo } = payload

      updateLayoffCards(roomName, username, peerName, meldInfo)

      const { playerCards, declaredPlayers } = getPlayerRoomData(roomName, username)
      wsEventEmitter.emit(events.cardsDropped, playerCards)

      const updatedMelds = { peerName, melds: declaredPlayers[peerName]?.melds }
      wsEventEmitter.broadcastToRoom(roomName, events.cards_laidoff, updatedMelds)
    } catch (err) {
      wsEventEmitter.emit(events.roomsError, err.message)
      console.error(err)
    }
  }
}
