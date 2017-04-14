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
// syntax that ES5 didn't concerning getters and setters. You can simple use `get` and `set`
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


// c. demonstrate static here

/* (iii). Inheritance via sub classing let's you extend a base class's constructor. The actual keyword
 * `extends` is used to create a subclass of a base class
 */

// a. Create a base class
class Foo {
  constructor(foo, norf) {
    this.foo = foo;
    this.norf = norf;
  }
  toUpperCase() {
    return `${this.foo.toUpperCase()}, ${this.norf.toUpperCase()}`;
  }
}

// b. create a subclass
class Bar extends Foo {
  constructor(foo, norf, bar ) {
    // must call super before you use this in subclass
    super(foo, norf);
    this.bar = bar;
  }
  toUpperCase() {
    return super.toUpperCase() + ' in ' + this.bar;
  }
}

const bar = new Bar('foo', 'norf', 'bar');
bar.toUpperCase();
// => 'FOO', 'NORF' in 'bar'

bar instanceof Foo; // => true
bar instanceof Bar; // => true

// c. You can override the result of a constructor by explicitly returning an object:
class Foo {
  constructor() {
    return Object.create(null);
  }
}
console.log(new Foo() instanceof Foo); // => false

/* (iv). You might want to return Array objects in your derived array class MyArray. The species
 * pattern lets you override default constructors.
 */

class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() { return Array; }
}

var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // => false
console.log(mapped instanceof Array);   // => true

/* (v). ES5 patterns brought us numerous ways to keep our data private, let's take a look at how we
 * we can do the same in ES6 classes. There is no way to natively do this, in either ES5 or ES6. We c
 * can accomplish this however by using using specific patterns. None is wholly superior might I add.
 */

// a. Private data with naming conventions. Our data is safe, but we could have clashing private
// property naming clashes. Also this isn't elegant, everything is globbed within the constructorß
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this.setName = function(name) {
      _name = name;
    };
    this.getName = function() {
      return _name;
    };
    this.getAge = function() {
      return _age
    };
  }
}

// b. You can use Symbols for private data whose properties you don't want to expose. The trade-off
// here is that you can use reflection and expose all property keys. It's a somewhat private way.
const name = Symbol('name');
const age = Symbol('age');

class Person {
  constructor(name, age) {
    this[_name] = name;
    this[_age] = age;
  }
}
const p = new Person('Raul', 40);

console.log(Object.keys(p)); // => []
console.log(Reflect.ownKeys(c));// => [ Symbol(name), Symbol(age) ]

// c. Using WeakMaps is probably your best bet in a world of half answers
let Person = (function () {
  let privateProps = new WeakMap();

  class Person {
    constructor(name) {
      this.name = name; // this is public
      privateProps.set(this, {age: 20}); // this is private
    }
    greet() {
      // Here we can access both name and age
      console.log(`name: ${this.name}, age: ${privateProps.get(this).age}`);
    }
  }

  return Person;
})();

let joe = new Person('Joe');
joe.greet();

// here we can access joe's name but not age