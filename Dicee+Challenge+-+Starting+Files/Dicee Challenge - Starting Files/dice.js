//javascript code
var randomNumber1 = Math.floor(Math.random() * 6) +1;// 1-6
//for the first image
var randomImage1 = "dice" + randomNumber1 + ".png";
//getting the actual image source
var randomSource = "images/" + randomImage1;
// calling for the effect on image 1
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomSource);
//for the second case
var randomNumber2 = Math.floor(Math.random() * 6) +1;
//for image 2
var randomImage2 = "dice" + randomNumber2 + ".png";
//getting the actual source
var randomSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomSource2);
//changing the h1 element
//calling in the functions to execute the code
if (randomSource > randomSource2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomSource2 > randomSource){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}







