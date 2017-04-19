# Table of Contents

1. [Array Basics & Creation](#array-basics-and-creation)  
2. Array Enumeration
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
