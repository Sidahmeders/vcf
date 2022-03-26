export const roomListeners = {
  rooms_joined: 'rooms:joined',
  rooms_error: 'rooms:error',
  peers_trunToPick: 'peers:trunToPick',
  peers_connect: 'peers:connect',
  peers_disconnect: 'peers:disconnect',
  peers_dropped_card: 'peers:dropped:card',
  cards_dropped: 'cards:dropped',
  cards_dragged: 'cards:dragged',
  cards_swapped: 'cards:swapped',
  cards_declared: 'cards:declared',
  cards_updated: 'cards:updated',
  cards_laidoff: 'cards:laidoff',
}

export const webrtcListeners = {
  peers_joined: 'peers:joined',
  peers_call: 'peers:call',
  peers_offer: 'peers:offer',
  peers_answer: 'peers:answer',
  peers_candidate: 'peers:candidate',
}
