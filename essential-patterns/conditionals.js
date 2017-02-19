/**
 * Conditionals
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 *
 * @copyright 2016 Ahad Bokhari
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
