import express from "express";
const app = express();

app.all("/api", (req, res, next) => {
  console.log("all");
  next();
});

app.use("/sky", (req, res, next) => {
  console.log("use");
  next();
});

// middleware에 대하여
// 설정된 순서가 중요함 - next()
app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    next(new Error("error"));
  },
  (req, res, next) => {
    console.log("first2");
    next();
  }
);

app.get("/", (req, res, next) => {
  console.log("second");
});

app.use((req, res, next) => {
  res.status(404).send("Not available!");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try later!");
});

app.listen(8080);
// port IP주소
