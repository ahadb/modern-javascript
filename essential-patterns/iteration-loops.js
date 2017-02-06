/**
 * Iteration Statements / Loops
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 *
 * @copyright 2016 Ahad Bokhari
 * license: MIT
 */

/* Note: There are numerous different types of loops, yet they all basically do one
 * thing - they repeat an action x number of times. Iterating over items in a collection
 * is a very common operation and we can do so from simple `for` loops to more functional approach using `map` and `filter`.
 */

/* (i). A `for loop` repeats until a specified condition evaluates to false. The
 * syntax includes the following:
 * 1a: initialization - typically used to initialize a counter variable
 * 1b: condition - expression to be evaluated before each loop iteration
 * 1c: final expression - expression to be evaluated at the end of each loop iteration
 * 1d: statement: statement to execute as long as the condition is truthy
 */

for (let i = 0; i < 5; i++) {
  console.log(i);
    // statements
}

// => 0, 1, 2, 3, 4

// b. little more involved, loop through inputs in form and find empty input

const elements = document.getElementsByTagName("input");
for (let i = 0; i < elements.length; i++) {
  if(elements[i].value == "")
    alert('empty');
      // ..do something
}

// c. the best way to loop through an array is using the `for loop` not `for-in`
// as we don't want to enumerate over props previously associated to the Object

const myArray = ["xx", "zz"];
Object.prototype.newMethod = "cc";

// our humble for loop
for (var i=0; i < myArray.length; i++) {
  console.log(myArray[i]); // => "aa", "bb"
}

/* (ii). A for-in statement loops through the props of an enumerable object
 * The block of code inside the loop will be executed once for each property,
 * but bear in mind that it will iterated inherited enumerable props via the
 * property chain.
 */

const obj = {
  name: 'Ahad',
  age: 22,
  occupation: 'developer'
};

for (let i in obj) {
  // ...use with object.hasOwnProperty
  if (obj.hasOwnProperty(prop)) {
    // ...do something
  }

}

// b. one construct can be different from the other. For example:

let a = []; // create a new empty array.
a[5] = 5;   // perfectly legal JavaScript that resizes the array.

for (let i = 0; i < a.length; i++) {
  // Iterate over numeric indexes from 0 to 5, as everyone expects.
  console.log(a[i]);
}

/* ==>:
 undefined
 undefined
 undefined
 undefined
 5
 */

// c. now with the same construct using for in:

var a = [];
a[5] = 5;
for (var x in a) {
  // shows only the explicitly set index of "5", and ignores 0-4
  console.log(x);
}

/* Will display:
 5
 */

// d. order is not preserved as well as inherited properties will also be
// enumerated

Array.prototype.last = function () { return this[this.length-1]; };

for (var p in []) {
  // ...an empty array
  // ...last will be enumerated
}

/* `for of` */

/* `do while` */

/* while */
