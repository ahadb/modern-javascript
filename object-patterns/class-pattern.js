/**
 * CH. 02 - Core JavaScript Object Creation & Design Patterns
 * Class Pattern
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/* (i). JavaScript introduced classes with the release of ES6 and is syntatical sugar over the
 * existing prototype-based inheritance. The advantage classes bring is a clearer and convenient
 * syntax to create objects and deal with inheritance.
 */

// a. Classes are just syntactical sugar
class Foo {}
typeof Foo;
// => 'Function'

// b. You can also only invoke a class with `new`
Foo();
// => TypeError: Classes can’t be function-called

const f = new Foo();

/* (ii). There are two types of ways to define a Class in JavaScript - a. Class Declarations and b.
 * Class Expressions
 */

