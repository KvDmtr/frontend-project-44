import startGame from '../index.js';
import { getNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(num) {
  const condition = num % 2 === 0;
  if (condition) {
    return 'yes';
  }
  return 'no';
}

function getQA() {
  const randNum = getNumber();
  const numToString = randNum.toString();
  const corretAnsw = isEven(randNum);
  return [numToString, corretAnsw];
}

export default function evenGame() {
  startGame(rule, getQA);
}
