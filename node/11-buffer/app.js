// Fixed-size chuck of memory
// array of integers, byte of data

const buf = Buffer.from("Hi");
console.log(buf);
console.log(buf.length);
console.log(buf[0]); // ASCII 72
console.log(buf[1]); // ASCII 105
console.log(buf.toString());

/*
<Buffer 48 69>
H : 48
I : 69
*/

//create
const buf2 = Buffer.alloc(2);
const buf3 = Buffer.allocUnsafe(2); // faster but may have data
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3);
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
