// UR MISSION...........

//   Write JavaScript functions that perform the following tasks.

//   1. document.write() the characters of any string in reverse order.
//   2. document.write() the characters of any string in alphabetical order.
//   3. document.write() true, or false, if the passed string is a palidrome.

/*  Note: document.write() is a fast way to put content into the DOM 
  without the need for a getElementById() and innerHTML.
*/

// function reversal(origString) {
	
// }

// function alphabits() {

// }

// function palindrome() {

// }

// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);

// ----------------------------------------------------------------------------------------

// function reversal(origString) {
//   var reversedString = origString.split("").reverse().join("");
//   document.write(reversedString);

  
//   return reversedString;
// }

// function alphabits(origString) {
//   document.write("<div>" + origString.split("").sort().join("") + "</div>");
// }

// function palindrome(origString) {
//   var newString = origString.replace(/[\s,]/g, "").toLowerCase();
//   var reversedNewString = reversal(newString);

//   if (newString === reversedNewString) {
//     document.write("<div>\"" + origString + "\" is a palidrome</div>");
    
//   } else {
//     document.write("<div>\"" + origString + "\" is not a palindrome</div>");
    
//   }
// }


// var testString = "A car, a man, a maraca";

// reversal(testString);
// alphabits(testString);
// palindrome(testString);


// ----------------------------------------------------------------------------------------

// var Car = {
// 	make: "Nissan",
// 	wheels: 4,
// 	model: "Xterra",
// 	options: {
// 		ac: true,
// 		bulletProof: false,
// 		underLighting: false,
// 		spinners: true
// 	}
// };

// console.log(Car.options.spinners)

// ----------------------------------------------------------------------------------------

// function add(aardvark, monkey) {
// 	console.log(aardvark, monkey);

// 	return aardvark + monkey;
// }
// // var result = add(1, 2);

// function subtract(one, two) {
// 	return one - two;
// }
// var result = add(1, subtract);

/*Arguments get their value from what you pass through it, ex. add(1, 2);*/

// var globalVar = 90;

// function add(aardvark, monkey) {
// 	return monkey(aardvark, 3);
// }

// function subtract(one, two) {
// 	return one - two;
// }

// var result = add(1, subtract);
// console.log("result", result);

/*The function won't return until you tell it to*/


// ----------------------------------------------------------------------------------------

// function add(aardvark, monkey) {
// 	return aardvark + monkey;
// }

// function subtract(one, two) {
// 	return one - two;
// }

// function divide(one, two) {
// 	return one / two;
// }

// var result1 = add(1, 2);
// var result2 = subtract(10, 2);
// var result3 = divide(10, 2);
// console.log(result1, result2, result3);

/*result1 = 3, result2 = 8, result3 = 5
paramaters and arguments are interchangeable words for the same thing*/

// ----------------------------------------------------------------------------------------

var planets =["mercury", "venus", "earth", "mars", "jupiter", ]


















































