import { cons } from 'hexlet-pairs';
import getRandomNum from '../helper';
import startGame from '..';

const rules = ('Balance the given number.\n');

const balanceNum = (num) => {
  const numArr = num.toString().split('');
  const sum = numArr.reduce((acc, val) => Number(acc) + Number(val));
  let rest = sum % numArr.length;
  const flatNum = (sum - rest) / numArr.length;

  const iter = (val = []) => {
    const balancedArr = [flatNum, ...val];
    return val.length < numArr.length ? iter(balancedArr) : val;
  };

  const result = iter()
    .map((val) => {
      rest -= 1;
      return rest >= 0 ? val + 1 : val;
    })
    .sort((a, b) => a - b)
    .join('');

  return result;
};

const data = () => {
  const num = getRandomNum(0, 5000);

  const answer = balanceNum(num);

  return cons(num, answer);
};

export default () => startGame(rules, data);
