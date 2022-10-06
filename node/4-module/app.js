// 규모 있는 프로젝트에서는 모듈을 사용해야 한다.
// 연관있는 기능끼리 한 파일안에 모듈로 관리하면 좋다.

// import * as counter from "./counter.js";
const counter = require("./counter.js");

counter.increase();
console.log(counter.getCount());
