import startGame from '../index.js';
import getNumber from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

function getGCD(x, y) {
  if (y > x) {
    return getGCD(y, x);
  }
  if (!y) {
    return x;
  }
  return getGCD(y, x % y);
}

function getRound() {
  const num1 = getNumber(1, 100);
  const num2 = getNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnsw = getGCD(num1, num2).toString();
  return [question, correctAnsw];
}

export default () => {
  startGame(rule, getRound);
};
