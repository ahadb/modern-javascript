/**
 * CH. 02 - Core Patterns
 * object.create
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/**
 * (i.) Using object.create is another way to create a new object and specify prototype object and properties. It is similar to using new, but
 * not identical and can be used to mimic inheritance. By embracing prototypalism JavaScript has liberated itself from the confines of
 * classical programming. **Note**: JavaScript is a prototypal language, but has sufficient power to simulate and express the classical
 * paradigm.
 */

// a. Since object.create is important enough to have it's own section, let's take a closer look
let obj;

// b. create an object with null as prototype
obj = Object.create(null);
console.log(obj);

/* ==>
 Object
   > No Properties
 */

// c. assign obj to an empty object
obj = {};

// which is equivalent to:
obj = Object.create(Object.prototype);

/* ==>
Object
  > __proto__: Object
 */

// d. ..and a little more verbose an example
obj = Object.create(Object.prototype, {
  foo: { writable: true, configurable: true, value: 'Object Create' },
  bar: {
    configurable: false,
    get: function() { return 5; },
    set: function(v) { console.log('Setting `foo.bar` to', v); }
  }
});

/* ==>
Object
  bar: 5
  foo: "Object Create"
  > get bar: ()
  > set bar: (v)
  __proto__: Object
 */

// e. finally we're eeking out the benefits of using object.create, the second argument to object.create let's you initialize
// object properties
const userA = {
  sayHi: function() {
    console.log('Hello '+ this.name);
  },
  loggedIn: true
};

const alex = Object.create(userA, {
  'id' : {
    value: Math.floor(Math.random() * (20 - 11)),
    enumerable: true,
    writable: false,
    configurable: false
  },
  'name': {
    value: 'Bob',
    enumerable: true
  }
});

// another simple yet magical example
const personProto = { species: 'human' };

function newPerson(name) {
  const person = Object.create(personProto);
  person.name = name;
  return person;
}

var james = newPerson('James');
console.log(james);          // => { name: 'Finn' }
console.log(james.species);  // => human

var danielle = newPerson('Danielle');
console.log(danielle);         // => { name: 'Fiona' }
console.log(danielle.species); // => human

/**
 * (ii.) object.create and classical single inheritance
 */

// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // => true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // => true
rect.move(1, 1); // => Outputs, 'Shape moved.'
