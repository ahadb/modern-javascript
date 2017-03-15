/**
 * CH. 03 - Object Patterns
 * Module Pattern
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/*
 * (i). To understand what a Module is, you’ll need to understand what an IIFE
 * can do for you and how it's constructed
 */

// a. Simple iife, or immediately invoked functional expression
(function() {
  // ...code here
})();

// b. Create a namespace for our code or anonymous module
var myModule = (function(idx) {
  idx.indexOf(idx);
  // ...code here
})();

/*
 * (ii.) Modules in JavaScript are used to create private and public encapsulation of classes - those
 * seen in conventional programming languages. the module pattern internalizes state and keeps code shielded
 * from the global scope, and potentially other libraries and variables that can collide with it.
 */

// a. So, to mimic a private method or property one has to only do this
var aModule = (function() {
  var privateProp = 'Private Property';
  var privateMethod = function() {
    console.log('I\'m a private method');
  }
})();

// b. Now we simply use the `return` statement to return an object literal to which
// we bind the methods we want to expose to the namespace. It's that simple
var aModule = (function() {
  var privateProp = 'Private Property';
  var privateMethod = function() {
    console.log('I\'m a private method');
  };

  // the return statement
  return {
    privateProp: privateProp,
    privateMethod: privateMethod
  }
})();

// b. Now we simply use the `return` statement to return an object literal to which
// we bind the methods we want to expose to the namespace. It's that simple
var aModule = (function() {
  var privateProp = 'Private Property';
  var privateMethod = function() {
    console.log('I\'m a private method');
  };
  // the return statement
  return {
    privateProp: privateProp,
    privateMethod: privateMethod
  }
})();

//. c. Perhaps a more readable variation could look like this
var Module = (function () {

  // locally scoped
  var myObject = {};

  // if it's declared with var, then it's private
  var privateMethod = function () {};

  myObject.someMethod = function () {
    // a public method
  };

  return myObject;

})();
