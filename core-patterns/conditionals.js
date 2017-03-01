/**
 * CH. 01 - Essential Patterns
 * Conditionals
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/* (i). Conditionals control behavior in JavaScript and determine whether or not pieces of code can run. They execute or skip other statements        * depending on the value of a specified expressions.
 */

// a. The most basic conditional is the if / else statement. The statement has two different forms, the first being:

if (expression) {
  // if the expression is truthy the statement is executed
  ...statement
}

// b. A single statement is required after the if keyword and parenthesized expression, however you can also use multiple statements within a
// block

if (!user) {
  name = '';
  address = '';
  language = 'JavaScript';
}

// c. The second form executes if the expression is false and introduces an else clause to defer the control to

if (expression) {
  ...statement1
} else {
  ...statement2
}

// d. Follow the example below

if (n > 1) {
  console.log('You have 1 new notification');
} else {
  console.log('You have ' + n + ' new messages');
}

// e. Beware nested if statements with else clauses, use cauton that the else clause goes where it is appropriately needed

const i = 1;
const k = 2;

if (i == 1) {
  if (k === 2) {
    console.log('k equals 2');
    // a good rule is the else clause is part of the nearest if statement
  } else {
    console.log('k does not equal 2');
  }
}

/* The else / if statement statement is used when you need to execute many pieces of code. There is no else if in JavaScript,
 * but it is a frequently used programming idiom
 */

// a. Familiarize yourself with the structure

if (expression) {
  // ...execute code block #1
}
else if (expression) {
  // ...execute code block #2
}
else if (expression) {
  // ...execute code block #3
}
else {
  // ...if all else fails, execute block #4
}

// b. else ...if without the placeholders, in the real world

if (quux === 1) {
  // ...execute code block #1
} else if (quux === 2) {
  // ...execute code block #2
} else if (quux === 3) {
  // ...execute code block #3
} else {
  // ...if all else fails, execute block #4
}

// c. the above else ..if idiom is much preferable and readble to this

if (quux === 1) {
// Execute code block #1
}
else {
  if (quux === 2) {
  // Execute code block #2
  }
  else {
    if (quux === 3) {
    // Execute code block #3
    }
    else {
    // If all else fails, execute block #4
    }
  }
}

/* The switch statement simplifies both the appearance and the performance of multiple conditions. You can rewrite the previous example using a
 * switch statement as follows:
 */

// a. Familiarize yourself with the structure

switch(quux) {
  case 1: // Start here if foo == 1
  // Execute code block #1.
    break;
  // Stop here
  case 2: // Start here if foo == 2
  // Execute code block #2.
    break; // Stop here
  case 3: // Start here if foo == 3
  // Execute code block #3.
    break; // Stop here
  default: // If all else fails...
  // Execute code block #4.
    break; // stop here
}

// b. A simple example

function convert(x) {
  switch(typeof x) {
    case 'number': // Convert the number to a hexadecimal integer
      return x.toString(16);
    case 'string': // Return the string enclosed in quotes
      return '"' + x + '"';
    default: // Convert any other type in the usual way
      return String(x);
  }
}