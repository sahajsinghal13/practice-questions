// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const isTruthy = function (number) {
  return number !== 0;
};

const truthValuesOf = function (numbers) {
  return numbers.map(isTruthy);
};

console.log(truthValuesOf([-1, 0, 1, 2, 10]));