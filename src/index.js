import readlineSync from 'readline-sync';
import greetings from './cli.js';

export function getNumber() {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let count = 1;
const userName = greetings();

export function getGame(nameGame, rule, question, answer) {
  if (count === 1) {
    console.log(rule);
  }
  if (count === 4) {
    return console.log(`Congratulations, ${userName}!`);
  }
  console.log(question);
  const userAnswer = readlineSync.question('Your answer: ');
  if (!(userAnswer === answer)) {
    const error = `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".
Let's try again, ${userName}!`;
    return console.log(error);
  }
  count += 1;
  console.log('Correct!');
  return nameGame();
}
