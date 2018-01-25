import { cons } from 'hexlet-pairs';
import getRandomNum from '../helper';
import startGame from '..';

const rules = ('Balance the given number.\n');

const balanceNum = (number) => {
  const digitsArr = String(number)
    .split('')
    .map(num => Number(num));
  const min = Math.min(...digitsArr);
  const max = Math.max(...digitsArr);

  if (max - min < 2) {
    return digitsArr
      .sort((a, b) => a - b)
      .join('');
  }

  digitsArr[digitsArr.indexOf(min)] = min + 1;
  digitsArr[digitsArr.indexOf(max)] = max - 1;

  return balanceNum(digitsArr.join(''));
};

const data = () => {
  const num = getRandomNum(0, 5000);

  const answer = balanceNum(num);

  return cons(num, answer);
};

export default () => startGame(rules, data);
