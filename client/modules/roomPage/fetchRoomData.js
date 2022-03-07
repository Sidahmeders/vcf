export default function makefetchRoomNameData({ socket, getRoomInfo, roomEvents }) {
  return function fetchRoomNameData() {
    const { roomName, username } = getRoomInfo()
    socket.emit(roomEvents.rooms_data, { username, roomName })
  }
}
