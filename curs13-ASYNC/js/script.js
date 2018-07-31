var x = 2;

// var result0 = suma(x,4);
var result1 = sum(x,4);
// console.log('RESULT0', result0)
// console.log('RESULT1', result1)

function sum(a,b) {
  return a+b;
};

var result2


console.log('BEFORE SET TIMEOUT')
// console.log('RESULT SUM', result)
setTimeout(function() {
  console.log('INSIDE')
  result2 = sum(x, 3)
}, 3000)

console.log('AFTER SET TIMEOUT')
console.log('RESULT_2', result2)