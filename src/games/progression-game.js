import { getGame, getNumber } from '../index.js';

function randomStep() {
  const progressionStep = Math.floor(Math.random() * 10 + 1);
  return progressionStep;
}

function getProgressionLength() {
  const minLength = 5;
  const maxLength = 10;
  const progressionLength = minLength + Math.random() * (maxLength + 1 - minLength);
  return Math.floor(progressionLength);
}

function getProgression() {
  const progression = [];
  const progressionLength = getProgressionLength();
  const progressStep = randomStep();
  const startValue = Math.floor(getNumber() / 2);
  for (let number = startValue; progression.length < progressionLength; number += progressStep) {
    progression.push(number);
  }
  const hideRandom = Math.floor(Math.random() * progression.length);
  progression[hideRandom] = '..';
  const question = progression.join(' ');
  return [question, progressStep];
}

function getAnswer(question, progressStep) {
  const progression = question.split(' ');
  const hideNumber = progression.indexOf('..');
  let previousNum = 0;
  if (hideNumber === 0) {
    previousNum = +progression[hideNumber + 1];
    return `${previousNum - progressStep}`;
  }
  previousNum = +progression[hideNumber - 1];
  return `${previousNum + progressStep}`;
}

export default function progressionGame() {
  const nameGame = progressionGame;
  const rule = 'What number is missing in the progression?';
  const [question, progressStep] = getProgression();
  const answer = getAnswer(question, progressStep);
  getGame(nameGame, rule, question, answer);
}
