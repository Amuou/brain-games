import { cons } from 'hexlet-pairs'

import startGame from '..'
import getRandomNum from '../helper'

const isEven = (num) => (num % 2 ? 'no' : 'yes')
const rules = 'Answer "yes" if number even otherwise answer "no".'

const data = () => {
  const expression = getRandomNum(0, 200)
  const answer = isEven(expression)
  return cons(expression, answer)
}

export default () => startGame(rules, data)
