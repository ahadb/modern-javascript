/**
 * CH. 03 - Object Patterns
 * Factory Pattern
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/**
 * (i). In JavaScript, any function can return a new object. When it’s not a constructor function or class,
 * it’s called a factory function
 */

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

// a. The refactored factory expects:
const newPuter = ComputerMaker.Processor('Intel');
newPuter.shutDown(); // => 'Goodnight'

// b. Since it's a library, lots of callers in the wild are still doing this:
const oldPuter = new ComputerMaker.Processor();
// / => ** throws error **
// TypeError: Cannot read property 'undefined' of undefined at new ComputerMaker.Processor()