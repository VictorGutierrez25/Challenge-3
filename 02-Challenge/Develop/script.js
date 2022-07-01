// // variables for the length of the password
// var length;
// var minLenght = 8;
// var maxlength = 128;

// character variable arrays
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numbers =["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// empty variable to store the choices from the user
var choiceArr = [];



// Assignment Code
var generateBtn = document.querySelector("#generate");




function  generatePassword() {
  // this is were we create the first prompt to the user to figure out password length
  var userInput = window.prompt("how many characters would you like your password to be?");
  // we need to use parseint because we need to convert the string the userInput gave us to a interger so js can do calculations easier.
  var passwordLength = parseInt(userInput);
      // console.log(passwordLength) 
// if statements to make sure user stays within the criteria 
  if (isNaN(passwordLength)){
    window.alert("this is not a valid number. please try again!")
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("number of charater selected is either too small or too big. please select between 8 and 128 characters. ")
    return;
  }

  // this section is to have the user confirm what criteria they want their password to meet
  var userUpper = window.confirm( "would you like any uppercase letters?");
  var userLower = window.confirm( "would you like any lowercase letters?");
  var userNumbers = window.confirm( "would you like any numbers?");
  var userSymbols = window.confirm ("would you like any special symbols?");

  if (userUpper === true) {
     choiceArr.push(upper)
  }

  if (userLower === true) {
    choiceArr.push(lower)
  }

  if (userNumbers === true) {
    choiceArr.push(numbers)
  }

  if (userSymbols === true) {
    choiceArr.push(symbols);
  }

  

  // create a new blank variable we can start creating random password in
  
  // var newPass;
}

var newPass = "";

function randomItem(choiceArr){
  for (var i = 0; i < passwordLength; i++){
    newPass.push(choiceArr[Math.floor(Math.random() * choiceArr.length)])
  }
  return newPass;
}
console.log(newPass);
  


 
// console.log(choiceArr);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  // function generatepassword

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatepassword() {



// // create a prompt for ; length (should have 8-128)
// // confirm- lowerCase. upperCase, numeric, specialCharacters
//   // let numbers = confirm("do you want numbers");
//   // consol.log(numbers);
//   // let lowerCase = (confirm "do you want lower case letters?");
//   // consol.log(lowerCase) ;
//   // let upperCase = = confirm( do you want upper case letters?);
//   // consol.log(upperCase);
// // create var to hold answer to prompt/ confirm
// // function to validate user answers
// // if and equality operators
//   // if(numbers){
//     // true they want numbers create a random generator for the number variable
//   // } else if { if they dont move one to the next prompt}
// // list of numbers special characters etc
//     // arrays
//     // math.random to select random character from an array.
//     // random choose characters
//     // create a string equal to password var 
// // generate random password
// // return the password

// return password;
// }

