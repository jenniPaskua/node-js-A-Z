const {parse} = require("path");
const path = require("path");
// console.log(__dirname);
// console.log(__filename);

// POSIX (Unix: Mac, Linux): 'User/temp/myfile.html
// Windows : 'C:\\temp\\myfile.html

/*
/Users/jenni/node-js-A-Z/node/9-path
/Users/jenni/node-js-A-Z/node/9-path/app.js
/ 경로 구분자
: 환경변수 구분자
app.js
app
/Users/jenni/node-js-A-Z/node/9-path
.js
{
  root: '/',
  dir: '/Users/jenni/node-js-A-Z/node/9-path',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
/Users/jenni/node-js-A-Z/node/9-path/app.js
isAbsolute? true
isAbsolute? false
folder/sub
/Users/jenni/node-js-A-Z/node/9-path/image
/Users/jenni/node-js-A-Z/node/9-path/image
*/

console.log(path.sep);
console.log(path.delimiter);

//basename
console.log(path.basename(__filename));
console.log(path.basename(__filename, ".js"));

// dirname
console.log(path.dirname(__filename));

// extension
console.log(path.extname(__filename));

// parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;
/*
{
  root: '/',
  dir: '/Users/jenni/node-js-A-Z/node/9-path',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}

*/

const str = path.format(parsed);
console.log(str);

//isAbsolute
console.log("isAbsolute?", path.isAbsolute(__dirname)); // 절대경로 - (ex: /Users/..)
console.log("isAbsolute?", path.isAbsolute("../")); // 상대경로

// normalize 잘못된 경로가 들어가면 알아서 수정해줌!
console.log(path.normalize("./folder/////sub")); // folder/sub

// join
console.log(__dirname + path.sep + "image");
console.log(path.join(__dirname, "image"));
