import readlineSync from 'readline-sync';

export function greetings() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export function getNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
