function hello() {
  console.log(this);
  console.log(this === global);
  // 함수 안에서 this는 글로벌이다
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log("-----class-----");
    console.log(this);
    //클래스에서의 this는 global이 아니다! 클래스 자신이다!
    console.log(this === global);
  }
}

const a = new A(1);
a.memberFunction();

console.log("----global scope----");
console.log(this);
console.log(this === module.exports);
