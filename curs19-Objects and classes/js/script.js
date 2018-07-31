var emptyObject = {}; // empty object, no property, no method
console.log(emptyObject);

var emptyObject2 = new Object();
console.log(emptyObject2);

var userMe = {
  name: "Norbert Vincze",
  age: 35,
  height: 175,
  weight: 65,
  "eyes color": "brown",
  
  sayHi: function() {
    console.log("Hi from an object method!");
  },
  sayHiTo: function(name) {
    console.log("Hello, " + name + "!");
  }
};

console.log(userMe);
userMe.sayHi();
userMe.sayHiTo("Everybody");

console.log(userMe.name); // dot notation
console.log(userMe["eyes color"]);
console.log(userMe["name"]); // brackets notation

var prop = "height";
console.log("height", userMe[prop]); // will display height
console.log(userMe.prop); // userMe["prop"] - it is undefined because there is no prop property defined within object

prop = "age"
console.log("age", userMe[prop]); // will display age

console.log("userMe keys", Object.keys(userMe));
console.log("userMe values", Object.values(userMe));

var keys = Object.keys(userMe);
for (var i = 0; i < keys.length; i++) {
  var prop = keys[i];
  console.log(prop, userMe[prop]);
}

// constructor function

function User(options) {
  options = options || {}; // this is used to avoid console errors
  this.name = options.name || ""; // this is used to avoid console errors, without a name the object will have an empty string as name
  this.age = options.age;
  this.height = options.height;
  this.weight = options.weight;
  this.calculateBMI = function () {
    return this.height/this.weight;
  }
  
}

  var user = new User({
    name: "Norbert",
    height: 175,
    weight: 65
  });

console.log("User created with constructor function", user);
console.log("user BMI", user.calculateBMI());

var colleague = new User({
    name: "Robert",
    height: 185,
    weight: 75
  });

console.log("User created with constructor function", colleague);
console.log("user BMI", colleague.calculateBMI());

console.log("User prototype", User.prototype);

User.prototype.sayHi = function() {
  console.log("Hi there from " + this.name +"!")
}

user.sayHi();
colleague.sayHi();

console.log("there is no prototype property on objects", user.prototype); // is undefined
console.log("property attribute", Object.getPrototypeOf(user), Object.getPrototypeOf(colleague));
console.log("Class is prototype of object", User.prototype.isPrototypeOf(user), User.prototype.isPrototypeOf(colleague));

console.log(user.toString());