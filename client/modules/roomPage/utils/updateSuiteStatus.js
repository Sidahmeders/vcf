import getPlayerCards from './getPlayerCards.js'
import SuiteValidator from './suiteValidator.js'
import state from '../../state/index.js'

export default async function updateSuitesStatus() {
  resetPlayerCardsStatus()
  const playerCards = getPlayerCards()
  const suiteValidator = new SuiteValidator()
  const suitesMap = suiteValidator.validatePlayerCards(playerCards)
  const totalPoints = suiteValidator.calculatePoints()

  state.setPlayerSuiteStatus({ totalPoints, suitesMap })
  setPlayerCardsStatus(suitesMap)
}

function resetPlayerCardsStatus() {
  const cardsNodes = document.getElementById('local-player').childNodes
  cardsNodes.forEach((cardElement) => cardsFlag.removeValidFlag(cardElement))
}

function setPlayerCardsStatus(suitesMap) {
  const colors = { sequences: '#3f7', sets: '#26f' }
  for (let suiteType in suitesMap) {
    const suite = suitesMap[suiteType]
    const bgColor = colors[suiteType]

    for (let key in suite) {
      const playerCardsNodes = document.getElementById('local-player').childNodes
      const startIndex = parseInt(key)
      const endIndex = startIndex + suite[key].length

      for (let i = startIndex; i < endIndex; i++) {
        const cardElement = playerCardsNodes[i]
        cardsFlag.addValidFlag(cardElement, bgColor)
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
