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
alert("If you want to reset your paramaters, you can reload the page");

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

//Finally, we generate the password
function generatePassword() {

  // set the empty array of the characters in the password
  let password = [];

  // if we needLower, we add 2 random characters from the lowercase array to the password
  if(needLower) {
    for(let i = 0; i < 2; i++) {
      password.push(lowercase[Math.floor(Math.random()*lowercase.length)]);
    }
  }
  // if we needUpper, we add 2 random characters from the uppercase array to the password
  if(needUpper) {
    for(let i = 0; i < 2; i++) {
      password.push(uppercase[Math.floor(Math.random()*uppercase.length)]);
    }
  }
  // if we needNumbers, we add 2 random characters from the numbers array to the password
  if(needNumbers) {
    for(let i = 0; i < 2; i++) {
      password.push(numbers[Math.floor(Math.random()*numbers.length)]);
    }
  }
  // if we needSpecial, we add 2 random characters from the special characters array to the password
  if(needSpecial) {
    for(let i = 0; i < 2; i++) {
      password.push(special[Math.floor(Math.random()*special.length)]);
    }
  }

  // if the user set their choice of password length the more than 8, then we create an array of additonal characters to pull from.
  if(pswdLength > 8) {

    // create the empty array of addCharacters
    let addCharacters = [];

    // if user needs lowercase, add lowercase letters to the array
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

    // while the length of the password array is less than the number entered by the user, we push a random character from addCharacters to the password
    while(password.length < pswdLength) {
      password.push(addCharacters[Math.floor(Math.random()*addCharacters.length)]);
    }
  } // end of the additional characters code

  // shuffle the password using the Knuth-shuffle
  shuffle(password);
  // turn the password into a string
  password = password.join("");
  // log the final password
  console.log('final password: ' + password)

  // make password be the value of the function
  return password;

} // end of function generatePassword

// the Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Write password to the #password input (writes our password on the page)
function writePassword() {
  var password = generatePassword(); // puts password we generate into variable "password"
  var passwordText = document.querySelector("#password"); // puts the element that has the id "#password" in "passwordText"

  passwordText.value = password; // sets the value of the element to password

} // end of function writePassword

// Add event listener to generate button (writes the password when we click the button)
generateBtn.addEventListener("click", writePassword);
