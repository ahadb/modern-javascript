# General Patterns

## Variable Declarations

i. Correct way to declare variables is to prefix them with `var` 
```javascript
var foo = 1;
var bar = foo;
var quux = [];
var norf = {};
var baz = 'Paris';
```

ii. Use const to declare your variables in ES6 
```javascript
const foo = 1;
```

iii. Group const and let variable together for increased readability
```javascript
const bar = 2;
const list = getNames();
let i;
let attr = true;
```

iv. Never do this, always declare with `var`
```javascript
foo = 100;
```

v. Undeclared variables throw errors in strict mode
```javascript
function foo() {
	var a = 1;
	z = 2; // Throws a ReferenceError in strict mode
}
```

vi. Anti-patterns in ES5 and ES6
```javascript
const foo  = 10,
	    bar  = 15,
	    baz  = [],
	    norf = false;
```	    

## let & const

i. Favor const over let in ES6 if you don't need to reassign. const means that the identifier can't be reassigned; in other words using const creates an immutable binding.
```javascript
const baz = 75; // all of the below assignment operators will throw
baz = 24;
baz >>= 0b101010;
baz += 24;
baz /= 24;
```

ii. The following will not throw, make a note of this pattern - clearly a const value can change
```javascript
const quux = {};
quux.norf = 75;
console.log(quux.norf); //=> 75
```

iii. Use `let` when you need to reassign a variable.
```javascript
let norf = 'norf';
norf = 'quux';
console.log(norf); //=> `quux`
```

iv. Additionally `let` is only visible in the for() loop */
```javascript
function testLet() {
	// x is not visible here
	for (let x = 0; x < 5; x++) {
		// x is visible here, and in the for() parens
	}
	// x is not visible out here
}
```

v. `let` works very much like `var`, the difference is that the scope of a `var`
variable is the entire enclosing funciton
```javascript
function testVar() {
	// x is visible here
	for (let x = 0; x < 5; x++) {
		// x is visible here too
	}
	// x is also visible here
}
```

vi. All together now, we'll see more block scope patterns later on the function won't run, but it illustrates fundamental concepts
```javascript
function tricky() {
	{
		let a;
		{
			// ok since it's a block scoped name
			const a = "sneaky";
			// error, was just defined with `const` above
			a = "foo";
		}
		// ok since it was declared with `let`
		a = "bar";
		// error, already declared above in this block
		let a = "inner";
	}
}
```
## Global Variables
    
Note: It is impossible to avoid global JavaScript, something will always be dangling in the
global scope. There are many approaches however, from simple to more complex, to not abuse
global scope - after reading through this section you should already start understanding
the power of patterns :/

We'll explore more patterns that minimize globals in classes, and modules


i. always declare using an identifier your variables, if you don't it will clutter the global scope 
```javascript
const foo = Math.PI;
const bar = [];
var quux = new Wizardry();
let i;
delete foo; //=> returns `false`

// anti-pattern
foo = Math.PI;
bar = [];
window.x = 10;
delete foo; // returns `true`
```

ii. It's very important to declare your variables, even in functions
```javascript
(function() {
  const norf = 'Laser Tag!';
  console.log(norf);  //=> `Laser Tag!`
})();

console.log(norf);  //=> undefined

// if you don't, they become global variables.
(function() {
  norf = 'Laser Tag!';
  console.log(norf);  //=> `Laser Tag!`
})();

console.log(norf);  //=> `Laser Tag` *whoops*

// in ES6, you can use an immediately invoked arrow function as well
(() => {
  const norf = 'Laser Tag!';
  console.log(norf);  //=> `Laser Tag!`
})();

console.log(norf);  //=> undefined
```

iii. When global variables sneak into your code the can cause problems.
```javascript
var count = function() {
  for (i = 0; i < 10; i += 1) {
    console.log(i);
  }
};

count();  //=> 0 1 2 3 4 5 6 7 8 9

var countSilently = function() {
  for (i = 0; i < 10; i += 1) {
    // don't print anything;
  }
};

// both loops increment i at the same time, which causes strange behavior.
window.setTimeout(countSilently, 10);
window.setTimeout(count,         10);  //=> 2 3 7 8 9
```

