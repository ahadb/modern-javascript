/**
 * CH. 02 - Core JavaScript Object Creation & Design Patterns
 * Prototype Pattern
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/* (i.) The prototype pattern focuses on creating an object that can be used as a blueprint for other
 * objects through prototypal inheritance. The prototype pattern is an easy way to implement
 * inheritance, and comes with a performance boost as well (all child objects create a reference to
 * the function)
 */

// a. A simple implementation of the prototype pattern using object.create
var myBluePrint = {
  name: "Blue Print",
  getName: function() {
    console.log('My name is ' + this.name);
  }
};

var blueObject = Object.create(myBluePrint);

// a prototype is created
console.log(blueObject.name);
// => "Blue Print"

// b. By using the second argument of object.create we can easily create objects that inherit from on
// another
var aBluePrint = {
  name: "Blue Print",
  getName: function() {
    console.log('My name is ' + this.name);
  }
};

var aBlueObject = Object.create(myBluePrint, {
  "id": {
    value: Math.floor(Math.random() * 45),
    writable: true,
    enumerable: true,
    configurable: false
  },

  "name": {
    value: "Matt Lowenowski",
    configurable: false
  }
});

// c. Here is another basic implementation, which works great for applications that focus on
// object creation
var MyBase = function MyBaseObject() {

  this.someFunction = function someFunction() {
    console.log('Some function');
  };

  this.someOtherFunction = function someOtherFunction() {
    console.log('Some other function');
  };

  this.showMyName = function showMyName() {
    console.log(this.name)
  };

};

function MyObject() {
  this.name = 'Testing showMyName()';
}
MyObject.prototype = new MyBase();

// example usage
var testObj = new MyObject();
testObj.someFunction(); //=> 'Some function'
testObj.someOtherFunction(); //=> 'Some other function'
testObj.showMyName(); // alerts "Testing showMyName()"

// d. It's worth noting that it's possible to implement the prototype pattern without
// directly using object.create

var humanPrototype = {
  init: function (religion) {
    this.religion = religion;
  },

  getReligion: function () {
    console.log("The religion of this person is " + " " + this.religion);
  }
};


function person(religion) {

  function R() {}
  R.prototype = humanPrototype;

  var r = new R();

  r.init(religion);
  return r;

}

var ayesha = person("Muslim");
ayesha.getReligion();
//=> "The religion of this person is Muslim"