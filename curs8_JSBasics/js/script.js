// Empty object
var robot = {};
console.log("Robot = ", robot);

var robot = {
  model: "TRX1000",
  weight: 100
};
console.log("Robot = ", robot);

//Add new property

robot.color = "red";
console.log("Robot = ", robot);

//Update property
robot.weight = 99;
console.log("Robot = ", robot);

//Delete property
// delete robot.model;
// console.log("Robot = ", robot);


var robot = {
  model: "TRX1000",
  weight: 100,
  run: function (){
    console.log("The robot is running");
  }
};
console.log("Robot = ", robot);

//Call robot method
robot.run();

//Typeof data
var name = "Anca";
console.log("Type of string ", typeof name);

var age = 10;
console.log("Type of string ", typeof age);

var isNull = null;
console.log("Type of string ", typeof isNull);

var isUndefined;
console.log("Type of string ", typeof isUndefined);

var list = [];
console.log("Type of array ", typeof list);

// IF statement
var x = 0;
if (x > 0) {
  console.log("Positive number x = ", x);
} else if (x === 0){
  console.log("x = ", x);
} else {
  console.log("Negative number x = ", x);
}

// prompt

var currentTime = prompt("Enter time");
console.log(currentTime);

if (currentTime<10) {
  console.log("Buna dimineata")
} else if (currentTime<=18){
  console.log("Buna ziua")
} else {
  console.log("Buna seara")
}

// FOR statement
for (var i = 0; i <= 10; i++) {
  console.log("Index = ", i);
}
  
for (var i = 1; i <= 5; i++) {
  // console.log("Line = ", i);
  var line = "";
  for (var j = 1; j <= 5; j++) {
  // console.log("Column =", j); 
  line += (i * j) + " ";
  // console.log("Value =", value);
  }
  console.log("LINE ", line);
}

//Homework ex. 1.
var numbers = [];
for (var i = 1; i <= 20; i++) {
  numbers += i + " ";
  }
  console.log("NUMBERS: ", numbers);

//Homework ex. 2.
var odd_numbers = [];
for (var i = 1; i <= 20; i++) {
  if (i%2 !== 0) {
  odd_numbers += i + " ";
  }}
  
  console.log("NUMBERS: ", odd_numbers);

//Homework ex. 3.
var sum_numbers = [3, 8, 9, 25];
var sum = 0;
for (var i = 0; i <= sum_numbers.length-1; i++) {
  sum = sum + sum_numbers[i];
}
console.log("The sum is:", sum);

//Homework ex. 4.
var max_numbers = [3, 8, 9, 25, 4];
var max = 0;
for (var i = 0; i <= max_numbers.length-1; i++) {
  if (max_numbers[i] >= max) {
    max = max_numbers[i];
  }
}
console.log("Max number is:", max);

//Homework ex. 5.

var array = [3, 6, "a", 7, 2, "a", "x", "h"];
var element = "a";
var charApp = 0;
for (var i = 0; i <= array.length-1; i++) {
  if (array[i] === element) {
    charApp = charApp+1;
}}
console.log (element ,"appears", charApp, "times");

//Hands-on
var firstName = "John";
var lastName = "Smith";
var gender = "M"; //M or F
var weight = 130; //kg
var height = 1.6; //m
var BMI = weight / (height * height);

if (BMI<18.5) {
  console.log(firstName, lastName, "|", gender, "|", "BMI:", BMI, "|", "Underweight");
} else if (BMI>=18.5 && BMI<25) {
  console.log(firstName, lastName, "|", gender, "|", "BMI:", BMI, "|", "Normal weight");
} else if (BMI>=25 && BMI<30) {
  console.log(firstName, lastName, "|", gender, "|", "BMI:", BMI, "|", "Overweight");
} else if (BMI>30) {
  console.log(firstName, lastName, "|", gender, "|", "BMI:", BMI, "|", "Obese");
}