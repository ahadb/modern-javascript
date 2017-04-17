/**
 * CH. 04 - Core JavaScript Object Creation & Design Patterns
 * Array Creation
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */


/* (i). There are two ways to create arrays in JavaScript, one using the new keyword and the other
 * defining an array literal (the latter being much more popular, I advise to use that technique to
 * avoid passing a possible trap the from new Array() constructor has for you. Nevertheless, let's
 * take a peek at this lesser used technique.
 */

// a. Newing up an array
let a = new Array(5);
console.log(a.length); // => 5
console.log(a[0]); // => undefined
a; // => [undefined x 5]

// b. Problems with new and floating point numbers
let floatingArr = new Array(1.11);
// => Uncaught RangeError: Invalid array length



