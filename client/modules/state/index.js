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

  setPlayerSuiteStatus({ totalPoints, suitesMap }) {
    this.playerSuiteStatus.validSuites = suitesMap
    this.playerSuiteStatus.totalPoints = totalPoints
    this.publishStateChange({ type: 'player-points', data: totalPoints })
  }

  publishStateChange(payload = {}) {
    const event = new CustomEvent('state-change', { detail: { payload } })
    document.dispatchEvent(event)
  }
}

export default new State()
