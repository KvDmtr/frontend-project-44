import startGame from '../index.js';
import getNumber from '../utils.js';

const rule = 'What number is missing in the progression?';
const progressLength = getNumber(5, 10);

function getProgression(start, step, length) {
  const progression = [];
  for (let number = start; progression.length < length; number += step) {
    progression.push(number);
  }
  return progression;
}

function generateRound() {
  const startValue = getNumber(1, 100);
  const progressStep = getNumber(1, 10);
  const progression = getProgression(startValue, progressStep, progressLength);
  const hideRandom = getNumber(0, progression.length - 1);
  const correctAnsw = progression[hideRandom].toString();
  progression[hideRandom] = '..';
  const hideProgression = progression.join(' ');
  return [hideProgression, correctAnsw];
}

export default () => {
  startGame(rule, generateRound);
};
