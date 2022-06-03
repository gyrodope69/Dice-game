/*for Dice 1 */
var randomNumber1 = Math.random() * 6 + 1;
randomNumber1 = Math.floor(randomNumber1); // generarting random dice numbers
var randomDiceimage1 = "images/dice" + randomNumber1 + ".png"; // string contains random dice images
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceimage1);


/* for Dice 2*/
var randomNumber2 = Math.floor(Math.random() * 6 + 1); // generarting random dice number for dice 2

var randomDiceimage2 = "images/dice" + randomNumber2 + ".png"; // generarting random dice image
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceimage2); // manipulating the image

/* for dcission making*/
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins🚩";
}

else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}

else
{
    document.querySelector("h1").innerHTML = "Draw! 🏳";
}