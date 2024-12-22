// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const isVowel = function (char, onlyVowels) {
  const vowels = 'aeiouAEIOU';
  return vowels.includes(char);
};

const vowelCount = function (str) {
  return str.split('').filter(isVowel).length;
}

const countVowelsOf = function (strings) {
  return strings.map(vowelCount);
};

console.log(countVowelsOf(["apple", "banana", "grape"]));