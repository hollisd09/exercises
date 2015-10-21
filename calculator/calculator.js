
var addition = document.getElementById("add");
	addition.addEventListener("click", add);

var subtraction = document.getElementById("subtract");
	subtraction.addEventListener("click", subtract);

var multiplication = document.getElementById("multiply");
	multiplication.addEventListener("click", multiply);

var division = document.getElementById("divide");
	division.addEventListener("click", divide);

var firstNumber = document.getElementById("first-number");
// 	// firstNumber.addEventListener("keypress", firstNumber);

var secondNumber = document.getElementById("second-number");
	// secondNumber.addEventListener("keypress", secondNumber);




/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply (firstNumber, secondNumber) {
	return firstNumber * secondNumber;
}



/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add (firstNumber, secondNumber) {
	return firstNumber + secondNumber;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract (firstNumber, secondNumber) {
	return firstNumber - secondNumber;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide (firstNumber, secondNumber) {
	return firstNumber / secondNumber;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them
  Return the value of the operation.
 */
function performCalculation(firstNumber, secondNumber, operation) {
	return operation(firstNumber, secondNumber);
}

document.getElementById("add")
	.addEventListener("click", function(event) {
		var firstNumber = parseInt(document.getElementById("first-number").value);
		var secondNumber = parseInt(document.getElementById("second-number").value);
		var result = performCalculation(firstNumber, secondNumber, add);
		document.getElementById("results").innerHTML = result;
	});


document.getElementById("subtract")
	.addEventListener("click", function(event) {
		var firstNumber = parseInt(document.getElementById("first-number").value);
		var secondNumber = parseInt(document.getElementById("second-number").value);
		var result = performCalculation(firstNumber, secondNumber, subtract);
		document.getElementById("results").innerHTML = result;
	});


document.getElementById("multiply")
	.addEventListener("click", function(event) {
		var firstNumber = parseInt(document.getElementById("first-number").value);
		var secondNumber = parseInt(document.getElementById("second-number").value);
		var result = performCalculation(firstNumber, secondNumber, multiply);
		document.getElementById("results").innerHTML = result;
	});



document.getElementById("divide")
	.addEventListener("click", function(event) {
		var firstNumber = parseInt(document.getElementById("first-number").value);
		var secondNumber = parseInt(document.getElementById("second-number").value);
		var result = performCalculation(firstNumber, secondNumber, divide);
		document.getElementById("results").innerHTML = result;
	});










