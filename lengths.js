// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const lengthIs = function (string) {
  return string.length;
};

const lengthsOf = function (strings) {
  return strings.map(lengthIs);
};

console.log(lengthsOf(["apple", "banana", "kiwi", "Good morning"]));