export default function makeUpdateMeldsStatus({ getPlayerCards, MeldValidator, state }) {
  const cardsFlag = {
    addValidFlag: (cardElement, color) => {
      cardElement.innerHTML = `<span class="valid-flag" style="background:${color};"></span>`
    },
    removeValidFlag: (cardElement) => (cardElement.innerHTML = ''),
  }

  return async function updateMeldsStatus() {
    resetPlayerCardsStatus()
    const playerCards = getPlayerCards()
    const meldValidator = new MeldValidator()
    const meldsMap = meldValidator.validatePlayerCards(playerCards)
    const totalPoints = meldValidator.calculatePoints()

    state.setPlayerMeldsStatus({ totalPoints, meldsMap })
    setPlayerCardsStatus(meldsMap)
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
