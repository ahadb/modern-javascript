/**
 * CH. 02 - Core JavaScript Object Creation & Design Patterns
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

// c. Create a basic module
var myModule = {

  myProp: "my prop",

  objProp: 'obj prop',

  // settings object with just properties...
  mySettings: {
    useHMR: true,
    cacheData: 'server',
    isProp: this.myProp ? this.myProp : this.objProp
  },

  // a simple method
  basicMethod: function () {
    console.log('I\'m a simple method within a module');
  },

  // use our setting object
  settingsMethod: function () {
    console.log( "Caching is: " + (this.mySettings.useHMR ? 'true' : 'false') );
  },

  // override the current configuration
  updateMySettings: function(newSettings) {

    if ( typeof newSettings === "object" ) {
      this.mySettings = newSettings;
      console.log(this.mySettings.language);
    }
  }
};

myModule.myProp
// => 'my prop'

myModule.basicMethod();
// => 'I'm a simple method within a module'

myModule.updateMySettings({ useMHR: false, cacheData: 'client', isProp: null });
// => Object {useMHR: false, cacheData: "client", isProp: null}

myModule
/*
 Object
   basicMethod: ()
   myProp: "my prop"
   mySettings: Object
   objProp: "obj prop"
   settingsMethod: ()
   updateMySettings: (newSettings)
   __proto__: Object
 */

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

  // notice, the locally scoped Object
  var myObject = {};

  // if it's declared with var, then it's private
  var privateMethod = function () {};

  myObject.someMethod = function () {
    // a public method
  };

  return myObject;

})();

/*
 * (iii.) Modules can also be augmented, or mutated as per the developers will. What if wanted to extend the module
 * we just created, well we could by doing the following.
 */

// a. We define our base module
var myModFoo = (function() {

  var privateMethod = function() {
    // private
  };

  var somePublicMethod = function() {
    // public
  };

  var anotherMethod = function() {
    // public
  };

  return {
    publicMethodBar: somePublicMethod,
    publicMethodFoo: anotherMethod
  };

})();

/*
 Object
   publicMethodBar: ()
   publicMethodFoo: ()
   __proto__: Object
 */

// b. We can then extend our module if we wanted to
var myModBar = (function (myModFoo) {

  myModFoo.extendedFn = function () {
    // new method!
  };

  return myModFoo;

})(myModFoo || {});

/*
 Object
   extendedFn: ()
   publicMethodBar: ()
   publicMethodFoo: ()
    __proto__: Object
 */

// c. Delightful, isn't it? We can also pass in globals as arguments to our module
// Global module
var myMixedModule = (function ($, _) {

  var cart = [];

  var privateMethod1 = function () {
    $('.container').html('jQuery test');
  };

  var privateMethod2 = function() {
    console.log(_.flatten([1, [2, [3, [4]], 5]]);
  };

  return {
    publicMethod: privateMethod1,

    addToCart: function(values) {
      cart.push(values);
    },

    getCartLength: function() {
      return cart.length;
    }

  };

// Pull in jQuery and Lodash
})($, _);