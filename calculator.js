// JavaScript Task Instructions:
// Objective: Implement the JavaScript to make the calculator operational.
// Each button should perform its respective arithmetic operation on the two input numbers and display the result.

// Implement Arithmetic Functions:
// Each arithmetic operation (add, subtract, multiply, divide) should have its own function.

/**
 * Performs addition on two numbers.
 * @param {number} number1 - The first number.
 * @param {number} number2 - The second number.
 * @returns {number} The sum of number1 and number2.
 */
function add(number1, number2) {
    return number1 + number2;
}

/**
 * Performs subtraction on two numbers.
 * @param {number} number1 - The first number.
 * @param {number} number2 - The second number.
 * @returns {number} The difference between number1 and number2.
 */
function subtract(number1, number2) {
    return number1 - number2;
}

/**
 * Performs multiplication on two numbers.
 * @param {number} number1 - The first number.
 * @param {number} number2 - The second number.
 * @returns {number} The product of number1 and number2.
 */
function multiply(number1, number2) {
    return number1 * number2;
}

/**
 * Performs division on two numbers.
 * Includes a check for division by zero.
 * @param {number} number1 - The first number (numerator).
 * @param {number} number2 - The second number (denominator).
 * @returns {number|string} The quotient of number1 and number2, or an error message if dividing by zero.
 */
function divide(number1, number2) {
    if (number2 === 0) {
        // Handle division by zero.
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Helper function to get and parse numbers from the input fields.
// It ensures input values are converted to numbers using parseFloat and provides a default of 0 for empty inputs.
function getNumbers() {
    // Get the value of the first number input field.
    // parseFloat converts the string value to a floating-point number.
    // The || 0 provides a default value of 0 if the input is empty or invalid.
    const number1 = parseFloat(document.getElementById('number1').value) || 0;

    // Get the value of the second number input field, with similar parsing and default.
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    return { number1, number2 }; // Return an object containing both numbers.
}

// Get the element where the calculation result will be displayed.
const calculationResultSpan = document.getElementById('calculation-result');

// Attach Event Listeners:
// For each operation button, add an event listener that calls the corresponding arithmetic function when clicked.
// Use the input values from the number fields as arguments for these functions.
// Display the result in the #calculation-result span.

// Event listener for the addition button
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getNumbers(); // Get both numbers using the helper function
    const result = add(number1, number2); // Perform addition
    calculationResultSpan.textContent = result; // Display the result
});

// Event listener for the subtraction button
document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getNumbers(); // Get both numbers
    const result = subtract(number1, number2); // Perform subtraction
    calculationResultSpan.textContent = result; // Display the result
});

// Event listener for the multiplication button
document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getNumbers(); // Get both numbers
    const result = multiply(number1, number2); // Perform multiplication
    calculationResultSpan.textContent = result; // Display the result
});

// Event listener for the division button
document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getNumbers(); // Get both numbers
    const result = divide(number1, number2); // Perform division (handles division by zero internally)
    calculationResultSpan.textContent = result; // Display the result
});
