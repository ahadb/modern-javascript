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
// => 'foo' 'baz'

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

// e. use from functions, only select from pattern
const foo = () => [1, 2, 3];

const [a, b] = foo();
console.log(a, b);
// => 1 2

// f. destructure nested array
const avengers = [
  'Natasha Romanoff',
  ['Tony Stark', 'James Rhodes'],
  ['Steve Rogers', 'Sam Wilson']
];


const [blackWidow, [ironMan, warMachine], [cap, falcon]] = avengers;

// blackWidow = 'Natasha Romanoff'
// ironMan = 'Tony Stark'
// warMachine = 'James Rhodes'
// cap = 'Steve Rogers'
// falcon = 'Sam Wilson'

warMachine;
//=> outputs 'Sam Wilson'

// g. combine with spread/rest operator (accumulates the rest of the values)
const [a, ...b] = [1, 2, 3];
console.log(a, b);
// => 1 [ 2, 3 ]

// h. advanced, deep arrays
// Advance deep arrays
const [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6

/* (iii). Object Destructuring */

const { num: x } = { num: 5 }; 
console.log(num); //=> outputs 5

// more values
const {prop: x, prop2: y} = {prop: 5, prop2: 10};
console.log(x, y);
// => 5 10

// short-hand syntax
const { prop, prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5 10

// Equal to:
const { prop: prop, prop2: prop2} = {prop: 5, prop2: 10};
console.log(prop, prop2);
// => 5 10

// Deep objects
const {
  prop: x,
  prop2: {
    prop2: {
      nested: [ , , b]
    }
  }
} = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"]}}};
console.log(x, b);
// => Hello c
