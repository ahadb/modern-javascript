# Table of Contents

1. [Object Creation](#object-creation)  
2. [Object.create](#object-create) / `object.create`
3. Object Enumeration  
4. [Factory Pattern](#object-factory-pattern)
5. [NameSpace Pattern](#namespace-pattern)  
6. [Module Pattern](#module-pattern)
7. [Chaining Pattern](#chaining-pattern)  
8. [Constructor Function Pattern](#constructor-function-pattern)  
9. [Prototype Pattern](#prototype-pattern)   
10. [Class Pattern](#class-pattern)  

## Object Creation 

> (i.) JavaScript is designed around objects, a simple design pattern you should know well. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects are crucial, if you understand them, then you understand JavaScript

1.1 An object is similar to variables, except for the properties associated with and attached to the object. Using the `new` object notation is no different than creating a literal except there is initially no property assignment and it's less apparent that you're creating an object in source code.
```javascript
const myObj = new Object();

// a. You may assign properties, out of which each will hold a value using dot notation
myObj.age = 12;
myObj.height = '173cm';
myObj.color = 'Fair';
myObj.ethnicity = 'Moroccan';

console.log(myObj);

/* ==>
 age = 12;
 height = '173cm';
 color = 'Fair';
 ethnicity = 'Moroccan';
 */
```

1.2 You can also assign property and values, also known as key/value pairs via bracket notation
```javascript
myObj['key'] = 'Alicia';
myObj['Always a string'] = 'String with spaces';
myObj[''] = 'Empty string';

console.log(myObj);

/* ==>
 age = 12;
 height = '173cm';
 color = 'Fair';
 ethnicity = 'Moroccan';
 key = 'Alicia';
 Always a string = 'String with spaces';
 '' = 'Empty string';
 */
```

1.3 You can also create and assign (preferably not in one go or declaration separated by commas)
```javascript
const myObj = new Object();
const key = 'Alicia';
const obj = new Object();
const rand = Math.ceil();
const num = 9007199254740991;

// and then set values
myObj.someProp = 'Some prop';
myObj[key] = 'Keys';
myObj[obj] = 'Object';
myObj[rand] = 'Not a number';
myObj[num] = 'Max Safe Integer';

/* ==>
 someProp = 'Some prop';
 Alicia = 'Keys';
 [object object] = 'Object';
 NaN = 'Not a number'
 9007199254740991 = 'Max Safe Integer';
 */

// and change the value using bracket notation as well as add using dot notation
myObj['someProp'] = 'Some other Prop';
myObj['Alicia'] = 'Not Keys?';
myObj['9007199254740991'] = 'Changed max number value';
myObj.newProp = 'New property';
myObj.fluxProp = 'Flux property';
myObj.float = 0.2;

console.log(myObj);

/* ==>
 someProp = 'Some other prop';
 Alicia = 'Not Keys?';
 [object object] = 'Object';
 NaN = 'Not a number'
 9007199254740991 = 'Changed max number value';
 newProp = 'New property';
 fluxProp = 'Flux property';
 float = 0.2;
 */
```

> (ii.) With the object literal notation, an object description is a set of comma-separated name/value pairs inside curly braces. The
 names can be identifiers or strings followed by a colon. This creates great readability and an easy syntax to create and assign properties in one go.

1.4. Creates an empty object using a literal
```javascript
const myObj = {};
```

1.5. Using the literal notation to create an object of name/vale pairs
```javascript
const myObject = {
  stringProp: 'Ahad',
  numberProp: 100,
  booleanProp: true
};

// adding nested objects, arrays, and functions in our literal
const foo = {
  images: ['thumbs-up.png', 'smile.png', 'globe.png', 'poop.png'],
  pos: {
    x: 100,
    y: 250
  },
  onSwap: function() {
   // ..some code here
  }
};
```

> (iii.) Alternatively, you can create an object by writing a constructor function, then instantiating the object with `new`

1.6 Use a constructor function for an object that specifies it's name, properties and methods
```javascript
function Human(age, gender, ethnicity) {
  // note the use of this
  this.age = age;
  this.gender = gender;
  this.ethnicity = ethnicity;
}

// now create an instance of it, or `new` it up
const Jane = new Human(20, 'female', 'German');
console.log(Jane);

/* ==>
 Human
 age: 20
 ethnicity: "German"
 gender: "female"
 __proto__: Object
*/
```

...you may create as many instances as you want
```javascript
const Anna = new Human(20, 'female', 'German');
const Rita = new Human(12, 'male', 'Polish');
const Cathy = new Human(60, 'female', 'Iraqi');
```

...or define more properties by rewriting the constructor function
```javascript
function Human(age, gender, ethnicity, weight) {
  // note the use of this
  this.age = age;
  this.gender = gender;
  this.ethnicity = ethnicity;
  this.weight = weight;
}

const Bob = new Human(45, 'male', 'American', 145);
```

> (iv.) ES5 brings the new class syntax, which is just syntactic sugar over the prototype. It's worth noting that using classes is 3x     faster than returning an object literal. We'll delve into classes in later chapters

```javascript
class Number {
  constructor() {
    this.integer = 42;
    this.pi = 3.14159265;
    this.float = 9.72;
  }

  f() {}
  g() {}
}

const n = new Number();
```

> (v. )There are other ways to create objects, the above being the most common patterns used. You can create objects as well using the
  prototype pattern, prototype/constructor combination, or even a Singleton. We will discuss these in depth in the coming chapters

1.7 prototype pattern
```javascript
function Person() {}

Person.prototype.getName = function() {
  return this.name
};

var Ahad = new Person();
console.log(Ahad);

/* ==>
 Person
   __proto__: Object
     constructor: Person()
     getName: ()
     __proto__: Object
 */
```

1.8 prototype / constructor combination
```javascript
function Person(name){
  this.name = name;
}
Person.prototype.getName = function(){
  return this.name
};
```
> (vi.) Using Object.defineProperty and Object.defineProperties to create objects should not be overlooked - this is only ECMAScript 5     compatible while the above approaches are ECMAScript 3 and 5 compatiable

```javascript
var o = {};
o.prop1 = 1;
o['prop2'] = 2;
o['someFn'] = function() {};
```

1.9 Set properties
```javascript
Object.defineProperty(o, "newKey", {
    value: "mutating object and adding greater control",
    writable: true,
    enumerable: false,
    configurable: true
});
```

1.10 A short-hand could be written as follows
```javascript
var defineProp = function (obj, key, value){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty( obj, key, config );
};
```

1.11 Object.defineProperties
```javascript
Object.defineProperties(o, {
 
  "someKey": {
    value: "Objects are awesome!",
    writable: true
  },
 
  "anotherKey": {
    value: "Quux",
    writable: false
  }
 
});
```

## Object Create

/**
> (i.) Using object.create is another way to create a new object and specify prototype object and properties. It is similar to using new, but
  not identical and can be used to mimic inheritance. By embracing prototypalism JavaScript has liberated itself from the confines of
  classical programming. **Note**: JavaScript is a prototypal language, but has sufficient power to simulate and express the classical
  paradigm.


2.1 Since object.create is important enough to have it's own section, let's take a closer look
```javascript
let obj;
// create an object with null as prototype
obj = Object.create(null);
console.log(obj);

/* ==>
 Object
   > No Properties
 */

// assign obj to an empty object
obj = {};

// which is equivalent to:
obj = Object.create(Object.prototype);

/* ==>
Object
  > __proto__: Object
 */
``` 

2.2 A tad more verbose an example
```javascript
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
```

> Note: using what we learnt eariler with Object.defineProperty / ies we could also use Object.create to do something like this:
```javascript
var defineProp = function (obj, key, value){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty(obj, key, config);
};
var car = Object.create(Object.prototype);
// Populate the object with properties
defineProp(car, "car", "Ferrari");
defineProp(car, "engine", "V12");
defineProp(car, "year", "2015");
console.log(car);
// Outputs: Object {car: "Ferrari", engine: "V12", year: 2015}
```

2.3 Finally we're eeking out the benefits of using object.create, the second argument to object.create let's you initialize object properties
```javascript
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
```

2.4 Another simple yet magical example
```javascript
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
```


> (ii.) Using object.create and classical single inheritance

```javascript
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
```
## Object Enumeration

## Factory Pattern

> (i). In JavaScript, any function can return a new object. When it’s not a constructor function or class, it’s called a factory       
  function

4.1. simple example below
```javascript
const proto = {
  walk() {
    console.log('Baby steps');
  }
};

function factoryWalk() {
  return Object.create(proto);
}

const baby1 = factoryWalk();
console.log(baby1.walk());

/* ==>
 Object
 __proto__:
 walk
 __proto__: Object
 */
```

4.2 we can then compose factories to build arbitrary yet complex objects, lets define some factories first

```javascript
function makeSauce() {
  return {
    type: 'sauce',
    ingredients: ['wine', 'oregano', 'salt', 'pepper', 'tomatoes'],
    amount: 1
  };
}

function makePasta() {
  return {
    type: 'al dente',
    amount: 2,
    duration: 10
  }
}

function makeSpaghetti() {
  return {
    time: 30,
    type: 'meal',
    serving: [
      makeSauce(),
      makePasta()
    ]
  }
}

// finally, we mimic inheritance with the idea of composition
function createLasagne() {
  return {
    type: 'lasagne',
    items: [
      makeSauce(),
      makePasta(),
      makeMeat()
    ],
    topping: makeCheese()
  }
}
```

> (ii). Factories have many benefits, some of which are there are no refactoring worries, no ambiguity
  about using `new` and you can expect `this` to behave.

```javascript
const ComputerMaker = {
  Processor(chip) {
    return Object.create(this.chip[chip]);
  },

  chip: {
    premium: {
      shutDown () {
        console.log('Goodnight');
      },
      getOptions: function () {
        return ['graphics card', 'case', 'motherboard'];
      }
    }
  }
};

// a. The factory expects:
const newPuter = ComputerMaker.Processor('Intel');
newPuter.shutDown(); // => 'Goodnight'

// b. Note: since it's a library, don't make the mistake of calling with `new`, this is the b
const oldPuter = new ComputerMaker.Processor();
// / => ** throws error **
// TypeError: Cannot read property 'undefined' of undefined at new ComputerMaker.Processor()
```
## NameSpace Pattern

> (i). Namespaces can be found in most large JS applications. Unless you're working with a  script or snip, it's important that you ensure that your implementation of namespacing is correct as it's not so easy to grasp. You will also avoid third party code clobbering your own code. Let's examine some of the patterns here:

5.1 The simplest namespace you can create is:
```javascript
let myNameSpace = {
  prop: 1,

  foo: function() {
    console.log(this.prop);
  },

  bar: function(num) {
    return num * 2;
  }
};
```

5.2 A little more elegant way so that you might avoid naming collisions would be this
```javascript
let someNameSpace = someNameSpace || {};
someNameSpace.prop = 1;
someNameSpace.foo = function() { return this.prop };
someNameSpace.bar = function() { return num * 2 };
```

5.3 You can now create a single global object for your application so that all your functions and variables become props
```javascript
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
```

5.4 A proficient and clever developer always checks for other variables and namespaces that might clobber your code
```javascript
let MYAPP = MYAPP || {};
if(!MYAPP) MYAPP = {};
let MYAPP = MYAPP = MYAPP || {};
MYAPP || (MYAPP = {});
let MYAPP = MYAPP === undefined ? {} : MYAPP;
```

5.5 We are using object literal notations which assist in organizing code and paramaters. Note that there is a huge amount variations in how different developers use their object literals for organizing and structuring their code
```javascript
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
```

> (ii). Before we start combining IIFE's, object literals and function to achieve more complexity let's take a peak at YAHOO's namespacing logic to declare namespaces. This method is actually stand-alone and can easily be adapted to your application. Just find and replace "YAHOO" with your application's base namespace and you'll have something like MyOrg.namespace.

```javascript
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
```

> (iii). Now we move onto combining a namespace with an IIFE with public and private properties. We return an interface for other developers to use as well as returning an object literal

> Tip: The problem with object literals is that anyone can access their methods
  and properties, and they can grow to be quite complex syntactically. To 
  overcome limitations the following example returns an object literal and
  relies on a closure and an IIFE as a core construct.
```javascript 
var iife = (function() {
  var prop = 1;
  var someFn = function(idx) {
    console.log(idx);
  };
  var anotherFn = function(x) {
    return x * 12;
  }; 
  return {
    publicProp: prop,
    exposedFn: someFn
  };         
})();  
```  

> Note: in the next few examples we will be fusing examples with the module 
  pattern, just remember namespaces can be thought of as self contained modules as well (namespaces were popularized in the JS world before modules were)
  
5.1 namespace in which you expose the interface of your choice  
```javascript
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
```

5.2 Another example with more complexity and two more paramaters. We also have the ability this namespace quite easily
```javascript
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
```

5.3 we can now add new functionality to the omlette
```javascript
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
```

## Module Pattern

> To understand what a Module is, you’ll need to understand what an IIFE can do for you and how it's constructed

6.1 Simple iife, or immediately invoked functional expression

```javascript
(function() {
  // ...code here
})();
```

6.2 Create a namespace for our code or anonymous module

```javascript
var myModule = (function(idx) {
  idx.indexOf(idx);
  // ...code here
})();
```

6.3 Create a basic module

```javascript
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
    console.log("Caching is: " + (this.mySettings.useHMR ? 'true' : 'false'));
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
```


> (ii.) Modules in JavaScript are used to create private and public encapsulation of classes - those seen in conventional programming languages. the module pattern internalizes state and keeps code shielded from the global scope, and potentially other libraries and variables that can collide with it.

6.4 So, to mimic a private method or property one has to only do this

```javascript
var aModule = (function() {
  var privateProp = 'Private Property';
  var privateMethod = function() {
    console.log('I\'m a private method');
  }
})();
```

6.5 Now we simply use the `return` statement to return an object literal to which we bind the methods we want to expose to the namespace. It's that simple

```javascript
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
```

6.6 Perhaps a more readable variation could look like this

```javascript
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
```

> Modules can also be augmented, or mutated as per the developers will. What if wanted to extend the module
 we just created, well we could by doing the following.

// 6.7 We define our base module
```javascript
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
```

6.8 We can then extend our module if we wanted to
```javascript
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
```

6.9 Delightful, isn't it? We can also pass in globals as arguments to our module
// Global module
```javascript
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
```

## Chaining Pattern

> (i.) Chaining Methods, also known as Cascading, refers to repeatedly calling one method after another on an object, in one 
  continuous line of code. This technique can be seen in jQuery and other JavaScript libraries and is loved by some and frowned
  upon by others.

7.1 We've seen things like this which allows us to read code like a sentence which flows gracefully. 
```javascript
$("#fragment").fadeOut().html("Introduction").fadeIn();
```

7.2 Chaining also takes us a away from normal block-like structures
```javascript
let things = "Boxes|Cardboard|Scissors|Cups|Utensils";
things.split( "|" ).sort().join( "," ).replace( /\./g, " - " );

// as opposed to
things = things.split( "|" );
things = things.sort();
things = things.join( "," );
things = things.replace( /\./g, " - " );
console.log(things);
// => Boxes - Cardboard - Scissors - Cups - Utensils
```

> (ii.) Let's view a simple example of how method chaining is helpful by taking a class and refactoring it to allow for chaining
 
7.3 Let's construct a Class using a constructor
```javascript
let Dog = function(breed, color) {
  this.breed = breed;
  this.color = color;
  this.age = age;
};  

Dog.prototype.setBreed = function(breed) {
  this.breed = breed;
};

Dog.prototype.setColor = function(color) {
  this.color = color;
};

Dog.prototype.sendToApi = function() {
  console.log('The dogs breed is ' + this.breed + ' and color is' + this.color);
  
  // server ajax stuff here

};

// now let's instantiate it
const pinky = new Dog();
pinky.setBreed('German Shephard');
pinky.setColor('Brown');

pinky.sendToApi();

// it would be easier if we could just do this, but unfortunately this will throw an error:
var pinky = new Dog();
pinky.setBreed('German Shephard').setColor('Brown').sendToApi();
// ERROR
// => Uncaught TypeError: Cannot call method 'setBreed' of undefined
```

7.4 Let's refactor to implement the class with the method chaining pattern
```javascript
let Dog = function(breed, color) {
  this.breed = breed;
  this.color = color;
  this.age = age;
};  

Dog.prototype.setBreed = function(breed) {
  this.breed = breed;
  return this;
};

Dog.prototype.setColor = function(color) {
  this.color = color;
  return this;
};

Dog.prototype.sendToApi = function() {
  console.log('The dogs breed is ' + this.breed + ' and color is' + this.color);
  
  // server ajax stuff here
  return this;
};

// now we can simply do this
new Dog().setBreed('German Shephar').setColor('Brown').sendToApi();

// or
new Dog()
  .setBreed('German Shephard')
  .setColor('Brown')
  .sendToApi();
```

## Constructor Function Pattern

> (i). In JavaScript we're particularly interested in objects, as everything is an object. This
  is unlike most traditional languages as constructors are special methods within classes. the
  most common way to create an object using a constructor, pass it arguments and set values is
  to use the this keyword with new

8.1 Below is the standard constructor function pattern
```javascript
function MeasureSuccess(education, skills, ambition) {
  // args are numbered ratings of self from 1 to 10
  this.education = education;
  this.skills = skills;
  this.ambition = ambition;
  this.median = this.education + this.skills + this.ambition;
  this.result = this.median > 22 ? 'good' : 'bad';

  this.isSuccessful = function() {
    return 'My success rating is: ' + this.median + ' which is' + ' ' + this.result;
  };
}
```

8.2 When the code new measureSuccess is executed:
> * A new object is created, inheriting from MeasureSuccess.prototype.
> * The constructor function MeasureSuccess is called with the specified arguments, and with this bound to the newly
> created object.
> * The object returned by the constructor function becomes the result of the whole new expression
```javascript  
const amy = new MeasureSuccess(8, 9, 9);
console.log(amy);
/*
 MeasureSuccess
   ambition: 9
   education: 8
   isSuccessful: ()
   median: 26
   result: "good"
   skills: 9
   __proto__: Object
 */
amy.isSuccessful();
// => "My success rating is: 26 which is good"
```

8.3 It's common for JavaScript developers to forget the new operator. What can we if we call the constructor but accidentally forget the new keyword
```javascript
function MeasureSuccess(education, skills, ambition) {
  // we change our constructor to allow instance creation with and without `new`
  if (!(this instanceof MeasureSuccess)) {
    return new MeasureSuccess(education, skills, ambition);
  }
  // args are numbered ratings of self from 1 to 10
  this.education = education;
  this.skills = skills;
  this.ambition = ambition;
  this.median = this.education + this.skills + this.ambition;
  this.result = this.median > 22 ? 'good' : 'bad';

  this.isSuccessful = function() {
    return 'My success rating is: ' + this.median + ' which is' + ' ' + this.result;
  };

  return this;
}
```

8.4 If you want to avoid this altogether and not worry about setting context, you could use this pattern
```javascript
function Person(firstName, lastName) {
  let _firstName = firstName;
  let _lastName = lastName;

  let me = {
    firstName: _firstName,
    lastName: _lastName
  };

  me.fullName = function() {
    return _firstName + ' ' + _lastName;
  };

  // Getter/setters
  me.firstName = function(value) {
    if (!arguments.length) return _firstName;
    _firstName = value;

    return me;
  };

  me.lastName = function(value) {
    if (!arguments.length) return _lastName;
    _lastName = value;

    return me;
  };

  return me;
}

// Use it like this, with no `new` keyword!
var zack = Person('Zack', 'Leeberman');

zack.firstName('Todd');
zack.lastName('Bradfield');

zack.fullName();
// => 'Todd Bradfield'
```

## Prototype Pattern

> (i.) The prototype pattern focuses on creating an object that can be used as a blueprint for other
  objects through prototypal inheritance. The prototype pattern is an easy way to implement
  inheritance, and comes with a performance boost as well (all child objects create a reference to
  the function)

9.1 A simple implementation of the prototype pattern using object.create
```javascript
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
```

9.2 By using the second argument of object.create we can easily create objects that inherit from another
```javascript
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
```

9.3 Here is another basic implementation, which works great for applications that focus on
object creation
```javascript
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
```

9.4 It's worth noting that it's possible to implement the prototype pattern without
directly using object.create
```javascript
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
```

## Class Pattern

> (i). JavaScript introduced classes with the release of ES6 and is syntatical sugar over the
  existing prototype-based inheritance. The advantage classes bring is a clearer and convenient
  syntax to create objects and deal with inheritance

10.1 Classes are just syntactical sugar
```javascript
class Foo {}
typeof Foo;
// => 'Function'
```

10.2 You can also only invoke a class with `new`
```javascript
Foo();
// => TypeError: Classes can’t be function-called

const f = new Foo();
```

> (ii). There are two types of ways to define a Class in JavaScript - a. Class Declarations and b.
  Class Expressions

10.3 Class declarations are a typical way to define a class
```javascript
class Life {
  constructor(food, water, oxygen) {
    this.food = food;
    this.water = water;
    this.oxygen = oxygen;
  }
}
```

> Note: You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError
```javascript
const dot = new Point();

class Point {}
```

10.4 Another way to define a class is by a Class expression which can be named or unnamed - they suffer from the same hoisting problems as their counterparts
```javascript
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
```

> (iii). The anatomy of a class is where the excitement starts -  we have the traditional lingo like
  base classes, sub classes, static, constructor, super and of course prototype methods within the
  body of our classes. Let's begin with our constructor and some basic methods

11.4 Defining a simple class in ES6
```javascript
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
```

> Note: Get and set allows us to run code on the reading or writing of a property. ES6 brings us
  syntax that ES5 didn't concerning getters and setters. You can simple use `get` and `set` //
  respectively
```javascript
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
```
