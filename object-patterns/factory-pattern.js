/**
 * CH. 03 - Object Patterns
 * Factory Pattern
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/**
 * (i). In JavaScript, any function can return a new object. When it’s not a constructor function or
 * class, it’s called a factory function - the basis for factory creatiion is the notion of creating
 * objects without using a constructor
 */

// a. simple example below
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

// b. We can then compose factories to build arbitrary yet complex objects, lets define some factories
// first

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

// c. and finally mimic inheritance with the idea of composition
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

/**
 * (ii). Factories have many benefits, some of which are there are no refactoring worries, no ambiguity
 * about using `new` and you can expect `this` to behave.
 */

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

