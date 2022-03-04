import isValidSequence from './isValidSequence.js'
import isValidSet from './isValidSet.js'

const rummyMethods = [isValidSet, isValidSequence]

export default function suiteValidator(playerCards, methods = rummyMethods) {
  if (typeof playerCards !== 'object') return false
  const results = []

  for (let method of methods) {
    let result = method(playerCards)
    results.push(result)
  }

  return results
}
