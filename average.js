// averageOf([1, 2, 3, 4, 5]) => 3
const add = function (sum, number) {
  return sum + number;
};

const averageOf = function (numbers) {
  return numbers.reduce(add, 0) / numbers.length;
};

console.log(averageOf([1, 2, 3, 4, 5]));
