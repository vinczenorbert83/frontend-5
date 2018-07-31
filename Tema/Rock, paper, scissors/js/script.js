function play() {
  var arr = ["rock", "paper", "scissors"]
  var computer = arr[Math.floor(Math.random()*arr.length)];
  var user = arr[Math.floor(Math.random()*arr.length)];
  console.log("Computer =", computer);
  console.log("User =", user);
  if (computer == user) {
    console.log("Draw, play again");
  } else if ((computer == "rock" && user == "paper") || (computer == "paper" && user == "scissors" ) || (computer == "scissors" && user == "rock")){
    console.log("User wins");
  } else console.log("Computer wins")
 }