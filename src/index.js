import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const startGame = (rules, data) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(rules);

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const iter = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${playerName}!`);
    }
    const parsedData = data();
    const expression = car(parsedData);
    const answer = cdr(parsedData);

    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    return answer === userAnswer
      ? console.log('Correct!') || iter(count + 1)
      : console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`) || console.log(`Let's try again, ${playerName}`);
  };

  return iter();
};

export default startGame;
