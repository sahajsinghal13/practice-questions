// squares of [1, 2, 3] => [1, 4, 9]
const sqaure = function (number) {
  return number * number;
}
const squaresOf = function (numbers) {
  return numbers.map(sqaure);
};

console.log(squaresOf([1, 2, 3, 4, 5]));