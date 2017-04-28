# Table of Contents

1. [Array Basics & Creation](#array-basics-and-creation)  
2. [Array Iteration](#array-iteration)
3. ES6 Array Methods
4. Functional Programming with Arrays


## Array Basics and Creation

> There are two ways to create arrays in JavaScript, one using the new keyword and the other
  defining an array literal (the latter being much more popular, I advise to use that technique to
  avoid passing a possible trap the from new Array() constructor has for you. Nevertheless, let's
  take a peek at this lesser used technique.

1.1 Newing up an array
```javascript
let a = new Array(5);
console.log(a.length); // => 5
console.log(a[0]); // => undefined
a; // => [undefined x 5]
```

1.2 Problems with new and floating point numbers
```javascript
let floatingArr = new Array(1.11); // => Uncaught RangeError: Invalid array length
console.log(typeof floatingArr); // => undefined
```

> (ii). The preferred method of course is to create an array literal for your friendly list-like
  object

2.1 Create an array using the literal syntax
```javascript
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
days.length

// find the first element by indexing into Array, arrays are 0 based indexes
const first = days[0];

// find the last element by indexing into Array, arrays are 0 based indexes
const last = days[days.length - 1];
```

2.2 push onto an empty array
```javascript
let users = [];
users.push('Amy', 'Nadiah', 'Steven');
console.log(users); // => ['Amy', 'Nadiah', 'Steven']
```

2.3 From time to time, you'll want to check if your object is an Array, JS has typing problems. You've seen people trip up on this before
```javascript
typeof null === 'object';
typeof null !== 'null';
// enter Array.isArray
Array.isArray([1, 2, 3]);    // => true
Array.isArray([{foo: 123}]); // => true
Array.isArray({baz: 'foo'});  // => false
Array.isArray('norf');     // => false
Array.isArray(null);    // => false
```

> (iii). Now let's go over some basic ES5 array methods(on above array) to get ourselves acquainted. We'll save details on iteration and cloning for another section

3.1 add to front of an Array
```javascript
const animals = ['Bear', 'Eagle', 'Squirrel'];
animals.unshift('Leopard');
// => ['Leopard' ,'Bear', 'Eagle', 'Squirrel'];
```

3.2 add to the end of an Array
```javascript
animals.push['Monkey'];
// => ['Leopard' ,'Bear', 'Eagle', 'Squirrel', 'Monkey'];
```

3.3 remove from the front of an Array
```javascript
const firstOfAnimals = animals.shift();
// => ['Bear', 'Eagle', 'Squirrel', 'Monkey'];
```

3.4 remove from the end of an Array
```javascript
const lastOfAnimals = animals.shift();
// => ['Bear', 'Eagle', 'Squirrel'];
```

3.5 find the index of an item in the Array
```javascript
const position = animals.indexOf('Eagle');
// => 1
```

3.6 remove an item by index position
```javascript
const removedItem = animals.splice(position, 1);
// => ['Bear', 'Squirrel'];
```

> Note: understanding array length
```javascript
let countries = [];
countries.push('Africa', 'England', 'Afghanistan', 'Turkey');

// get length of countries array
console.log(countries.length); // => 4

// add to array (or) increase length
countries[20] = 'Australia';
console.log(countries.length); // => 20
console.log(countries); // => ["Africa", "England", "Afghanistan", "Turkey", undefined × 16, "Australia"]
console.log(Object.keys(countries)); // => ["0", "1", "2", "3", "20"]
```

## Array Iteration

> For twenty years we've been looping over arrays with the sequential for loop. This works well and as mentioned is probably one of the most
  popular ways to loop over array or collection. The only drawback is that we have to keep track of the loop counter variable [i] and
  control when the iteration ends, then finally index into the array to get the value of list[i].


2.1 Use the popular for loop to loop through an array
```javascript
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
```

2.2 We can be more accurate...
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

> (ii). You can also use the while loop, but it's much slower */

2.3 using the while loop one shouldn't forget using var else len becomes a global variable
```javascript
var arr = ['one', 'two', 'three', 'four'];
var k = 0;
var len = arr.length;

while (k < length) {
  console.log(arr[k]);
  i++
}
```

> (iii). ES5 gives us the forEach method which is shorter, but the one minor drawback is that you can't break out of the loop using the break statement
  or return from the enclosing function


2.4 simple example of forEach
```javascript
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
```

> (iv). The temptation of using a for-in loop will always lead you down a rabbit hole, this is a bad idea for many reasons so don't do it. The for-in was
  designed to work on plain old objects with string keys and therefore not a great choice for Arrays

```javascript
for (var index in myArray) {
  console.log(myArray[index]);
}
```

> (v). Another elegant solution that you can use is by using map - note that this is more of a functional approach and quite slow. Also you'll only need it
  when you need to create a new array with the results of calling a provided function on every element */

2.5 Using map..
```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(numbers);
console.log(roots);
// => roots is now [1, 2, 3]
// => numbers is still [1, 4, 9]
```

> (vi). Let vs Var in for-loops is another good topic to understand and think about before you blindly start looping in your projects. Using let one can be explicit
  about the scoping to a particular block as opposed to implicit function scoping with var */

2.6 Using let in a for loop
```javascript
let myArr = [1, 2, 3, 4, 5];

for (let i = 0; i < myArr.length; i ++) {
  console.log('Index: ' + [i] + ',' + ' Item: ' + myArr[i]);
}

/* =>
 Index: 0, Item: BMW
 Index: 1, Item: Volvo
 Index: 2, Item: Saab
 Index: 3, Item: Ford
 Index: 4, Item: Fiat
 Index: 5, Item: Audi
 */

// log [i] outside of the { } scope. Remember let creates block scope and not function scope like var
console.log(i);
// => Uncaught ReferenceError: i is not defined
```

2.7 let does not hoist to the entire scope of the block it appears in, by contrast var could do so. This might be good for us though when
dealing with closures in a loop
```javascript
// when looping within a closure using var:
for (var i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i); // output '5' 5 times
  }, 100);
}
// => 5, 5, 5, 5, 5

for (let i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
// => 0, 1, 2, 3, 4
```

2.8 Simple test with a var vs let function
```javascript
function varvslet() {
  console.log(i); // i is undefined due to hoisting
  // => console.log(j); // ReferenceError: j is not defined

  for( var i = 0; i < 3; i++ ) {
    console.log(i); // => 0, 1, 2
  }

  console.log(i); // 3
  // => console.log(j); // ReferenceError: j is not defined

  for( let j = 0; j < 3; j++ ) {
    console.log(j);
  }

  console.log(i); // 3
  // => console.log(j); // ReferenceError: j is not defined
}
```
