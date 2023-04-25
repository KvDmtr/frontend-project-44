import startGame from '../index.js';
import getNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(num) {
  const condition = num % 2 === 0;
  if (condition) {
    return true;
  }
  return false;
}

function generateRound() {
  const randNum = getNumber();
  const question = randNum.toString();
  const corretAnsw = isEven(randNum) ? 'yes' : 'no';
  return [question, corretAnsw];
}

export default function evenGame() {
  startGame(rule, generateRound);
}
