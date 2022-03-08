export default function makeFetchRoomData({ socket, getRoomInfo, roomEvents }) {
  return function fetchRoomData() {
    const { roomName, username } = getRoomInfo()
    socket.emit(roomEvents.rooms_data, { username, roomName })
  }
}
