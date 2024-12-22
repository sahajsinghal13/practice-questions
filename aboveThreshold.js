// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const isAboveThreshold = function (number) {
  return number > 10;
};

const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(isAboveThreshold);
};

console.log(filterNumbersGreaterThanTen([5, 12, 7, 18, 3, 10]));
