// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables

// insert rules for all of the number stuff

var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; // 26 long. 0-25.
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // 26 long. 0-25.
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // 10 long. 0-9
var special = ['!', '?', '#', '$', '%', '&', '(', ')', '*', '+', '-', '=', ',', '.', '/', ':', ';', '<', '>', '@', '[', ']', '^', '{', '}', '~'] // 26 long. 0-25

// "Alerts" for all paramaters

alert("Welcome to the Password Generater!");

alert("*insert instructions here*");

// change to a prompts with a validation check later
alert("How many characters do you want your password to be?");

// change to a prompt or confirm with a validation check later
alert('Do you need lowercase letters?');

// change to a prompt or confirm with a validation check later
alert('Do you need uppercase letters?');

// change to a prompt or confirm with a validation chack later
alert('Do you need numbers?');

// change to a prompt or confirm with a validation check later
alert('Do you need special characters?');

// end of "alerts" for all paramaters

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
