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

	    