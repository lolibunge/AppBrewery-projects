var randomDice1 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = Math.floor(Math.random() * 6) + 1;

var imgDice1 = document.querySelector("#player1 img");
var imgDice2 = document.querySelector("#player2 img");
imgDice1.setAttribute("src","./assets/images/dice"+randomDice1+".png");
imgDice2.setAttribute("src","./assets/images/dice"+randomDice2+".png");

var winnerAnnouncement =  document.querySelector(".title");

console.log("Player 1: "+randomDice1+" || Player 2: "+randomDice2);
if(randomDice1 > randomDice2){
  console.log("Player 1 Wins!!");
  winnerAnnouncement.textContent = "Player 1 Wins!!";
  winnerAnnouncement.style.color = "orange";
}else if(randomDice1 === randomDice2){
  console.log("Draw!");
  winnerAnnouncement.textContent = "Draw!";
  winnerAnnouncement.style.color = "brown";
}else{
  console.log("Player 2 Wins!!");
  winnerAnnouncement.textContent = "Player 2 Wins!!";
  winnerAnnouncement.style.color = "purple";
}
