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

/* (iii). The anatomy of a class is where the excitement starts -  we have the traditional lingo like
 * base classes, sub classes, static, constructor, super and of course prototype methods within the
 * body of our classes. Let's begin with our constructor and some basic methods
 */

// a. Defining a simple class in ES6
class EasyDate {

  // Define our constructor, which is the function that defines our class
  constructor(day, month, year) {

    // If so, initialize with "this"
    this._day = day;
    this._month = month;
    this._year = year;
  }

  // add some basic methods

  addDays(nDays) {
    // Increment "this" date by n days
  }

  getDay() {
    return this._day;
  }
}

// "today" is guaranteed to be valid and fully initialized
let monday = new EasyDate(2000, 2, 28);

// Manipulating data only through a fixed set of functions ensures we maintain valid state
monday.addDays(1);

// b. Note: Get and set allows us to run code on the reading or writing of a property. ES6 brings us
// syntax that ES5 didn't concerning getters and setters. You can simple use `get` and `set` //
// respectively

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    this._name = newName;   // validation could be checked here such as only allowing non numerical values
  }

  walk() {
    console.log(this._name + ' is walking.');
  }
}

let bob = new Person('Bob');
console.log(bob.name);  // Outputs 'BOB'