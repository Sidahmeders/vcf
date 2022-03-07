class State {
  constructor() {
    if (!State.instance) {
      this.playerPoints = 0

      State.instance = this
    }
    return State.instance
  }

  setPlayerPoints(pointsMap) {
    const setsPoints = pointsMap['0']
    const sequencePoints = pointsMap['1']
    this.playerPoints = 0
    for (let key in setsPoints) this.playerPoints += parseInt(setsPoints[key])
    for (let key in sequencePoints) this.playerPoints += parseInt(sequencePoints[key])
    this.publishStateChange({ type: 'player-points', data: this.playerPoints })
  }

  publishStateChange(payload = {}) {
    const event = new CustomEvent('state-change', { detail: { payload } })
    document.dispatchEvent(event)
  }
}

export default new State()
