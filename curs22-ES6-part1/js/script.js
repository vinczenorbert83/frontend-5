test();

//global scope
// str is not declared, nor defined
//it will throw a reference error
// console.log("str in global scope", str);

function test() {
  //althoug str is not declared or defined yet,
  //it is hoisted from the first line in for 
  console.log("str in test function", str);
  for (var i = 1; i < 10; i++) {
    var str = 'Something ' + i;
    console.log(str);
  }
}

// myfunction();
var myfunction = function(){
  console.log("my function")
};

// under the hood
// only the declaration is moved at the top of the scope
// not the assignment

var myfunction;
// myfunction();
var myfunction = function(){
  console.log("my function")
};

const mynumber = 2;
// mynumber = 7; // error

const user = {
  name: "John",
  age: 35
};

// user = {
//  name: "Mary",
//  age: 35
// }; // error for the same reason, constant variable

user.name = "Mary";
console.log("user", user);



