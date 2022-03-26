const MeldsValidator = require('../shared/meldValidator')

module.exports = ({ InMemoryGames }) => {
  return (roomName, username, peerName, meldInfo) => {
    const { meldType, meldIndex, cardToAdd } = meldInfo
    const targetRoom = InMemoryGames.getRoomData(roomName)
    const player = targetRoom?.players[username]
    const playerCards = player?.cards

    const isDeclared = player?.isDeclared
    if (!isDeclared) throw Error('please make sure to declare before you layoff cards')

    const declaredPlayers = targetRoom?.declaredPlayers
    const playerMelds = declaredPlayers[peerName]?.melds

    const selectedMeld = playerMelds[meldType][meldIndex]
    const prependedMeld = [cardToAdd, ...selectedMeld]
    const appendedMeld = [...selectedMeld, cardToAdd]

    const prePlayerMeld = new MeldsValidator().validatePlayerCards(prependedMeld)
    const postPlayerMeld = new MeldsValidator().validatePlayerCards(appendedMeld)

    let validatedPlayerMeld = []
    Object.values(prePlayerMeld[meldType]).forEach((meld) => (meld.length > validatedPlayerMeld.length ? (validatedPlayerMeld = meld) : ''))
    Object.values(postPlayerMeld[meldType]).forEach((meld) => (meld.length > validatedPlayerMeld.length ? (validatedPlayerMeld = meld) : ''))

    const isValidCard = validatedPlayerMeld.length > selectedMeld.length
    if (!isValidCard) throw Error(`you can't layoff ${cardToAdd} card in the ${selectedMeld} meld`)

    if (validatedPlayerMeld[0] === cardToAdd) selectedMeld.unshift(cardToAdd)
    else selectedMeld.push(cardToAdd)

    player.cards = playerCards.filter((card) => card !== cardToAdd) //FIXME: REPEATED...
  }
}
