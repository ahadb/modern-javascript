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

for (var i = 0; i < 5; i++) {
  console.log(i);
    // statements
}

// => 0, 1, 2, 3, 4

// b. little more involved, loop through inputs in form and find empty input

var elements = document.getElementsByTagName("input");
for (var i = 0; i < elements.length; i++) {
  if(elements[i].value == "")
    alert('empty');
      //..do something
}

// c. the best way to loop through an array is using the `for loop`
