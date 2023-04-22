import startGame from '../index.js';
import { getNumber } from '../utils.js';

const rule = 'What number is missing in the progression?';

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
  const startValue = Math.floor(getNumber(1, 100) / 2);
  for (let number = startValue; progression.length < progressionLength; number += progressStep) {
    progression.push(number);
  }
  const hideRandom = Math.floor(Math.random() * progression.length);
  const correctAnsw = progression[hideRandom].toString();
  progression[hideRandom] = '..';
  const hideProgression = progression.join(' ');
  return [hideProgression, correctAnsw];
}

export default function progressionGame() {
  startGame(rule, getProgression);
}
