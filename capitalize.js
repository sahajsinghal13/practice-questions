// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const capitalize = function (string) {
  return string.toUpperCase();
};

const uppercaseOf = function (strings) {
  return strings.map(capitalize);
 };

 console.log(uppercaseOf(["hello", "world"]));