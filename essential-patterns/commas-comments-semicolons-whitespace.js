/**
 * Commas, Comments, Semicolons & Whitespace
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 *
 * @copyright 2016 Ahad Bokhari
 * license: MIT
 */

/* (i.) Use commas before as the last token before line breaks
 *
 */

// a. for example, this is good practice
const x = {
  firstName: 'Moe',
  lastName: 'Khan',
  age: 25
};

const y = { firstName: 'Ahad', lastName: 'Bokhari', age: 25 };

// b. you can even leave a trailing comma which leads to cleaner git diffs
const z = {
  firstName: 'Moe',
  lastName: 'Khan',
  age: 25,
};

// anti-pattern, don't do this
const y = {
    firstName: 'Moe'
  , lastName: 'Khan'
  , age: 25
};

/* (ii.) It's useful for those reading your code (and perhaps yourself) to see comments. Be
 * clever with the usage of comments, don't clutter code or leave erroneous comments which make
 * programs even harder to read
 */

// a. use /* ... */ for multiline comments
/**
 * Multi-line comments are good to use for
 * text that spans multiple lines
 */
const multiLine = `Text that spans
                   multiple lines`;

// anti-pattern, don't do this

// Multi-line comments are good to use for
// text that spans multiple lines
// @param {Number} id
// @return {Node} node

// b. use `//` for single line comments

// how three dots changed javascript
let cold = ['autumn', 'winter'];
let warm = ['spring', 'summer'];

//construct an array
[...cold, ...warm];

// anti-pattern, don't do this
let cold = ['autumn', 'winter']; // how three dots changed javascript
let warm = ['spring', 'summer'];
[...cold, ...warm]; // construct an array

// c. start comments with a space for readability

// @todo: find and refactor these variables to camelCase (fullName)
const fullname = '';

// anti-pattern, don't do this
//@todo: find and refactor these variables to camelCase

/* (iii.) There is alot of debate around this topic, but you should use semicolons in your code.
 * Ultimately, it's a team / organizational decision and consistency is key
 */

// a. required when two statements are on the same line
for (let i = 0; i < items.length; i++) {
  // ...do stuff...
}

// b. required when separating common statements
let i;
i = 5;
i = i + 1;
i++;
const x = 9;
const fun = function() { console.log(foo) };
console.log("hi");

// c. some places to avoid use of semicolons, usually after closing a `}` bracket

// no semicolons after };
if (condition) { console.log(x) } else { console.log(y) }
for (let value of iterable) { console.log(x) }
while (condition) { console.log(x) }

// d. there are exceptions of course

// although you shouldn't use the do statement, note the semicolon
do { (console.log(x)) } while (condition);

// function expression
const func = function() { console.log(foo) };

// object literal
const x = {
  firstName: 'Moe',
  lastName: 'Khan',
  age: 25
};

// e. use a semicolon to before an IIFE which helps separate when you cat and then minify two self invoking functions
;(function () {
  const magicPower = 'Ray of Light';
  return magicPower;
})();

/* (iv.) Drastically improve readability by using consistent rules in your whitespace which proved significant benefit */

/* 1a. Blank lines improve readability categorized logically related sections of code
 * 2a. Every `,` should be followed by a space or a line break
 * 3a. Each `;` semicolon at the end of a statement should be followed with a line break
 * 4a. Each `;` semicolon in the control part of a `for` statement should be followed with a space
 */

let iterable = [10, 20, 30];

for (let i = 0; i < iterable.length; i++) {
  console.log(i);
}

// b. indent with two spaces
function quuz() {
  const name = '';
}

// c. the word function is always followed with one space
function baz(x) {
  return x;
}

// d. always place one space before the leading brace
function mul(x, y) {
  return x * y;
}

// anti-pattern, don't do this
function mul(){
  return x * y;
}

// e. a blank space should not be used between a function value and it's invoking
// anti-pattern, don't do this
function norf (y) {
  return y;
}

// f. in control statements, place one space before the opening parens (`if`, `while`)
if (Number.MAX_SAFE_INTEGER) {
  // ...do stuff...
}

while (z < 10) {
  n++;
}

// g. @todo: readability and maintainability for lines of code longer than 120 characters

// h. don't add spaces inside your parens or brackets, but add spaces inside curly braces
const bar = { key: 'value' };
const foo = [...baz];
console.log(foo[0]);

// anti-pattern, don't do this
const baz = {key: 'value'};
const norf = [ ...baz ];
console.log( foo[0] );
console.log( foo[ 0 ] );

// i. use indentation for long method chains
var text = g.selectAll("text")
  .data(data);

text.attr("class", "update");
text.enter()
  .append("text")
    .attr("class", "enter")
    .attr("x", function(d, i) { return i * 32; })
    .attr("dy", ".35em")
    .merge(text)
  .text(function(d) {
    return d;
  });

// j. leave a blank line after blocks and before the next statement
const foo = function() {
  let arr = [];
  function baz() {
    console.log(arr + 1);
  }

  return baz();
};

// k. end files with a single newline character
function bar(baz) {
  return baz;
}↵  
