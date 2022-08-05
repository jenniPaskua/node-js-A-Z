const http = require("http");
const ejs = require("ejs");

const name = "Jenn";
const courses = [
  {name: "HTML"},
  {name: "CSS"},
  {name: "JavaScript"},
  {name: "Node"},
];
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    ejs
      .renderFile("./template/index.ejs", {name})
      .then((data) => res.end(data));
  } else if (url === "/courses") {
    ejs
      .renderFile("./template/courses.ejs", {courses})
      .then((data) => res.end(data));
  } else {
    ejs
      .renderFile("./template/not-found.ejs", {name})
      .then((data) => res.end(data));
  }
  res.end();
});

server.listen(3001);
