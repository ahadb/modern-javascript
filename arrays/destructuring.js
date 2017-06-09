/**
 * CH. 04 - Core JavaScript Object Creation & Design Patterns
 * Destructuring
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */


/* (i). Destructuring is an easy way of extracting multiple values from data stored in (possibly nested) objects and Arrays. Destructuring is the opposite of data construction. Rather than constructing a new object or array, for example, destructuring takes data from an existing object or array and literally destructs it to extract only the values you’re interested in. */

/* (ii). Examples will help clarify things, let's start out with the some array patterns */

// a.
const actors = ['Robin Willians', 'Salman Khan', 'Charlize Theron', 'Uma Thurman', 'Amy Adams', 'Emily Blunt'];
const [msDoubtfure, sultan, madMax, killBill] = actors;

killBill;
// => outputs: Uma Thurman

// b.
const [foo, baz] = ['foo', 'baz'];
console.log(foo, baz);

// c. extract all but second item
const actors = ['Robin Willians', 'Salman Khan', 'Charlize Theron', 'Uma Thurman', 'Amy Adams', 'Emily Blunt'];
const [msDoubtfure, , madMax, killBill, superman, girlOnTrain] = actors;

// msDoubtfire = 'Robin Williams"
// sultan = undefined
// madMax = 'Charlize Theron'
// killBill = 'Uma Thurman'
// amyAdams = 'Superman'
// girlOnTrain = 'Emily Blunt'

killBill;
// => outputs: Uma Thurman

// d. same as above, omit certain values
const [a, , b] = [1, 2, 3];
console.log(a, b);
//=> 1 3

// e. destructure nested array
const avengers = [
  'Natasha Romanoff',
  ['Tony Stark', 'James Rhodes'],
  ['Steve Rogers', 'Sam Wilson']
];

// Avengers and their partners
const [blackWidow, [ironMan, warMachine], [cap, falcon]] = avengers;

// blackWidow = 'Natasha Romanoff'
// ironMan = 'Tony Stark'
// warMachine = 'James Rhodes'
// cap = 'Steve Rogers'
// falcon = 'Sam Wilson'

// Output warMachine:
warMachine;