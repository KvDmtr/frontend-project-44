import { getGame, getNumber } from '../index.js';

function mathExpression() {
  const mathSymb = ['+', '-', '*'];
  const randSymb = Math.floor(Math.random() * mathSymb.length);
  const num1 = getNumber();
  const num2 = getNumber();
  const expression = `${num1} ${mathSymb[randSymb]} ${num2}`;
  return expression;
}

function getAnswer(question) {
  const expression = question.split(' ');
  const num1 = +expression[0];
  const num2 = +expression[2];
  if (expression.indexOf('+') !== -1) {
    const res = num1 + num2;
    return res.toString();
  }
  if (expression.indexOf('-') !== -1) {
    const res = num1 - num2;
    return res.toString();
  }
  const res = num1 * num2;
  return res.toString();
}

export default function calcGame() {
  const nameGame = calcGame;
  const rule = 'What is the result of the expression?';
  const question = mathExpression();
  const answer = getAnswer(question);
  getGame(nameGame, rule, question, answer);
}
