// Assignment Code
var generateBtn = document.querySelector("#generate");

// ARRAYS FOR ALL CHARACTER PARAMATERS
const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split(''); // 26 long. 0-25.
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // 26 long. 0-25.
const numbers = '0123456789'.split(''); // 10 long. 0-9.
const special = '!?#$%&()*-=,./:;<>@[]^{}~'.split(''); // 26 long. 0-25.

// USER INTERACTION

// introduction to the generater
alert("Welcome to the Password Generater!");
alert("Please follow the instructions to set the paramaters for the generater");

// instructions for picking the length
alert("FIRST: Pick a number between 8 and 128");
// Picking the length. Sets pswdLength to what the user Inputs
let pswdLength = parseInt(prompt('How long do you want your Password to be?'));
// UNLESS they pick something less than 8 of more than 128, in which case they are prompted to pick again
while(pswdLength < 8 || pswdLength > 128 || isNaN(pswdLength)) {
  pswdLength = prompt('Please pick an integar from 8 to 128');
}
console.log('Password Length is ' + pswdLength);

// instructions for character paramaters
alert('NOW: select OK for Yes and Cancel for No');
// true/falses for all of the arrays
let needLower = confirm('Do you need lowercase letters?');
console.log('Use Lowercase?: ' + needLower);
let needUpper = confirm('Do you need uppercase letters?');
console.log('Use Uppercase?: ' + needUpper);
let needNumbers = confirm('Do you need numbers?');
console.log('Use Numbers?: ' + needNumbers);
let needSpecial = confirm('Do you need special characters?');
console.log('Use Special Characters?: ' + needSpecial);
// end of prompts and confirms for all paramaters

//Finally, generate the password
function generatePassword() {
  /*insert code for generating password here*/
}

// Write password to the #password input (writes our password on the page)
function writePassword() {
  var password = generatePassword(); // puts password we generate into variable "password"
  var passwordText = document.querySelector("#password"); // puts the element that has the id "#password" in "passwordText"

  passwordText.value = password; // sets the value of the element to password

}

// Add event listener to generate button (writes the password when we click the button)
generateBtn.addEventListener("click", writePassword);


// NOTES TO SELF TO HELP OUT LATER

// set it so that if they need lowercase, uppercase, etc. they get at least 2, given that that is the minimum requirement for most websites

/*  if (needUpper === true) {
  *code for drawing from uppercase array*
} */

// there /is/ a way to scramble a string/array.
// I think i will generate 2 of each, one of each as needed, and then scramble

/* I think the way I will draw is, IF need___ true, draw 2...
  and than I draw one of each for all true arrays in order until i reach the number I need
  THEN i scramble them */