iv. You can use 'this' in method definitions to refer to attributes of the method's object.
```javascript
var obj = {
  name: 'quux',
  getName: function() {
    console.log(this.name);
  }
};

obj.getName();  //=> `quux`

// But 'this' does not follow the normal rules of scope in JavaScript.
var obj = {
  name: 'quux',
  getName: function() {
    window.setTimeout(function() {
      console.log(this.name);
    }, 3000);
  }
};

obj.getName(); //=> undefined *whoops*

// In fact, this got bound to the global object in the callback.
// To get around this, we use `that`, `self`, or whatever you decide

var obj = {
  name: 'quux',
  getName: function() {
    var that = this;
    window.setTimeout(function() {
      print(that.name);
    }, 3000);
  }
};

obj.getName();  //=> `quux`
```

v. The keyword `this` is dynamically assigned at the callsite of a function.When a 
function is invoked as a method, i.e. obj.method(), 'this' is bound to 'obj'. 
But when a function is invoked by itself 'this' is bound to the global object.
```javascript
var life = 'I love me some JavaScript!';

function meaning() {
  var life = 'Life in a function called meaning';
  console.log(this.life)
}

// This is true even of functions that were defined as a method.
var obj = {
  name: 'quux',
  getName: function() {
    console.log(this.name);
  }
};

// When the function is invoked without 'obj.' in front of it, 'this' becomes
// the global namespace.
var getName = obj.getName;
getName();  //=> undefined

// wanted to scratch the surface with the `this` keyword, tbd in later patterns
```

vi. *Recap:* to avoid or help prevent the use of globals in your applications you can use
the following patterns popular amongst JavaScript developers
```javascript
// a. generally you can use a closure in both ES5 & ES6
function fullName(firstName, lastName) {
  let intro = "Your name is ";
  // this inner function has access to the outer function's variables, including the parameter​
  function makeFullName () {
    // intro is available here
    return intro + firstName + " " + lastName;
  }
  return makeFullName ();
}

console.log(intro); //=> undefined

// b. use an IIFE or IIAF as described above in (ii.)

// c: use the module pattern
const myModule = function () {

  // private variable(s)
  const myPrivateVar = "I am private, and can be accessed only from within the closure.";

  // private method(s):
  const myPrivateMethod = function () {
    console.log("I am private, and can be accessed only from within the closure.");
  };

  return  {
    myPublicProperty: "I'm accessible as myModule.myPublicProperty",
    myPublicMethod: function () {
      console.log("I'm accessible as myModule.myPublicMethod.");

      // Within myModule, I can access "private" vars and methods:
      console.log(myPrivateVar);
      console.log(myPrivateMethod());

      // The native scope of myPublicMethod is myModule; we can
      // access public members using "this":
      console.log(this.myPublicProperty);
    }
  };
}();

// d: The easiest way however is to wrap your code in a closure and manually expose those
// variables you need globally

(function() {
  // Your code here
  const foo = 1;
  const baz = 2;
  let quux = 'OOP';

  // Expose to global
  window['foo'] = foo;
})();

console.log(foo); //=> 1 *voila!*
```    
	    
## Coding & Naming Conventions

i. Be courteous to those who read your code and allow for context in your naming - be descriptive and try to avoid one letter names
```javascript
// be descriptive
function initialize() {
  // ...do stuff...
}

// anti-pattern, don't do this
function i() {
  // ...do stuff...
}
```

