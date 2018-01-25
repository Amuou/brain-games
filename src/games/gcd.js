import { cons } from 'hexlet-pairs';
import getRandomNum from '../helper';
import startGame from '..';

const rules = ('Find the greatest common divisor of given numbers.');

const gcd = (a, b) => ((!b) ? a : gcd(b, a % b));

const data = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const expression = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));

  return cons(expression, answer);
};

export default () => startGame(rules, data);
