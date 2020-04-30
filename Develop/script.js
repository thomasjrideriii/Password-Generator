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
  var length = parseInt(
    prompt(
      "How long would you like your password to be? \nPlease choose a password length between 8 and 128 characters."
    )
  );

  if (length >= 8 && length <= 128) {
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

    var charSet = [];

    var result = "";

    var validPassword = false;

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

      // Logic needed here to check for valid password, looped until a valid password is generated.
      // Verifies, if lowercase letters were used, that there is at least one lowercase letter in the password.
      if (wantsLower) {
        lowerVer = false;
        for (var j = 0; j < length; j++) {
          if (lowercaseLetters.includes(result[j])) {
            lowerVer = true;
          }
        }
      }

      if (wantsUpper) {
        upperVer = false;
        for (var k = 0; k < length; k++) {
          if (uppercaseLetters.includes(result[k])) {
            upperVer = true;
          }
        }
      }

      if (wantsSpecial) {
        specialVer = false;
        for (var l = 0; l < length; l++) {
          if (specialCharacters.includes(result[l])) {
            specialVer = true;
          }
        }
      }

      if (wantsNumber) {
        numberVer = false;
        for (var m = 0; m < length; m++) {
          if (numbers.includes(result[m])) {
            numberVer = true;
          }
        }
      }

      if (lowerVer && upperVer && specialVer && numberVer) {
        validPassword = true;
      }
    }

    //Stand-in for printing out password, checking for valid password
    console.log("Password: " + result);
  } else {
    alert("Please select a number between 8 and 128.");
  }
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
