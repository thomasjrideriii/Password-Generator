// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables

var lowercaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var uppercaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "~",
  "{",
  "}",
  "[",
  "]",
  "`",
  ",",
  ".",
  "<",
  ">",
  ";",
  ";",
  "=",
  "+",
  "-",
  "_",
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Password Generation Logic

function generatePassword() {
  
  //Password Length input and validation
  var length = parseInt(
    prompt(
      "How long would you like your password to be? \nPlease choose a password length between 8 and 128 characters."
    )
  );

  if (length >= 8 && length <= 128) {

    //Password Content Questions

    var wantsLower = confirm(
      "Would you like to use lowercase letters in your password?"
    );
    var wantsUpper = confirm(
      "Would you like to use uppercase letters in your password?"
    );
    var wantsSpecial = confirm(
      "Would you like to use special characters in your password?"
    );
    var wantsNumber = confirm(
      "Would you like to use numbers in your password?"
    );
    
    //Variables
    var charSet = [];

    var result = "";

    var validPassword = false;
    
    //Array charSet assembly
    if (wantsLower) {
      charSet.push(lowercaseLetters);
    }

    if (wantsUpper) {
      charSet.push(uppercaseLetters);
    }

    if (wantsSpecial) {
      charSet.push(specialCharacters);
    }

    if (wantsNumber) {
      charSet.push(numbers);
    }

    //Loop will run until a valid password is created.
    while (validPassword === false) {

      var lowerVer = true;
      var upperVer = true;
      var specialVer = true;
      var numberVer = true;

      // Password Generation Loop
      for (var i = 0; i < length; i++) {
        var randomArray = charSet[Math.floor(Math.random() * charSet.length)];
        var randomChar =
          randomArray[Math.floor(Math.random() * randomArray.length)];

        result += randomChar;

      }

      //Created Password goes through verification process.
      //Attempted function form of verification - Functional!

      function characterVerification(wants, verification, characterSet) {
        if (wants) {
          verification = false;
          for (var j = 0; j < length; j++) {
            if (characterSet.includes(result[j])) {
              verification = true;
              console.log("Verified!" + characterSet);
            }
          }
        }
      }

      characterVerification(wantsLower, lowerVer, lowercaseLetters);
      characterVerification(wantsUpper, upperVer, uppercaseLetters);
      characterVerification(wantsSpecial, specialVer, specialCharacters);
      characterVerification(wantsNumber, numberVer, numbers);

      if (lowerVer && upperVer && specialVer && numberVer) {
        validPassword = true;
      }
    }

    //Stand-in for printing out password after verification.
    console.log("Password: " + result);

  } else {
    alert("Please select a number between 8 and 128.");
  }

  //Outputing the password from the function
  return(result);
}

// Write password to the #password input
function writePassword() {
  console.log("button pressed!");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
