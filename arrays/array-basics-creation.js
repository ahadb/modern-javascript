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
let floatingArr = new Array(1.11); // => Uncaught RangeError: Invalid array length
console.log(typeof floatingArr); // => undefined

/* (ii). The preferred method of course is to create an array literal for your friendly list-like
 * object
 */

// a. Create an array using the literal syntax
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
days.length
// find the first element by indexing into Array, arrays are 0 based indexes
const first = days[0];
// find the last element by indexing into Array, arrays are 0 based indexes
const last = days[days.length - 1];

// b. From time to time, you'll want to check if your object is an Array, JS has typing problems.
// You've seen people trip up on this before
typeof null === 'object';
typeof null !== 'null';
// enter Array.isArray
Array.isArray([1, 2, 3]);    // => true
Array.isArray([{foo: 123}]); // => true
Array.isArray({baz: 'foo'});  // => false
Array.isArray('norf');     // => false
Array.isArray(null);    // => false


// c. Now let's go over some basic ES5 array methods(on above array) to get ourselves acquainted.
// Will save looping for another section

// add to front of an Array
const animals = ['Bear', 'Eagle', 'Squirrel'];
animals.unshift('Leopard');
// => ['Leopard' ,'Bear', 'Eagle', 'Squirrel'];

// add to the end of an Array
animals.push['Monkey'];
// => ['Leopard' ,'Bear', 'Eagle', 'Squirrel', 'Monkey'];

// remove from the front of an Array
const firstOfAnimals = animals.shift();
// => ['Bear', 'Eagle', 'Squirrel', 'Monkey'];

// remove from the end of an Array
const lastOfAnimals = animals.shift();
// => ['Bear', 'Eagle', 'Squirrel'];

// find the index of an item in the Array
const position = animals.indexOf('Eagle');
// => 1

// remove an item by index position
const removedItem = animals.splice(position, 1);
// => ['Bear', 'Squirrel'];





