import { getGame, getNumber } from '../index.js';

function getAnswer(question) {
  let divisor = 0;
  for (let i = 2; i * 2 <= question; i += 1) {
    if (question % i === 0) {
      divisor += 1;
    }
  }
  const condition = !(question % 2 === 0) && !(question === 1) && (divisor === 0);
  if (condition) {
    return 'yes';
  }
  return 'no';
}

export default function primeGame() {
  const nameGame = primeGame;
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = getNumber();
  const answer = getAnswer(question);
  getGame(nameGame, rule, question, answer);
}
