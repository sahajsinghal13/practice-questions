// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const reverseString = function (string) {
  return string.split("").reverse().join("");
};

const reversedStringsOf = function (strings) {
  return strings.map(reverseString);
};

console.log(reversedStringsOf(['ab', 'abc', 'aaaabbbbcccc']));