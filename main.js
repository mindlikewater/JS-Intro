// *=========================================================
//     Part 1: Variables

// var givenName;
// Q: What does `givenName` equal right now?
//A: undefined

// givenName = "Brit";
// Q: What is `givenName` set to right now?
// A: "Brit"

// givenName = givenName;
// Q: What is `givenName` set to right now?
// A: "Brit"

// var greeting = "Hello, how are you? " + givenName;
// Q: What is `greeting` set to?
// A: "Hello, how are you? Brit"

// =========================================================
//      Part 2: Simple Math

// var high = 50;
// var low  = 10;
//
//
// var math = high - low;
// Q: What is `math` set to?
// A: 40

// math = high - "5";
// Q: What is `math` set to?
// A: 45


/* =========================================================
     Part 3: Expressions - You Write Code!
*/

// Create a variable to calculate Brit's age
// The answer should read "Brit is 33 years old"
// The answer should not be written in a comment.
var born = 1983;
var today = 2016;

// Answers Below:

  var age = today - born;
  britAge = "Brit is " + age + " years old";
  console.log(britAge);

// Store some information following in variables.
var yourName;
var instructorName;

yourName = "student";
instructorName = "instructor";

// Update the variables above so the expression reads correctly.
// Answers Below:

yourName = "Tai";
instructorName = "Brit";

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard. Their instructor's name is " + instructorName + ".";

// Hard(ish) Mode: Write a function that takes three parameters: x, y, and z, and returns the sum of the squares of the two largest numbers.
var sumBiggerSquares = function(x,y,z) {
  if (x<y && x<z) {
    return (y*y + z*z);
  }
  else if (y<x && y<z){
    return (x*x + z*z);
  }
  else {
    return (y*y + z*z);
  }
};

sumBiggerSquares(2,3,5);  //test the function
