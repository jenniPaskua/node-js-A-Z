const fs = require("fs");

// file에서 하는 모든 동작들을 fs모듈에서 제공한다로 볼 수 있다!
// 1. rename(..., callback(error, data)) - 비동기
// 2. try { renameSync(...) } catch (e) {} -  blocking (사용하지 않도록 한다)
// 3. promises.rename().then().catch()

// 동기 - 동기 방식은 사용하지 않도록 한다!
try {
  fs.renameSync("./text.txt", "./file-new.txt");
} catch (error) {
  console.error(error);
}

// 비동기
fs.rename("./file-new.txt", "./text.txt", (error) => {
  console.log(error);
});
console.log("next task");
/*
next task
null */

// promises
fs.promises
  .rename("./text.txt", "./text-new.txt")
  .then(() => console.log("Done!"))
  .catch(console.error); // .catch((error) => console.log(error));
