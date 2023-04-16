import { getGame, getNumber } from '../index.js';

function getAnswer(question) {
  const number = question;
  const condition = number % 2 === 0;
  if (condition) {
    return 'yes';
  }
  return 'no';
}

export default function evenGame() {
  const nameGame = evenGame;
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = getNumber();
  const answer = getAnswer(question);
  console.log(answer);
  getGame(nameGame, rule, question, answer);
}
