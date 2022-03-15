module.exports = {
  roomsCollection: {
    testRoom: {
      isReady: false,
      isStarted: false,
      password: '1234',
      cardsDeck: [],
      droppedCards: [],
      declaredPlayers: {
        amine: { cards: [], isOnline: false, turnToPick: false },
      },
      players: {
        yousef: { cards: [], isOnline: false, turnToPick: false },
        amine: { cards: [], isOnline: false, turnToPick: false },
        yassine: { cards: [], isOnline: false, turnToPick: false },
      },
    },
  },

  getRoomData(roomName) {
    const targetRoom = Object(this.roomsCollection[roomName])
    return targetRoom
  },

  setRoomData(roomName, newRoomData) {
    let oldRoomData = Object(this.roomsCollection[roomName])
    this.roomsCollection[roomName] = Object.assign(oldRoomData, newRoomData)
  },
}
