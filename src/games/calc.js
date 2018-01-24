import { cons } from 'hexlet-pairs';
import getRandomNum from '../helper';
import startGame from '..';

const rules = ('What is the result of the expression?\n');

const data = () => {
  const num1 = getRandomNum(0, 30);
  const num2 = getRandomNum(0, 30);
  const randomOper = ['*', '-', '+'][getRandomNum(0, 3)];
  const expression = `${num1} ${randomOper} ${num2}`;

  const operations = {
    '*': (firstOp, secondOp) => String(firstOp * secondOp),
    '-': (firstOp, secondOp) => String(firstOp - secondOp),
    '+': (firstOp, secondOp) => String(firstOp + secondOp),
  };

  const operation = operations[randomOper];
  const answer = operation(num1, num2);

  return cons(expression, answer);
};

export default () => startGame(rules, data);
