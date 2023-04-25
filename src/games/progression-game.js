import startGame from '../index.js';
import getNumber from '../utils.js';

const rule = 'What number is missing in the progression?';

function getProgression(startValue, progressStep, progressLength) {
  const progression = [];
  for (let number = startValue; progression.length < progressLength; number += progressStep) {
    progression.push(number);
  }
  return progression;
}

function generateRound() {
  const startValue = getNumber(1, 100);
  const progressionStep = getNumber(1, 10);
  const progressionLength = getNumber(5, 10);
  const progression = getProgression(startValue, progressionStep, progressionLength);
  const hideRandom = getNumber(0, progression.length - 1);
  const correctAnsw = progression[hideRandom].toString();
  progression[hideRandom] = '..';
  const hideProgression = progression.join(' ');
  return [hideProgression, correctAnsw];
}

export default function progressionGame() {
  startGame(rule, generateRound);
}
