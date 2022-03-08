export default function getRoomInfo() {
  const roomName = location.pathname.split('/')[2]
  const username = location.search.split('=')[1]
  return { roomName, username }
}
