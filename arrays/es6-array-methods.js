/**
 * CH. 04 - Core JavaScript Object Creation & Design Patterns
 * ES6 Array Methods
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/* (i). ES6 brings with different methods that help your workflow. Over the years libraries like Underscore and then Lodash have polyfilled the features
 * lacking in the language, but now we have many more tools for the functional array.
 */

/* Array.from: long overdue method - Creates a new Array instance from an array-like or iterable object */

// a. array from string
Array.from('string');
// => ["s", "t", "r", "i", "n", "g"]

// b. array from Map
const arrayFromMap = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(arrayFromMap); 
// => [[1, 2], [2, 4], [4, 8]]

// c. array from Set
const s = new Set(['foo', 'bar', 'baz', 'norf', 'quux', 1, null, undefined]);
const arrFromSet = Array.from(s);
// => (8) ["foo", "bar", "baz", "norf", "quux", 1, null, undefined]

/* b. Array.entries */
let a = ['a', 'b', 'c'];
let iterator = a.entries();

console.log(iterator.next().value); // [0, 'a']
console.log(iterator.next().value); // [1, 'b']
console.log(iterator.next().value); // [2, 'c']

/* Array.fill() */
let numbers = [1, 2, 3]
numbers.fill(1);
// => results in [1, 1, 1]

/* d. find() */
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) { 
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); 
// => { name: 'cherries', quantity: 5 }

// e. findIndex()

// f. keys()

// g. values()
