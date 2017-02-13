/**
 * Block vs. Lexical Scope
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 *
 * @copyright 2016 Ahad Bokhari
 * license: MIT
 */

/* (i). Most programming languages use lexical scope, or scope based on variables
 * defined at author time by the programmer. Lexical scoping defines how variable     * names are resolved in nested functions: inner functions contain the scope of parent * functions even if the parent function has returned.
 */

// function foo is the global scope
function foo(x) {
  // this encompasses the scope of foo
  const y = x * 5;

  function baz(z) {
    // encompasses the scope of bar
    console.log( x, y, z );
  }
  baz(y * 5);
}

foo(2); // => 2 10 50
