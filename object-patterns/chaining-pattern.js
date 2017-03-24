/**
 * CH. 03 - Object Patterns
 * Chaining Pattern
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */

/*
 * (i.) Chaining Methods, also known as Cascading, refers to repeatedly calling one method after another on an object, in one 
 * continuous line of code. This technique can be seen in jQuery and other JavaScript libraries and is loved by some and frowned
 * upon by others.
*/

// a. We've seen things like this which allows us to read code like a sentence that flows gracefully. 
$("#fragment").fadeOut().html("Introduction").fadeIn();

// b. It also takes us a away from normal block-like structures
let things = "Boxes|Cardboard|Scissors|Cups|Utensils";
things.split( "|" ).sort().join( "," ).replace( /\./g, " - " );

// as opposed to
things = things.split( "|" );
things = things.sort();
things = things.join( "," );
things = things.replace( /\./g, " - " );
console.log(things);
// => Boxes - Cardboard - Scissors - Cups - Utensils

/* 
 * (ii.) Let's view a simple example of how method chaining is helpful by taking a class and refactoring it to allow for chaining
 */ 

// a. Let's construct a Class using a constructor
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

// b. Let's refactor to implement the class with the method chaining pattern
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


