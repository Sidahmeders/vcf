import isValidSequence from './isValidSequence.js'
import isValidSet from './isValidSet.js'

export default function suiteValidator(playerCards) {
  const suitesMap = []
  const pointsMap = []

  const validSequences = isValidSequence(playerCards)
  const { validSetsMap, totalPointsMap } = isValidSet(playerCards)

  suitesMap.push(validSetsMap, validSequences)
  pointsMap.push(totalPointsMap)

  console.log(suitesMap)
  console.log(pointsMap)

  return suitesMap
}
