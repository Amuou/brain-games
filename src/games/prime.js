import { cons } from 'hexlet-pairs'

import startGame from '..'
import getRandomNum from '../helper'

const rules = 'Is this number prime?'

const isPrime = (num) => {
  const iter = (acc = 2) => {
    if (acc >= num) {
      return 'yes'
    }
    return num % acc === 0 ? 'no' : iter(acc + 1)
  }

  return num < 2 ? 'no' : iter()
}

const data = () => {
  const expression = getRandomNum(0, 200)
  const answer = String(isPrime(expression))

  return cons(expression, answer)
}

export default () => startGame(rules, data)
