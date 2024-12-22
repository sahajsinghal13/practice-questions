// even numbers [1, 2, 3, 4, 5] => [2, 4]
const isEven = function (evenCandidate) {
  return (evenCandidate & 1) === 0;
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

console.log(filterEvenNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));