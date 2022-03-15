import updateDeclaredPlayers from './updateDeclaredPlayers.js'
import addDeclaredPlayers from './addDeclaredPlayers.js'
import toggleDeclaredPlayers from './toggleDeclaredPlayers.js'

export default function makeDisplayDeclaredCards({ Card, LayedOffMelds }) {
  return function displayDeclaredCards(declaredPlayers) {
    updateDeclaredPlayers(declaredPlayers)
    addDeclaredPlayers({ Card, LayedOffMelds, declaredPlayers })
    toggleDeclaredPlayers()
  }
}
