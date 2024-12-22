// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinArray = function (array) {
  return array.join('');
};

const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(joinArray);
};

console.log(joinedArraysOf([['a', 'b'], ['a'], ['a', 1, 'b', 2, 'c', 3]]));