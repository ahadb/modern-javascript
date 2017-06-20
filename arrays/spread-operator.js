/**
 * CH. 03 - Arrays
 * Spread Operator
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/* (i). The spread syntax allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements 
 * (for array literals) or multiple variables (for destructuring assignment) are expected. As usual, let's clear this concept up with
 * plenty of examples
 */

// a. Replacement to apply() when calling functions
function myStuff(a, b, c) { }
const args = [0, 1, 2];

// call the function, passing args
doStuff.apply(null, args);

// three dots, changing your world!
doStuff(...args);

// b. Array combination
const oneToFive = [1, 2, 3, 4, 5];
const oneToTen = [...oneToFive, 6, 7, 8, 9, 10];

// basic array methods and ...
const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
arr1.push(...arr2);
// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
