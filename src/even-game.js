import readlineSync from 'readline-sync';
import greetings from './cli.js';

// случайное число в диапазоне от 0 до 100(включительно)
function getNumber() {
  const min = 0;
  const max = 100;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function evenGame() {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let questionNum = 1;
  while (questionNum !== 4) {
    const number = getNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const condition = number % 2 === 0;
    if ((condition && answer === 'yes') || (!condition && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${answer === 'yes' ? 'no' : 'yes'}".
      Let's try again, ${userName}!`);
      return;
    }
    questionNum += 1;
  }
  console.log(`Congratulations, ${userName}!`);
}
