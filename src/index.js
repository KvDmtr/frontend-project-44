import readlineSync from 'readline-sync';

const roundCount = 3;

export default function startGame(rule, getGame) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = getGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!(userAnswer === answer)) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".
  Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
