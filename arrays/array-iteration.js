/**
 * CH. 04 - Core JavaScript Object Creation & Design Patterns
 * Array Iteration
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/* (i). For twenty years we've been looping over arrays with the sequential for loop. This works well and as mentioned is probably one of the most
 * popular ways to loop over array or collection. The only drawback is that we have to keep track of the loop counter variable [i] and
 * control when the iteration ends, then finally index into the array to get the value of list[i].
 */

// a. use the popular for loop to loop through an array
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

for (var i = 0; i < cars.length; i++) {
  console.log('Index: ' + [i] + ',' + ' Item: ' + cars[i]);
}

/* =>
Index: 0, Item: BMW
Index: 1, Item: Volvo
Index: 2, Item: Saab
Index: 3, Item: Ford
Index: 4, Item: Fiat
Index: 5, Item: Audi
*/

// b. we can be more accurate
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var j = 0;
var length = cars.length;

for (j = 0; j < length; j++) {
  console.log('Index: ' + [j] + ',' + ' Item: ' + cars[j]);
}

/* =>
 Index: 0, Item: BMW
 Index: 1, Item: Volvo
 Index: 2, Item: Saab
 Index: 3, Item: Ford
 Index: 4, Item: Fiat
 Index: 5, Item: Audi
 */

/* (ii). You can also use the while loop, but it's much slower */

// a. using the while loop one shouldn't forget using var else len becomes a global variable
var arr = ['one', 'two', 'three', 'four'];
var k = 0;
var len = arr.length;

while (k < length) {
  console.log(arr[k]);
  i++
}


