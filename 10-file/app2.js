const fs = require("fs").promises;

// read a file
fs.readFile("./file-text.txt", "utf8")
  .then((data) => console.log("data:", data))
  .catch(console.error);

// writing a file
fs.writeFile("./file-text.txt", "Hello, Jenn Jenn!").catch(console.error);

// append a file
fs.appendFile("./file-text.txt", "yo, Jenn Jenn!")
  .then(() => {
    //copy
    fs.copyFile("./file-text.txt", "./file2.txt").catch(console.error);
  })
  .catch(console.error);

// folder
fs.mkdir("sub-folder").catch(console.error);

fs.readdir("./").then(console.log).catch(console.error);
