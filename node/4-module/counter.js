let count = 0; //외부에서는 접근하지 못하도록 함

function increase() {
  count++;
}

function getCount() {
  return count;
}

module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module);
