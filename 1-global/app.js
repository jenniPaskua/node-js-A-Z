const fs = require("fs");
console.log(global);

global.hello = () => {
  console.log("hello");
};

global.hello();
hello();
// https://academy.dream-coding.com/courses/take/node/lessons/24539336-4-3
