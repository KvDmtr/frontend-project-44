import startGame from '../index.js';
import { getNumber } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime() {
  const num = getNumber(1, 100);
  let divisor = 0;
  for (let i = 2; i * 2 <= num; i += 1) {
    if (num % i === 0) {
      divisor += 1;
    }
  }
  const condition = !(num % 2 === 0) && !(num === 1) && (divisor === 0);
  if (condition) {
    return [num, 'yes'];
  }
  return [num, 'no'];
}

export default function primeGame() {
  startGame(rule, isPrime);
}
