import { getGame, getNumber } from '../index.js';

function getQuestion() {
  const num1 = getNumber();
  const num2 = getNumber();
  const question = `${num1} ${num2}`;
  return question;
}

function getNOD(x, y) {
  if (y > x) {
    return getNOD(y, x);
  }
  if (!y) {
    return x;
  }
  return getNOD(y, x % y);
}

function getAnswer(question) {
  const numbers = question.split(' ');
  const num1 = +numbers[0];
  const num2 = +numbers[1];
  const answer = getNOD(num1, num2);
  return answer.toString();
}

export default function gcdGame() {
  const nameGame = gcdGame;
  const rule = 'Find the greatest common divisor of given numbers.';
  const question = getQuestion();
  const answer = getAnswer(question);
  getGame(nameGame, rule, question, answer);
}
