const events = require('../../constant/events')
const makeConnect = require('./connection')
const makeDisConnect = require('./disconnect')
const makeJoinRoom = require('./joinRoom')
const makeGetRoomData = require('./getRoomData')
const makeDragCards = require('./dragCards')
const makeDropCards = require('./dropCards')
const makeSwapCards = require('./swapCards')
const makeWebrtcSignaling = require('./webrtcSignaling')

module.exports = (wsEventEmitter) => {
  const connection = makeConnect({ wsEventEmitter })
  const disconnect = makeDisConnect({ wsEventEmitter, events })

  const joinRoom = makeJoinRoom({ wsEventEmitter, events })
  const getRoomData = makeGetRoomData({ wsEventEmitter, events })
  const dragCards = makeDragCards({ wsEventEmitter, events })
  const dropCards = makeDropCards({ wsEventEmitter, events })
  const swapCards = makeSwapCards({ wsEventEmitter, events })

  const { peerJoin, peerMessage } = makeWebrtcSignaling({ wsEventEmitter, events })

  return { connection, disconnect, joinRoom, getRoomData, dragCards, dropCards, swapCards, peerJoin, peerMessage }
}
