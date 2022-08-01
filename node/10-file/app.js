const fs = require("fs");

// 3
// rename(..., callback(error, data)) - non-blocking
// try { renameSync(...)  } catch(e) { } - blocking
// promises.rename().then().catch(0)

// try {
//   //동기적 수행, 가급적 사용하지 않도록 한다
//   fs.renameSync("./test.txt", "./file-new.txt");
// } catch (error) {
//   console.error(error);
// }
// console.log("hello");

fs.rename("./text.txt", "./file-text.txt", (error) => {
  console.error(error);
});

// console.log("hello2");

fs.promises
  .rename("./text2.txt", "./file-text2.txt")
  .then()
  .catch(console.error);
