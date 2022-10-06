// node js는 컴퓨터 위에서 동작하는 자바스크립트 런타임 환경이다.
// 브라우저 위에서는 할 수 없었던, os, process, path, file system 접속할 수 있다.

// node 의 이벤트에 대해 알아보자!
const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log("first callback - ", args);
};
emitter.on("jenn", callback1);

// jenn이라는 이벤트가 들어오면 콜백함수가 호출된다
emitter.on("jenn", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("jenn", {message: 1});
emitter.emit("jenn", {message: 2});
emitter.removeListeners("jenn", callback1); // 특정 콜백 listener를 지움
emitter.removeAllListeners; // 모든 콜백 listener 지움
emitter.emit("jenn", {message: 3});

/*
first callback -  { message: 1 }
second callback -  { message: 1 }
first callback -  { message: 2 }
second callback -  { message: 2 }
*/
