// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatStr = function (str) {
  console.log(str);
  return str.repeat(2);
};

const repeatedStringsOf = function (strings) {
  return strings.map(repeatStr);
};

console.log(repeatedStringsOf(['a', 'ab', 'abc']));