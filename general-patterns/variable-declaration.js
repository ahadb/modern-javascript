/**
 * Variable Declarations
*/

/* (i.) correct way to declare variables is to prefix them with `var` */
var foo = 1;
var bar = foo;
var quux = [];
var norf = {};
var baz = 'Paris';

/* (ii.) use const to declare your variables in ES6 */
const foo = 1;

/* (iii.) group const and let variable together for increased readability */
const bar = 2;
const list = getNames();
let i;
let attr = true;

/* (iv.) never do this, always declare with `var` */
foo = 100;

/* (v.) undeclared variables throw errors in strict mode */
function foo() {
	var a = 1; // Throws a ReferenceError in strict mode
	z = 2;
}

/* (vi.) anti-patterns in ES5 and ES6 */
const foo  = 10,
	    bar  = 15,
	    baz  = [],
	    norf = false;
