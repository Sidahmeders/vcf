const events = require('../../constant/events')
const makeConnect = require('./connection')
const makeDisConnect = require('./disconnect')
const makeJoinRooms = require('./joinRooms')
const makeGetRoomData = require('./getRoomData')
const makeDragCards = require('./dragCards')
const makeDropCards = require('./dropCards')
const makeSwapCards = require('./swapCards')
const makeWebrtcSignaling = require('./webrtcSignaling')
const makeDeclareCards = require('./declareCards')
const makeLayoffCards = require('./layoffCards')

const {
  joinRoom,
  dragCard,
  dropCard,
  getPlayersStatus,
  getPlayerRoomData,
  checkPlayersTurn,
  updateInMemoryRoom,
  updateDroppedCard,
  addOnlinePlayer,
  removeOnlinePlayer,
  updateDeclaredCards,
  updateLayoffCards,
} = require('../../domain/services')

module.exports = (wsEventEmitter) => {
  const connection = makeConnect({ wsEventEmitter })
  const disconnect = makeDisConnect({ wsEventEmitter, events, removeOnlinePlayer, getPlayersStatus })

  const joinRooms = makeJoinRooms({ wsEventEmitter, events, joinRoom })
  const getRoomData = makeGetRoomData({ wsEventEmitter, events, updateInMemoryRoom, addOnlinePlayer, getPlayersStatus, getPlayerRoomData })
  const dragCards = makeDragCards({ wsEventEmitter, events, checkPlayersTurn, dragCard, getPlayersStatus, getPlayerRoomData })
  const dropCards = makeDropCards({ wsEventEmitter, events, dropCard, getPlayerRoomData })
  const swapCards = makeSwapCards({ wsEventEmitter, events, updateDroppedCard, getPlayerRoomData })
  const declareCards = makeDeclareCards({ wsEventEmitter, events, updateDeclaredCards, getPlayerRoomData })
  const layoffCards = makeLayoffCards({ wsEventEmitter, events, updateLayoffCards, getPlayerRoomData })

  const { peerJoin, peerMessage } = makeWebrtcSignaling({ wsEventEmitter, events })

  return { connection, disconnect, joinRooms, getRoomData, dragCards, dropCards, swapCards, declareCards, layoffCards, peerJoin, peerMessage }
}
