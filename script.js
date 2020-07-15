// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

