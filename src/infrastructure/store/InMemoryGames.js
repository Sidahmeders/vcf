module.exports = {
  roomsCollection: {
    testRoom: {
      isReady: false,
      isStarted: false,
      password: '1234',
      cardsDeck: [],
      droppedCards: [],
      declaredPlayers: {
        amine: { cards: [] },
      },
      players: {
        yousef: { cards: [], isOnline: false, turnToPick: false, maxCards: 15, minCards: 14, isDeclared: false },
        amine: { cards: [], isOnline: false, turnToPick: false, maxCards: 15, minCards: 14, isDeclared: false },
        yassine: { cards: [], isOnline: false, turnToPick: false, maxCards: 15, minCards: 14, isDeclared: false },
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
