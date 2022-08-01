let num = 1;

//취소할 수 있어야 함
const timeout = setInterval(() => {
  console.log(num++);
}, 1000);

setTimeout(() => {
  console.log("Timeout!");
  clearInterval(timeout);
}, 6000);
