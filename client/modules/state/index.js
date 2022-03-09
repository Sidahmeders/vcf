class State {
  constructor() {
    if (!State.instance) {
      this.playerSuiteStatus = {
        validSuites: {},
        totalPoints: 0,
      }

      this.roomState = {
        pickedCardClass: undefined,
        pickedCardElement: undefined,
        droppedCardClass: undefined,
        cardId: undefined,
      }

      State.instance = this
    }

    return State.instance
  }

  setPlayerSuiteStatus({ pointsMap, suitesMap }) {
    const setsPoints = pointsMap['0']
    const sequencePoints = pointsMap['1']

    let playerPoints = 0
    for (let key in setsPoints) playerPoints += parseInt(setsPoints[key])
    for (let key in sequencePoints) playerPoints += parseInt(sequencePoints[key])

    this.playerSuiteStatus.validSuites = suitesMap
    this.playerSuiteStatus.totalPoints = playerPoints

    this.publishStateChange({ type: 'player-points', data: playerPoints })
  }

  publishStateChange(payload = {}) {
    const event = new CustomEvent('state-change', { detail: { payload } })
    document.dispatchEvent(event)
  }
}

export default new State()
