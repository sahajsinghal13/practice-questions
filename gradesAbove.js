// students with grades above 80 [{name: "John", grade: 75}, {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const isAbove = function (report) {
  return report.grade > 80;
};

const filterHighGrades = function (students) {
  return students.filter(isAbove);
 };

 console.log(filterHighGrades([{name: "John", grade: 75}, 
  {name: "Jane", grade: 85}, {name: "Alex", grade: 80}]));