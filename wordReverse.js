// reverse words in ["hello world", "goodbye moon"] => ["olleh dlrow", "eybdoog noom"]
const reverseWord = function (word) {
  return word.split('').reverse().join('');
};

const extractWords = function (str) {
  return str.split(' ').map(reverseWord).join(' ');
};

const reversedWordsOf = function (strings) {
  return strings.map(extractWords);
};

console.log(reversedWordsOf(["hello world", "goodbye moon"]));