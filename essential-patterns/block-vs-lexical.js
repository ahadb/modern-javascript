/**
 * CH. 01 - Essential Patterns
 * Block vs. Lexical Scope
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/* (i). Most programming languages use lexical scope, or scope based on variables
 * defined at author time by the programmer. Lexical scoping defines how variable     * names are resolved in nested functions: inner functions contain the scope of parent * functions even if the parent function has returned.
 */

// a. Take a look at this block of code

// function foo is the global scope
function foo(x) {
  // this encompasses the scope of foo
  var y = x * 5;

  function baz(z) {
    // encompasses the scope of bar
    console.log( x, y, z );
  }
  baz(y * 5);
}

foo(2);
// => 2 10 50

// b. Scope based hiding techniques are powerful modules, do the scope of foo is nested,
// ultimately hiding what gets defined inside of it from the outside world

var a = 1;
function foo() {
  var a = 10;
  console.log(a);
}
console.log(a);
// => 1

foo();
// => 10

// c. it's important to note that we can artificially introduce scope by creating new
// functions and immediately invoking them.

/* (ii). ES6 introduces block scoping and antything between { } introduces it's own
 * scope. `let` statement declares a block scope local variable.
 */

// a. Consider the following code. Note that the { } not only creates new scope, it also
// invokes the console.log statement

{
  let quux = "Hello World from ES6";
  console.log(quux);
  // => Hello World from ES6
}

{
  let foo = "This has a different scope";
  console.log(foo);
  // => This has a different scope
}

console.log(quux);
// => Reference Error: quux is not defined

// b. Consider the difference between using `var` and `let` when thinking about scoping
// rules. The main difference is that the scope of var is the entire enclosing function

function varryDoo() {
  var x = 1;
  if (true) {
    var x = 2;  // same variable!
    console.log(x);  // => 2
  }
  console.log(x);  // => 2
}

function lettyDoo() {
  let x = 1;
  if (true) {
    let x = 2;  // different variable
    console.log(x);  // => 2
  }
  console.log(x);  // => 1
}

// c. More block scoped `let` ...

let outer = "outer";
{
  let inner = "inner";
  {
    let nested = "nested"
  }
  console.log(inner); // => you can access `inner`
  console.log(nested) // => throws error
}
// you can access `outer` here
// you cannot access `inner` and `nested` here