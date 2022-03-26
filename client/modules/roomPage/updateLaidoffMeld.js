export default function makeUpdateLaidoffMeld({ LayedOffMelds, Card }) {
  return function updateLaidoffMeld(updatedMelds) {
    const { peerName, melds } = updatedMelds
    const peerMeldElement = document.getElementById(peerName + '+laidoff_meld')
    peerMeldElement.innerHTML = ''

    Object.entries(melds).forEach(([meldType, meld]) => {
      Object.entries(meld).forEach(([meldIndex, meldCards]) => {
        const validHandMeldElement = LayedOffMelds(meldType, meldIndex)
        meldCards.forEach((card) => {
          const cardElement = Card(card, false)
          validHandMeldElement.append(cardElement)
        })
        peerMeldElement.appendChild(validHandMeldElement)
      })
    })
  }
}
