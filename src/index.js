import readlineSync from 'readline-sync';
import { greetings } from './utils.js';

const userName = greetings();

export default function startGame(rule, getGame) {
  const numRound = 3;
  console.log(rule);
  for (let i = 0; i < numRound; i += 1) {
    const [question, answer] = getGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!(userAnswer === answer)) {
      const error = `"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".
  Let's try again, ${userName}!`;
      return console.log(error);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
}
