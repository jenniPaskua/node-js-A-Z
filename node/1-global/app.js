const fs = require("fs");
console.log(global);

global.hello = () => {
  console.log("hello");
};

global.hello();
hello();
// https://academy.dream-coding.com/courses/take/node/lessons/24539336-4-3

console.log("log"); // 개발
console.info("info"); // 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object
const student = {name: "ellie", age: 20, company: {name: "AC"}};
console.log(student);
console.table(student);
console.dir(student, {showHidden: true, colors: false, depth: 0});

// measuring time
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd("for loop"); // 성능 체크 시 필요!

// counting
function a() {
  console.count("a function");
}

a();
console.countReset("a function");
a();

// trace

function f1() {
  f2();
}

function f2() {
  f3();
}

function f3() {
  console.log("f3");
  console.trace();
}

f1();
