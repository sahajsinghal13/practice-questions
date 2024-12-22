// double letters of ["cat", "dog", "bat"] => ["ccaat", "ddoog", "bbaatt"]
const double = function (char) {
  return char.repeat(2);
};

const doubleThechars = function (string) {
  return string.split("").map(double).join("");
}

const doubleLettersOf = function (strings) {
  return strings.map(doubleThechars);
};

console.log(doubleLettersOf(['a', 'ab', 'abc', 'aabb']));