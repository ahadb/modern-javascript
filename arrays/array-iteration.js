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

/* (iii). ES5 gives us the forEach method which is shorter, but the one minor drawback is that you can't break out of the loop using the break statement
 * or return from the enclosing function
 */

// a. simple example of forEach
var arr = ['one', 'two', 'three', 'four'];

// ES5 style
arr.forEach(function (value) {
  console.log(value);
});

// ES6 styles with arrow function
arr.forEach(i => console.log(i));

arr.forEach((i) => {
  console.log(i);
});


/* (iv). The temptation of using a for-in loop will always lead you down a rabbit hole, this is a bad idea for many reasons so don't do it. The for-in was
 * designed to work on plain old objects with string keys and therefore not a great choice for Arrays
 */

for (var index in myArray) {
  console.log(myArray[index]);
}

/* (v). Another elegant solution that you can use is by using map - note that this is more of a functional approach and quite slow. Also you'll only need it
 * when you need to create a new array with the results of calling a provided function on every element */

// a. using map
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(numbers);
console.log(roots);
// => roots is now [1, 2, 3]
// => numbers is still [1, 4, 9]
