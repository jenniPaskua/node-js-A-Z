function sayHello() {
  console.log("hello!");
  console.log("ghelsj");
}

function calculate(x, y) {
  console.log("caculating...");
  const result = x + y;
  console.log("result: ", result);
  sayHello();
  return result;
}

calculate(1, 2);

const stop = 4;
console.log("... looping ...");
for (let i = 0; i < 10; i++) {
  console.log("count", i);
  if (i === stop) {
    break;
  }
}
