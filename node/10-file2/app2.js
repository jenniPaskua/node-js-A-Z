const fs = require("fs").promises;

// read a file
fs.readFile("./text-new.txt")
  .then((data) => console.log(data)) // <Buffer 48 65 6c 6c 6f 21>
  .catch(console.error);

fs.readFile("./text-new.txt", "utf-8")
  .then((data) => console.log(data)) // Hello!
  .catch(console.error);

// write a file
fs.writeFile("./text-new.txt", "Hello Jennn! :) ").catch(console.error); // error는 언제나 발생할 수 있기 떄문에 catch는 항상 처리해준다

// append text at file
fs.appendFile("./text-new.txt", "Have a awesome day!")
  .then(() => {
    // copy
    fs.copyFile("./text-new.txt", "./text-new2.txt").catch(console.error);
    // 빈 파일이 생성될 수 있음 - 동기적으로 작업 필요함
  })
  .catch(console.error);

// folder 폴더 생성하기
fs.mkdir("sub-folder").catch(console.error);

// 파일 읽어오기
fs.readdir("./") // [ 'app.js', 'app2.js', 'sub-folder', 'text-new.txt', 'text-new2.txt' ]
  .then(console.log)
  .catch(console.error);
