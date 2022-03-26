export default function makeUpdateMeldsStatus({ getPlayerCards, MeldValidator, state }) {
  return async function updateMeldsStatus() {
    resetPlayerCardsStatus()
    const playerCards = getPlayerCards()
    const meldValidator = new MeldValidator()
    const validMelds = meldValidator.validatePlayerCards(playerCards)
    const totalPoints = meldValidator.calculatePoints()

    state.setPlayerMeldsStatus({ totalPoints, validMelds })
    setPlayerCardsStatus(validMelds)
  }

  function resetPlayerCardsStatus() {
    const cardsNodes = document.getElementById('local-player').childNodes
    cardsNodes.forEach((cardElement) => cardsFlag.removeValidFlag(cardElement))
  }

  function setPlayerCardsStatus(meldsMap) {
    const colors = { sequences: '#3f7', sets: '#26f' }
    for (let MeldType in meldsMap) {
      const Meld = meldsMap[MeldType]
      const bgColor = colors[MeldType]

      for (let key in Meld) {
        const playerCardsNodes = document.getElementById('local-player').childNodes
        const startIndex = parseInt(key)
        const endIndex = startIndex + Meld[key].length

        for (let i = startIndex; i < endIndex; i++) {
          const cardElement = playerCardsNodes[i]
          cardsFlag.addValidFlag(cardElement, bgColor)
        }
      }
    }
  }
}

const cardsFlag = {
  addValidFlag: (cardElement, color) => {
    cardElement.innerHTML = `<span class="valid-flag" style="background:${color};"></span>`
  },
  removeValidFlag: (cardElement) => (cardElement.innerHTML = ''),
}
