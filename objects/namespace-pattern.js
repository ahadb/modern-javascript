/**
 * CH. 02 - Core JavaScript Object Creation & Design Patterns
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

let wonderfulApp = {
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


/* (ii). Before we start combining IIFE's, object literals and function to achieve
 * complexity let's take a peak at YAHOO's namespacing logic to declare namespaces.
 * This method is actually stand-alone and can easily be adapted to your application.
 * Just find and replace "YAHOO" with your application's base namespace and you'll
 * have something like MyOrg.namespace.
 */

// a. YAHOO's namespace declaration technique:
if (!YAHOO) {
  var YAHOO = {};
}

YAHOO.namespace = function () {
  var a = arguments,
    o = null,
    i, j, d;
  for (i = 0; i < a.length; i = i + 1) {
    d = ("" + a[i]).split(".");
    o = YAHOO;
    for (j = (d[0] == "YAHOO") ? 1 : 0; j < d.length; j = j + 1) {
      o[d[j]] = o[d[j]] || {};
      o = o[d[j]];
    }
  }
  return o;
};

// use it
YAHOO.namespace("MyNamespace.UI.Controls")

MyNamespace.UI.Controls.MyClass = function(){};
MyNamespace.UI.Controls.MyClass.prototype.someFunction = function(){};

/* (iii). Let's move onto combining a namespace with an IIFE with public and private
 * properties. We return an interface for other developers to use as well as returning
 * an object literal
 */

// a. The problem with object literals is that anyone can access their methods
// and properties, and they can grow to be quite complex syntactically. To overcome
// limitations the following example returns an object literal but gives you the
// control to provide whatever interface you want for others. This relies on a closure
// and an IIFE as a core structure.
let myNamespace = (function () {

  // defined within the local scope
  var privateMethod1 = function () { /* ... */ };
  var privateMethod2 = function () { /* ... */ };
  var privateProperty1 = 'Private Prop1';

  return {
    // nest as much as you would like here,
    // however note that this works best for
    // smaller applications with limited scope
    publicMethod1: privateMethod1,

    // nested namespace with public properties
    properties:{
      publicProperty1: privateProperty1
    },

    // another nested namespace
    utils:{
      publicMethod2: privateMethod2
    },

    views: {
      publicMethod2: privateMethod1
    }

  }
})();

// b. Another example with more complexity and two more paramaters. We also have the
// ability to add to this namespace quite easily
(function( omlette, $, undefined ) {
  // private Property
  var isYummy = true;

  // public Property
  omlette.ingredient = "Eggs";

  // public Method
  omlette.fry = function() {
    var vegetableOil;

    addItem("\t\n Butter \n\t");
    addItem(vegetableOil);
    console.log("Frying " + omlette.ingredient);
  };

  // private Method
  function addItem( item ) {
    if ( item !== undefined ) {
      console.log("Adding " + $.trim(item));
    }
  }
}( window.omlette = window.omlette || {}, jQuery ));

// adding new functionality to the omlette
(function( omlette, $, undefined ) {
  // private Property
  var amountOfGrease = "1 Cup";

  // public Method
  omlette.toString = function() {
    console.log( omlette.quantity + " " +
      omlette.ingredient + " & " +
      amountOfGrease + " of Grease" );
    console.log( isHot ? "Hot" : "Cold" );
  };
}( window.omlette = window.omlette || {}, jQuery ));