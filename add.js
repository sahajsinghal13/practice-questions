// sumOf([1, 2, 3, 4]) => 10
const add = function (sum, number) {
  return sum + number;
};

const sumOf = function (numbers) {
  return numbers.reduce(add, 0);
};

console.log(sumOf([1, 2, 3, 4]));
