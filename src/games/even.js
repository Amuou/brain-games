import readlineSync from 'readline-sync';
import askUserName from '..';

const isEven = num => (num % 2 ? 'no' : 'yes');

const evenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = askUserName();
  const iter = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}`);
    }
    const num = Math.floor(Math.random() * 100) + 1;
    const even = isEven(num);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');
    return even === userAnswer
      ? console.log('Correct!') || iter(acc + 1)
      : console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${even}.`) || console.log(`Let's try again, ${userName}`);
  };
  return iter(0);
};

export default evenGame;
