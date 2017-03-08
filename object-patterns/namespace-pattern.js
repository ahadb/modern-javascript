/**
 * CH. 02 - Object Patterns
 * NameSpace Pattern
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */


/* (i). Namespaces can be found in most serious JS applications. Unless you're working with a code-snippet, it's
 * important that you ensure that your implementation of namespacing is correct as it's not so easy to grasp. You will also
 * avoid third party code clobbering your own code. Let's examine some of the patterns here:
 */

// a. the simplest namespace you can create is:
let myNameSpace = {
  prop: 1,

  foo: function() {
    console.log(this.prop);
  },

  bar: function(num) {
    return num * 2;
  }
};

// b. a little more elegant way so that you might avoid naming collisions would be this
let someNameSpace = someNameSpace || {};
someNameSpace.prop = 1;
someNameSpace.foo = function() { return this.prop };
someNameSpace.bar = function() { return num * 2 };

// c. you can now create a single global object for your application so that all your functions and variables become props
// on your global object
let MYAPP = MYAPP || {};

// constructors
MYAPP.Human = function () {};
MYAPP.Mammal = function () {};

// a variable
MYAPP.random_var = 1;

// an object container
MYAPP.modules = {};

// nested objects
MYAPP.modules.mod1 = {};
MYAPP.modules.mod1.data = {a: 100, b: 212};
MYAPP.modules.mod2 = {};

// d. A proficient and clever developer will always check for other variables and namespaces that might clobber your code
let MYAPP = MYAPP || {};
if(!MYAPP) MYAPP = {};
let MYAPP = MYAPP = MYAPP || {};
MYAPP || (MYAPP = {});
let MYAPP = MYAPP === undefined ? {} : MYAPP;

// e. We are using object literal notations which assist in organizing code and paramaters. Note that there is a huge amount
// variations in how different developers use their object literals for organizing and structuring their code

var wonderfulApp = {
  myConfig: function(){ /**/ },
  defaults: {
    enableGeolocation: true,
    enableSharing: false,
    maxPhotos: 20
  },
  theme: {
    skin: 'a',
    toolbars: {
      index: 'ui-navigation-toolbar',
      pages: 'ui-custom-toolbar'
    }
  },
  models : {},
  views : {
    // we can nest deeper if we wish
    pages : {
      page: 1,
      content: {}
    }
  },
  collections : {}
};

