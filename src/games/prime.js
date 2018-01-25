import { cons } from 'hexlet-pairs';
import getRandomNum from '../helper';
import startGame from '..';

const rules = ('Is this number prime?');

const isPrime = (num) => {
  const iter = (acc = 2) => {
    if (acc >= num) {
      return true;
    }
    return num % acc === 0 ? false : iter(acc + 1);
  };

  return num < 2 ? false : iter();
};

const data = () => {
  const expression = getRandomNum(0, 200);
  const answer = String(isPrime(expression));

  return cons(expression, answer);
};

export default () => startGame(rules, data);
