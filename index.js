var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1)+1;
console.log(randomNumber1);

var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";

var leftDiceImage = document.querySelector(".img1");

leftDiceImage.setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2)+1;
console.log(randomNumber2);

var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

var rightDiceImage = document.querySelector(".img2");

rightDiceImage.setAttribute("src", randomDiceImage2);

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins! 🚩";
} else {
    heading.innerHTML = "It's a Draw!";
}