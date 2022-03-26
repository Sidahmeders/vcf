class State {
  constructor() {
    if (!State.instance) {
      this.playerMeldsStatus = {
        validMelds: {},
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

  setPlayerMeldsStatus({ totalPoints, validMelds }) {
    this.playerMeldsStatus.validMelds = validMelds
    this.playerMeldsStatus.totalPoints = totalPoints
    this.publishStateChange({ type: 'player-points', data: totalPoints })
  }

  publishStateChange(payload = {}) {
    const event = new CustomEvent('state-change', { detail: { payload } })
    document.dispatchEvent(event)
  }
}

export default new State()
