import calcSuitesTotalPoints from './calcSuitesTotalPoints.js'
import isValidSequence from './isValidSequence.js'
import isValidSet from './isValidSet.js'

export default function suiteValidator(playerCards) {
  const suitesMap = []
  const pointsMap = []

  const validSetsMap = isValidSet(playerCards)
  const validSequencesMap = isValidSequence(playerCards)

  const setsPointsMap = calcSuitesTotalPoints(validSetsMap)
  const sequencesPointsMap = calcSuitesTotalPoints(validSequencesMap)

  suitesMap.push(validSetsMap, validSequencesMap)
  pointsMap.push(setsPointsMap, sequencesPointsMap)

  return { suitesMap, pointsMap }
}
