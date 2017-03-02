# Table of Contents

1. [Object Creation](#object-creation)  
2. [Object.create](#object-create)  
3. Object Enumeration  
4. Factory Pattern  
5. Module Pattern  
6. Prototype Pattern  
7. Chaining Pattern  
8. ES5 Constructor Function Pattern  
9. ES6 Class Pattern 

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