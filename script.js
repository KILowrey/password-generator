// Assignment Code
var generateBtn = document.querySelector("#generate");

// ARRAYS

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // 26 long. 0-25.
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // 26 long. 0-25.
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // 10 long. 0-9
var special = ['!', '?', '#', '$', '%', '&', '(', ')', '*', '+', '-', '=', ',', '.', '/', ':', ';', '<', '>', '@', '[', ']', '^', '{', '}', '~'] // 26 long. 0-25

// USER INTERACTION

// introduction to the generater
alert("Welcome to the Password Generater!");
alert("Please follow the instructions to set the paramaters for the generater");
alert("If you make a mistake, you can reset the page");

// instructions for picking the length
alert("FIRST: Please pick a number between 8 and 128");

// add validation check with an alert that loops you back to this question if you didn't follow the instructions
prompt("How many characters do you want your password to be?");

// instructions for character paramaters
alert('NOW: select OK for Yes and Cancel for No');

confirm('Do you need lowercase letters?');

confirm('Do you need uppercase letters?');

confirm('Do you need numbers?');

confirm('Do you need special characters?');

// end of "alerts" for all paramaters

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
