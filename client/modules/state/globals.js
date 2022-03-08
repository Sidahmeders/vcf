var socket = io()

// peer-call
var peersMap = {}
var localUuid
var localStream
var localVideo = document.getElementById('localVideo')
var room
var localUserName

var turnReady
var STUNServers = null
var mediaConstraint = { audio: false, video: true }
var peerConfig = {
  iceServers: [
    {
      urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
  iceCandidatePoolSize: 10,
}
