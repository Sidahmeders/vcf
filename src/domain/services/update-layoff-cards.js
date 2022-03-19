const MeldsValidator = require('../shared/meldValidator')

module.exports = ({ InMemoryGames }) => {
  return (roomName, playerName, meldInfo) => {
    const { meldType, meldIndex, cardToAdd } = meldInfo
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const declaredPlayers = targetRoom?.declaredPlayers
    const playerMelds = declaredPlayers[playerName]?.melds

    // const isValidCard = new MeldsValidator(playerMelds).validatePlayerCards()

    // if (isValidCard) {
    //   playerMelds[meldType][meldIndex].push(cardToAdd)
    // }
  }
}
