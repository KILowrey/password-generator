// Assignment Code
var generateBtn = document.querySelector("#generate");

// ARRAYS

const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split(''); // 26 long. 0-25.
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // 26 long. 0-25.
const numbers = '0123456789'.split(''); // 10 long. 0-9.
const special = '!?#$%&()*-=,./:;<>@[]^{}~'.split(''); // 26 long. 0-25.

// USER INTERACTION

// introduction to the generater
alert("Welcome to the Password Generater!");
alert("Please follow the instructions to set the paramaters for the generater");
alert("If you make a mistake, you can reset the page");

// instructions for picking the length
alert("FIRST: Please pick a number between 8 and 128");

// add validation check with an alert that loops you back to this question if you didn't follow the instructions
var pswdLength = prompt("How many characters do you want your password to be?");

// instructions for character paramaters
alert('NOW: select OK for Yes and Cancel for No');

var needLower = confirm('Do you need lowercase letters?');

var needUpper = confirm('Do you need uppercase letters?');

var needNumbers = confirm('Do you need numbers?');

var needSpecial = confirm('Do you need special characters?');

// end of "alerts" for all paramaters

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // puts password we generate into vaiable "password"
  var passwordText = document.querySelector("#password"); // puts the element that has the id "#password" in "passwordText"

  passwordText.value = password; // sets the value of the element to password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// NOTES TO SELF TO HELP OUT LATER

// set it so that if they need lowercase, uppercase, etc. they get at least 2, given that that is the minimum requirement for most websites

/*  if (needUpper === true) {
  *code for drawing from uppercase array*
} */