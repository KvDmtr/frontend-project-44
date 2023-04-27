import startGame from '../index.js';
import getNumber from '../utils.js';

const rule = 'What is the result of the expression?';
const mathSymb = ['+', '-', '*'];

function mathExpression(num1, num2, mathSymbol) {
  switch (mathSymbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`There is no such operator like '${mathSymbol}'!`);
  }
}

function generateRound() {
  const num1 = getNumber(1, 100);
  const num2 = getNumber(1, 100);
  const randSymb = mathSymb[getNumber(0, 2)];
  const expression = `${num1} ${randSymb} ${num2}`;
  const correctAnsw = mathExpression(num1, num2, randSymb).toString();
  return [expression, correctAnsw];
}

export default () => {
  startGame(rule, generateRound);
};
