import { cons } from 'hexlet-pairs';
import getRandomNum from '../helper';
import startGame from '..';

const rules = ('What is the result of the expression?\n');

const data = () => {
  const firstOperand = getRandomNum(0, 30);
  const secondOperand = getRandomNum(0, 30);
  const randomOper = ['*', '-', '+'][getRandomNum(0, 3)];
  const expression = `${firstOperand} ${randomOper} ${secondOperand}`;
  const operations = {
    '*': (firstOp, secondOp) => String(firstOp * secondOp),
    '-': (firstOp, secondOp) => String(firstOp - secondOp),
    '+': (firstOp, secondOp) => String(firstOp + secondOp),
  };
  const operation = operations[randomOper];
  const result = operation(firstOperand, secondOperand);
  return cons(expression, result);
};

export default () => startGame(rules, data);
