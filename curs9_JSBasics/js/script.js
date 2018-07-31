function myFirstFunction() {
  console.log('My first JS function');
}

//Call function
myFirstFunction();

function myFirstFunctionReturn() {
  return "My first JS function return";
}

var message = myFirstFunctionReturn();
document.write(message);
document.writeln('<strong>' + message + '</strong>');

function displayStars() {
  var line = "";
  for (var i = 0; i < 4; i++) {
      line += "*";
      console.log(line);
  }
}

displayStars();
displayStars();
//Functions with params
function displayStars1(nr) {
  var line = "";
  for (var i = 0; i < nr; i++) {
      line += "*";
      console.log(line);
  }
}

displayStars1(4);
displayStars1(2);
displayStars1(9);


//Function with a default parameter
function displayStars2(nr=4, char = '*') {
  var line = "";
  for (var i = 0; i < nr; i++) {
      line += char;
      console.log(line);
  }
}

displayStars2();
displayStars2();
displayStars2(2);
displayStars2(4, '-');

var fname = "Ana";
var lname = "Pop";

function displayName(fname, lname) {
  console.log(fname + " " + lname);
  fname = "Ion";
  console.log("Inside function fname", fname); //Ion
}

displayName(fname, lname);
console.log("Outside function fname", fname); //Ana

function displayNameObject(person) {
  console.log(person.fname + " " + person.lname);
  person.fname = "Ion";
  console.log("Inside function fname", person.fname); //Ion
}

var person = {fname: "Ana", lname: "Pop"}
displayNameObject(person);
console.log("Outside function fname", person.fname); //Ion
