const process = require("process");

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

setTimeout(() => {
  console.log("setTimeout");
}, 0);

//task queue 에 값이 있어도 무시하고 가장 먼저 호출하도록 한다.
process.nextTick(() => {
  console.log("nextTick");
});

for (let i = 0; i < 1000; i++) {
  console.log("for loop");
}

/*
r loop
for loop
for loop
for loop
for loop
nextTick
setTimeout
*/
