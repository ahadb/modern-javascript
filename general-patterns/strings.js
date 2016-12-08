/**
 * Strings
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 *
 * @copyright 2016 Ahad Bokhari
 * license: MIT
 */

/* (i.) Use single quotes for strings
 *
 */

// a. this is good practice
const foo = 'I am a string';

// b. anti-pattern, don't do this
const bar = "I am string";

// c. anti-pattern, don't use template literal syntax to construct
// simple single line strings
const norf = `I am a string`;

/* (ii.) Best practices when dealing with longer strings
 *
 */
// a. a string with less than 100 chars
const baz = 'This is a string with less than 100 characters and should be written on 1 line without breaks';

// b. a string with over 100 characters should not include new line breaks nor concatenation syntax
const str = 'This is a string with more than 100 characters and should be written on one line without breaks like so';


// c. anti-pattern, don't do this
const badHabit = 'This is a string split by new lines \
                  which is a really bad habit to form, \
                  so never do this. Keep your code \
                  readable at all times.';

