const MeldsValidator = require('../shared/meldValidator')

module.exports = ({ InMemoryGames }) => {
  return (roomName, playerName, meldInfo) => {
    const { meldType, meldIndex, cardToAdd } = meldInfo
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const declaredPlayers = targetRoom?.declaredPlayers
    const playerMelds = declaredPlayers[playerName]?.melds

    const selectedMeld = playerMelds[meldType][meldIndex]
    const prependedMeld = [cardToAdd, ...selectedMeld]
    const appendedMeld = [...selectedMeld, cardToAdd]

    const prePlayerMeld = new MeldsValidator().validatePlayerCards(prependedMeld)
    const postPlayerMeld = new MeldsValidator().validatePlayerCards(appendedMeld)

    const validatedPlayerMeld = []
    Object.values(prePlayerMeld[meldType]).forEach((meld) => validatedPlayerMeld.push(meld))
    Object.values(postPlayerMeld[meldType]).forEach((meld) => validatedPlayerMeld.push(meld))

    const isValidCard = validatedPlayerMeld.some((updatedMeld) => updatedMeld.length > selectedMeld.length)

    if (isValidCard) playerMelds[meldType][meldIndex].push(cardToAdd)
  }
}
