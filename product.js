// productOf([1, 2, 3, 4]) => 24
const multiply = function (product, multiplicand) {
  return product * multiplicand;
};

const productOf = function (numbers) {
  return numbers.reduce(multiply, 1);
};

console.log(productOf([1, 2, 3, 4, 5]));
