import getSuitesTotalPoints from '../getSuitesTotalPoints.js'
import isValidSequence from './isValidSequence.js'
import isValidSet from './isValidSet.js'

export default function suiteValidator(playerCards) {
  const suitesMap = []
  const validSetsMap = isValidSet(playerCards)
  const validSequencesMap = isValidSequence(playerCards)
  suitesMap.push(validSetsMap, validSequencesMap)

  const pointsMap = []
  const setsPointsMap = getSuitesTotalPoints(validSetsMap)
  const sequencesPointsMap = getSuitesTotalPoints(validSequencesMap)
  pointsMap.push(setsPointsMap, sequencesPointsMap)

  return { suitesMap, pointsMap }
}
