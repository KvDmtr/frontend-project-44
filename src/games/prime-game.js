import startGame from '../index.js';
import getNumber from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getRound() {
  const num = getNumber(0, 100);
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [num, correctAnswer];
}

export default () => {
  startGame(rule, getRound);
};
