export function randomNumberInRange(min, max) {
  return Math.random() * (max - min) + min;
}

export function randomIntegerInRange(min, max) {
  return Math.floor(randomNumberInRange(min, max));
}