ii. A few simple rules for naming things that you should try and adhere to
```javascript
/*
 * 1a. use upper and lower case letters (A - Z, a - z) and digits (0 - 9) to form names
 * 2a. do not use the underscore, _ or dollar sign, $, and avoid use of international characters
 * 3a. most variables and functions should start with a lower case letter
 * 4a. Constructor functions and Classes should be capitalized
 * 5a. Constructor functions that must be used with the `new` prefix should start with a capital letter
 */
const result = [];
const myErrorClass = document.getElementsByClassName('error');
const setupProxy = function proxy() {
  // ...do stuff...
};

// ES6 Class declaration
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.area = value;
  }
}

let rhombus = new Polygon(100, 100);

// ES5 Constructor function
const Polygon = function Polygon(height, width) {
  this.name = 'Polygon';
  this.height = height;
  this.width = width;
};

Polygon.prototype.getArea = function() {
  return this.height * this.width;
};

Polygon.prototype.setArea = function() {
  this.area = value;
};

let parallelogram = new Polygon(400, 300);
```

iii. Variables should be declared before they are used and should be descriptive preferably variables should be alphabetical order
```javascript
const age = 0;
const adult = true;
const gender = '';
const isTeenager = !!adult;
const location = {};
```

iv. When to use camel vs pascal case
```javascript
// Use camelCase only when naming functions, objects, variables and instances
const myObj = {};
const formData = [];
function emptyArray() {
  // ...do stuff...
}
const fluffyWhale = new Mammal();

// anti-pattern, don't do this
const myobj ={};
let formdata-rules = [];
function empty_array() {
  // ...do stuff...
}
```

v. Array and Object Literals
```javascript
// always use the literal notation {}, [] instead of new Object() or new Array()
let myObj = {};
let myArr = [];
myArr.splice(0, 1);
```

vi. Function declarations
```javascript
/* 1a. functions should be declared before they are used,
 * 2a. there should be no space between the name of a function and it's invocation left of
 * parens, but one space on the right of parens where indicated to start body {
 * 3a. The body of a function should be indented two spaces
*/
function changeName(oldName, newName) {
  const oldName = document.getElementById('name').value;
  function capitalizeName() {
    return newName = oldName.toUpperCase();
  }
  return capitalizeName()
}

// b. named function expressions read well too
const changeName = function name(oldName, newName) {
  const oldName = document.getElementById('name').value;
  function capitalizeName() {
    return newName = oldName.toUpperCase();
  }
  return capitalizeName()
};

// c. never use new (function constructor) to create a function
const foo = new Function('x', 'y', 'return x / y * 10');

// d. when passing an anonymous function, use the arrow function notation so it executes in the
// context of `this`
[100, 99, 98, 97, 96].filter((ele) => {
  return ele % 2 == 0;
});

// anti-pattern, don't do this
[100, 99, 98, 97, 96].filter(function(ele) {
  return ele % 2 == 0;
});
```

vii. Statements
```javascript
/* 1a. compound statements should be indented with 2 spaces
 * 2a. the should be space between a keyword followed by parens () - denotes not an invocation
 * 3a. the left curly brace { should be at the end of the line that begins the compound statement
 * 4a. the right curly brace } should end the compound statement
 * 5a. the return value expression must start on the same line as the return keyword
 * 6a. semicolon should be used at teh end of a simple statement
 */
if (foo <= bar) {
  console.log('The message');
}

if (x > y) {
  return true;
} else {
    return false;
}

if (z % 2 == 0) {
  return false;
} else if (z % 2 == 1) {
    return true;
} else {
    return;
}

// b. for statement
for (let i = 0; i < 10; i++ ) {
  if (i < 5) {
    console.log(i);
  }
}

// c. switch statement
switch (constName) {
  case "John":
  case "Moe":
  case "Aisha":
    console.log('Hey');
    break;
  default:
    alert('Default case');
}

// d. while statement
var x = 0;
var y = 0;

while (x < 3) {
  x++;
  y += x;
}

// e. try, catch statement
try {
  if (x == "") {
    throw "is Empty";
  }
  if (isNaN(x)) {
    throw "not a number";
  }
  if (x > 10) {
    throw "too high";
  }
  if (x < 5) {
    throw "too low";
  }
}
catch(err) {
  console.log("Input " + err);
}
```
