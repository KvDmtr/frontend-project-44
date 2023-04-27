import startGame from '../index.js';
import getNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

function generateRound() {
  const randNum = getNumber();
  const question = randNum.toString();
  const corretAnsw = isEven(randNum) ? 'yes' : 'no';
  return [question, corretAnsw];
}

export default () => {
  startGame(rule, generateRound);
};
