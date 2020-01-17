// 암시적 변수 선언
foo = "bar";

var name = "Peter";
var number = 200;
var isTrue = true;
var nothing = null;
var empty = undefined;
var list = ["apple", "orange", "kiwi"];
var ref = {
  price: 1000,
  count: 1
};
var func = function() {};

console.log(name);
console.log(number);
console.log(isTrue);
console.log(nothing);
console.log(empty);
console.log(list);
console.log(ref);
console.log(func);

// 함수 구현부에 일반적으로 명령문을 작성하나 아래와 같이 표현식을 사용해도 무방.
function greeting() {
  "hello";
  "Chloe" + 3;
  greeting();
}

// 아래 코드는 에러 발생. 값으로 의도된 곳에 표현식 대신 명령문을 넣었기 때문에.
// greeting(if (true) {
//     console.log("It is not acceptable");
// });

var result = true;

if (result) {
  console.log("result is true");
}

if (!result) {
  console.log("don't execute");
}

var number = 2;

if (number == 1) {
  console.log("number is 1");
} else if (number == 2) {
  console.log("number is 2");
} else if (number == 3) {
  console.log("number is 3");
} else {
  console.log("number is not 1, 2, 3");
}

var subject = "javascript";
switch (subject) {
  case "C language":
    console.log("subject is C language");
    break;
  case "javascript":
    console.log("subject is javascript");
    break;
  case "python":
    console.log("subject is python");
    break;
  default:
    console.log("unknown subject!");
    break;
}

for (var i = 0; i < 10; i++) {
  console.log("i of loop is: " + i);
}

var students = [
  { name: "John", score: 90, grade: "B" },
  { name: "Peter", score: 75 },
  { name: "Jane", score: 100, grade: "A" },
  { name: "Kim", score: 88, grade: "C" }
];

for (var i = 0; i < students.length; i++) {
  var score = students[i];
  if (!score || !score.grade) {
    continue;
  }

  console.log(i + " score!");
  if (score.name === "Jane") {
    console.log(score.name + "'s Grade is " + score.grade);
    break;
  }
}

var store = { snack: 1000, flower: 5000, beverage: 2000 };

for (var item in store) {
  if (!store.hasOwnProperty(item)) {
    continue;
  }

  console.log(item + "'s price is " + store[item]);
}

var isScore = function(student, name) {
  console.log(`find ${name} in ${student.grade}`);

  if (student.name === name) {
    console.log(`${student.name}'s score is ${student.score}`);
    return true;
  }
  return false;
};

var s;
while ((s = students.shift())) {
  if (!s.name || !s.score || !s.grade) {
    continue;
  }
  var result = isScore(s, "John");
  if (result) {
    break;
  }
}

var j = 0;
var names = ["Tommy", "Richard", "Susan", "Lisa"];
var scores = [70, 75, 97, 85];
var newStudents = [];
do {
  newStudents[j] = { name: names[j], score: scores[j] };
  j++;
} while (j < 4);

console.log(newStudents);
