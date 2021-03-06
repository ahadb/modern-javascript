/**
 * CH. 01 - Essential Patterns
 * Let & Const
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/* (i.) Favor const over let in ES6 if you don't need to reassign.
 * const means that the identifier can't be reassigned; in other
 * words using const creates an immutable binding.
 */
// all of the below assignment operators will throw
const baz = 75;
baz = 24;
baz >>= 0b101010;
baz += 24;
baz /= 24;

/* (ii.) The following will not throw, make a note of this pattern - clearly a const
 * value can change
 */
const quux = {};
quux.norf = 75;
console.log(quux.norf); //=> 75

/* (iii.) Use let when you need to reassign a variable. */
let norf = 'norf';
norf = 'quux';
console.log(norf); //=> `quux`

/* (iv.) Additionally let is only visible in the for() loop */
function testLet() {
	// x is not visible here
	for (let x = 0; x < 5; x++) {
		// x is visible here, and in the for() parens
	}
	// x is not visible out here
}

/* (v.) let works very much like var, the difference is that the scope of a var
 * variable is the eniter enclosing funciton
 */
function testVar() {
	// x is visible here
	for (let x = 0; x < 5; x++) {
		// x is visible here too
	}
	// x is also visible here
}

/* (vi.) All together now, we'll see more block scope patterns later on
 * the function won't run, but it illustrates fundamental concepts
 */
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


