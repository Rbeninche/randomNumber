var input1 = prompt("Please enter a number:");
var minNumber = parseInt(input1); //Lowest possible number
var input = prompt("Please enter another number");
var maxNumber = parseInt(input); //Highest possible number


//Generate a random number that is between the two numbers picked by the user

var randomNumber = Math.floor(Math.random() * maxNumber - minNumber + 1) + minNumber;

var message = "<p>" + randomNumber + " is a number between " + minNumber + " and " + maxNumber + ".</p>";
document.write(message);

