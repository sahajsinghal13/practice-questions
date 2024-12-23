// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reverseArray = function (array) {
  return array.reverse();
};

const reversedArraysOf = function (arrays) {
  return arrays.map(reverseArray);
};

console.log(reversedArraysOf([[], [1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]));