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

// a. Class declarations are a typical way to define a class
class Life {
  constructor(food, water, oxygen) {
    this.food = food;
    this.water = water;
    this.oxygen = oxygen;
  }
}

// b. Note: You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError
const dot = new Point();

class Point {}

// c: Another way to define a class is by a Class expression which can be named or unnamed - they suffer from the same hoisting problems as their counterparts

// unnamed
const Square = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// named
const Square = class Square {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

/* (iii). The anatomy of a class is where the fun begins -  we have the tradional lingo like base
 * classes, sub classes, static, constructor, super and of course prototype methods within the body of * our  classes
 */

