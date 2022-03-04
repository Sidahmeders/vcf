import getPlayerCards from './getPlayerCards.js'
import suiteValidator from './suiteValidator/index.js'

export default async function updateSuitesStatus() {
  resetPlayerCardsStatus()
  const playerCardsClasses = getPlayerCards()
  const suitesMap = suiteValidator(playerCardsClasses)
  setPlayerCardsStatus(suitesMap)
}

function resetPlayerCardsStatus() {
  const cardsNodes = document.getElementById('local-player').childNodes
  cardsNodes.forEach((cardElement) => cardsFlag.removeValidFlag(cardElement))
}

function setPlayerCardsStatus(suitesMap) {
  const colors = ['#3f7', '#26f']
  suitesMap.forEach((suite, index) => {
    const bgColor = colors[index]

    for (let key in suite) {
      const playerCardsNodes = document.getElementById('local-player').childNodes
      const startIndex = parseInt(key)
      const endIndex = startIndex + suite[key].length

      for (let i = startIndex; i < endIndex; i++) {
        const cardElement = playerCardsNodes[i]
        cardsFlag.addValidFlag(cardElement, bgColor)
      }
    }
  })
}

const cardsFlag = {
  addValidFlag: (cardElement, color) => {
    cardElement.innerHTML = `<span class="valid-flag" style="background:${color};"></span>`
  },
  removeValidFlag: (cardElement) => (cardElement.innerHTML = ''),
}
