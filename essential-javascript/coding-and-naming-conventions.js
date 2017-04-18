/**
 * CH. 01 - Essential Patterns
 * Coding & Naming Conventions
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/* (i.) Be courteous to those who read your code and allow for context in your
 * naming - be descriptive and try to avoid one letter names
 */

// be descriptive
function initialize() {
  // ...do stuff...
}

// anti-pattern, don't do this
function i() {
  // ...do stuff...
}

/* (ii.) A few simple rules for naming things that you should try and adhere to */

/*
 * 1a. use upper and lower case letters (A - Z, a - z) and digits (0 - 9) to form names
 * 2a. do not use the underscore, _ or dollar sign, $, and avoid use of international characters
 * 3a. most variables and functions should start with a lower case letter
 * 4a. Constructor functions and Classes should be capitalized
 * 5a. Constructor functions that must be used with the `new` prefix should start with a capital letter
 */
const result = [];
const myErrorClass = document.getElementsByClassName('error');
const setupProxy = function proxy() {
  // ...do stuff...
};

// ES6 Class declaration
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.area = value;
  }
}

let rhombus = new Polygon(100, 100);

// ES5 Constructor function
const Polygon = function Polygon(height, width) {
  this.name = 'Polygon';
  this.height = height;
  this.width = width;
};

Polygon.prototype.getArea = function() {
  return this.height * this.width;
};

Polygon.prototype.setArea = function() {
  this.area = value;
};

let parallelogram = new Polygon(400, 300);

/* (iii.) Variables should be declared before they are used and should be descriptive.
 * preferably variables should be alphabetical order
 */
const age = 0;
const adult = true;
const gender = '';
const isTeenager = !!adult;
const location = {};

/* (iv.) When to use camel vs pascal case */

// Use camelCase only when naming functions, objects, variables and instances
const myObj = {};
const formData = [];
function emptyArray() {
  // ...do stuff...
}
const fluffyWhale = new Mammal();

// anti-pattern, don't do this
const myobj ={};
let formdata-rules = [];
function empty_array() {
  // ...do stuff...
}

/* (v.) Array and Object Literals */

// always use the literal notation {}, [] instead of new Object() or new Array()
let myObj = {};
let myArr = [];
myArr.splice(0, 1);

/* (vi.) Function declarations */

/* 1a. functions should be declared before they are used,
 * 2a. there should be no space between the name of a function and it's invocation left of
 * parens, but one space on the right of parens where indicated to start body {
 * 3a. The body of a function should be indented two spaces
*/
function changeName(oldName, newName) {
  const oldName = document.getElementById('name').value;
  function capitalizeName() {
    return newName = oldName.toUpperCase();
  }
  return capitalizeName()
}

// b. named function expressions read well too
const changeName = function name(oldName, newName) {
  const oldName = document.getElementById('name').value;
  function capitalizeName() {
    return newName = oldName.toUpperCase();
  }
  return capitalizeName()
};

// c. never use new (function constructor) to create a function
const foo = new Function('x', 'y', 'return x / y * 10');

// d. when passing an anonymous function, use the arrow function notation so it executes in the
// context of `this`
[100, 99, 98, 97, 96].filter((ele) => {
  return ele % 2 == 0;
});

// anti-pattern, don't do this
[100, 99, 98, 97, 96].filter(function(ele) {
  return ele % 2 == 0;
});

/* (vii.) Statements */

/* 1a. compound statements should be indented with 2 spaces
 * 2a. the should be space between a keyword followed by parens () - denotes not an invocation
 * 3a. the left curly brace { should be at the end of the line that begins the compound statement
 * 4a. the right curly brace } should end the compound statement
 * 5a. the return value expression must start on the same line as the return keyword
 * 6a. semicolon should be used at teh end of a simple statement
 */
if (foo <= bar) {
  console.log('The message');
}

if (x > y) {
  return true;
} else {
    return false;
}

if (z % 2 == 0) {
  return false;
} else if (z % 2 == 1) {
    return true;
} else {
    return;
}

// b. for statement
for (let i = 0; i < 10; i++ ) {
  if (i < 5) {
    console.log(i);
  }
}

// c. switch statement
switch (constName) {
  case "John":
  case "Moe":
  case "Aisha":
    console.log('Hey');
    break;
  default:
    alert('Default case');
}

// d. while statement
var x = 0;
var y = 0;

while (x < 3) {
  x++;
  y += x;
}

// e. try, catch statement
try {
  if (x == "") {
    throw "is Empty";
  }
  if (isNaN(x)) {
    throw "not a number";
  }
  if (x > 10) {
    throw "too high";
  }
  if (x < 5) {
    throw "too low";
  }
}
catch(err) {
  console.log("Input " + err);
}
