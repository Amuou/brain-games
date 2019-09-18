import { car, cdr } from 'hexlet-pairs'
import readlineSync from 'readline-sync'

export const askUserName = () => readlineSync.question('May I have your name? ')

const startGame = (rules = '', data) => {
  console.log('Welcome to the Brain Games!\n')
  console.log(`${rules}\n`)

  const playerName = askUserName()
  console.log(`Hello, ${playerName}!\n`)

  const iter = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${playerName}!`)
    }
    const parsedData = data()
    const expression = car(parsedData)
    const answer = cdr(parsedData)

    console.log(`Question: ${expression}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (answer === userAnswer) {
      console.log('Correct!')
      return iter(count + 1)
    }

    console.log(
      `${userAnswer} is the wrong answer ;(. The correct answer was ${answer}.`,
    )
    return console.log(`Let's try again, ${playerName}`)
  }

  return iter()
}

export default startGame
