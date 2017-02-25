/**
 * CH. 02 - Essential Patterns
 * Object Creation
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/**
 * (i.) JavaScript is designed around objects, a simple design pattern you should know well. An object is a collection of properties, and a property is an association
 * between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects are crucial, if you understand
 * them, then you understand JavaScript
 */

// a. An object is similar to variables, except for the properties associated with and attached to the object. Using the `new`
// object notation is no different than creating a literal except there is initially no property assignment and it's less
// apparent that you're creating an object in source code.

const myObj = new Object();

// b. You may assign properties, out of which each will hold a value using dot notation

myObj.age = 12;
myObj.height = '173cm';
myObj.color = 'Fair';
myObj.ethnicity = 'Moroccan';

console.log(myObj);

/* ==>
 age = 12;
 height = '173cm';
 color = 'Fair';
 ethnicity = 'Moroccan';
 */

// c. You can also assign property and values, also known as key/value pairs via bracket notation
myObj['key'] = 'Alicia';
myObj['Always a string'] = 'String with spaces';
myObj[''] = 'Empty string';

console.log(myObj);

/* ==>
 age = 12;
 height = '173cm';
 color = 'Fair';
 ethnicity = 'Moroccan';
 key = 'Alicia';
 Always a string = 'String with spaces';
 '' = 'Empty string';
 */

// d. You can also create and assign (preferably not in one go or declaration separated by commas)
const myObj = new Object();
const key = 'Alicia';
const obj = new Object();
const rand = Math.ceil();
const num = 9007199254740991;

// and then set values
myObj.someProp = 'Some prop';
myObj[key] = 'Keys';
myObj[obj] = 'Object';
myObj[rand] = 'Not a number';
myObj[num] = 'Max Safe Integer';

/* ==>
 someProp = 'Some prop';
 Alicia = 'Keys';
 [object object] = 'Object';
 NaN = 'Not a number'
 9007199254740991 = Max Safe Integer;
 */

// and change the value using bracket notation as well as add using dot notation
myObj['someProp'] = 'Some other Prop';
myObj['Alicia'] = 'Not Keys?';
myObj['9007199254740991'] = 'Changed max number value';
myObj.newProp = 'New property';
myObj.fluxProp = 'Flux property';

console.log(myObj);

/* ==>
 someProp = 'Some other prop';
 Alicia = 'Not Keys?';
 [object object] = 'Object';
 NaN = 'Not a number'
 9007199254740991 = 'Changed max number value';
 newProp = 'New property';
 fluxProp = 'Flux property';
 float = 0.2;
 */

/**
 * In the object literal notation, an object description is a set of comma-separated name/value pairs inside curly braces. The
 * names can be identifiers or strings followed by a colon.
 */

// a. Creates an empty object
const myObj = {};

// b. Using the literal notation to create an object of name/vale pairs

const myObject = {
  stringProp: 'Ahad',
  numberProp: 100,
  booleanProp: true
};

// adding nested objects, arrays, and functions in our literal

const foo = {
  images: ['thumbs-up.png', 'smile.png', 'globe.png', 'poop.png'],
  pos: {
    x: 100,
    y: 250
  },
  onSwap: function() {
   // ..some code here
  }
};

