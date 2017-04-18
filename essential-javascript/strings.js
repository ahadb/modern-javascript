/**
 * CH. 01 - Essential Patterns
 * Strings
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/* (i.) Use single quotes for strings
 *
 */

// a. this is good practice
const foo = 'I am a good string';

// b. anti-pattern, don't do this
const bar = "I am a cool string";

// c. anti-pattern, don't use template literal syntax to construct simple single line strings
const norf = `I am an awesome string`;

/* (ii.) Best practices when dealing with longer strings */
// a. a string with less than 100 chars
const baz = 'This is a string with less than 100 characters and should be written on 1 line without breaks';

// b. a string with over 100 characters should not include new line breaks nor concatenation syntax
const str = 'This is a string with more than 100 characters and should be written on one line without breaks like so';


// c. anti-pattern, don't do the below
const badHabit = 'This is a string split by new lines \
                  which is a really bad habit to form, \
                  so never do this. Keep your code \
                  readable at all times.';

const badForm = 'This is a string split by new lines' +
                 'which is a really bad habit to form' +
                 'so never do this. Keep your code' +
                 'readable at all times.';

/* (iii.) Use template literals for multi line strings */

// a. this is a good habit to form
const warningMsg = `If you choose this option you cannot
                    recover the items unless you have chosen
                    save to cache in your preferences page`;

// b. you'll see the use of template strings in frameworks like Angular 2.0
const myObj = {
  template:`
    <h1>{{title}}</h1>
    <h2>{{employee.name}} details!</h2>
    <div><label>id: </label>{{employee.id}}</div>
    <div><label>name: </label>{{employee.name}}</div>
    `
};

/* (iv.) Use template literals for embedding expressions */

// a. this makes your code more readable
const a = 100;
const b = 15;
console.log(`The sum of 100 and 15 is equal to: ${a + b}`);