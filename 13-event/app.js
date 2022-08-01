const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log("first callback - ", args);
};
emitter.on("jenn", callback1);

emitter.on("jenn", (args) => {
  console.log("second callback - ", args);
});

emitter.emit("jenn", {message: 1});
emitter.emit("jenn", {message: 2});
emitter.removeAllListeners();
emitter.emit("jenn", {message: 3});
