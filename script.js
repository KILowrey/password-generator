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

// function for the array to pick all of the additional characters out of after the first 8 (if there are more than 8)
function generateMoreCharacters() {
  // create the empty array of addCharacters
  let addCharacters = [].split('');
  // if user needs lowercase, add lowercase letters to the more character array
  if (needLower) {
    addCharacters = addCharacters.concat(lowercase);
  }
  // if user needs uppercase, add uppercase letter to the array
  if (needUpper) {
    addCharacters = addCharacters.concat(uppercase);
  }
  // if user needs numbers, add numbers to the array
  if (needNumbers) {
    addCharacters = addCharacters.concat(numbers);
  }
  // if user needs special characters, add specail characters to the array
  if (needSpecial) {
    addCharacters = addCharacters.concat(special);
  }
  // do I need to do a final thing to make sure that addCharacters is complete and valid?
} //end of function generateMoreCharacters

//Finally, we generate the password
function generatePassword() {
  // set the empty array of the characters in the password
  let password = [];
  // if we needLower, we add 2 random characters from the lowercase array to the password
  if(needLower) {
    for(let i = 0; i < 2; i++) {
      password.push('randomCharacter');
    }
  }
  // if we needUpper, we add 2 random characters from the uppercase array to the password
  if(needUpper) {
    for(let i = 0; i < 2; i++) {
      password.push('randomCharacter');
    }
  }
  // if we needNumbers, we add 2 random characters from the numbers array to the password
  if(needNumbers) {
    for(let i = 0; i < 2; i++) {
      password.push('randomCharacter');
    }
  }
  // if we needSpecial, we add 2 random characters from the special characters array to the password
  if(needSpecial) {
    for(let i = 0; i < 2; i++) {
      password.push('randomCharacter');
    }
  }

  // if the user set their choise of password length the more than 8, generateMoreCharacters array
  if(pswdLength > 8) {
    generateMoreCharacters(); // I'm not sure if this will work or not. I'm trying to call the function of generateMoreCharacters so that I can addCharacters
  }

  // for as long as password.length is less than the set pswdLength, we generateMoreCharacters (only once) and then we add a random character from the addCharacters array until password.length is = to pswdLength

  // once password.length is equal to pswdLength, scramble the password. then you are done generating.

} // end of function generatePassword

// Write password to the #password input (writes our password on the page)
function writePassword() {
  var password = generatePassword(); // puts password we generate into variable "password"
  var passwordText = document.querySelector("#password"); // puts the element that has the id "#password" in "passwordText"

  passwordText.value = password; // sets the value of the element to password

} // end of function writePassword

// Add event listener to generate button (writes the password when we click the button)
generateBtn.addEventListener("click", writePassword);
