import { cons } from 'hexlet-pairs';
import getRandomNum from '../helper';
import startGame from '..';

const rules = ('What number is missing in this progression?');

const range = (start, step) => {
  const iter = (num = start, arr = []) => {
    const result = [...arr, num];
    return result.length >= 10 ? result : iter(num + step, result);
  };

  return iter();
};

const data = () => {
  const start = getRandomNum(0, 500);
  const step = getRandomNum(0, 30);
  const randomIndex = getRandomNum(0, 10);

  const progression = range(start, step);

  const expression = progression
    .map((val, index) => (index === randomIndex ? '..' : val))
    .reduce((acc, value) => `${acc} ${value}`, '');
  const answer = String(progression[randomIndex]);

  return cons(expression, answer);
};

export default () => startGame(rules, data);
