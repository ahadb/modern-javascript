/**
 * CH. 02 - Core JavaScript Object Creation & Design Patterns
 * Constructor Function Pattern
 *
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 * @copyright 2016 - 2017, Ahad Bokhari
 * license: MIT
 */


/* (i). In JavaScript we're particularly interested in objects, as everything is an object. This
 * is unlike most traditional languages as constructors are special methods within classes. the
 * * most common way to create an object using a constructor, pass it arguments and set values is
 * to use the this keyword with new
 */

// a. Below is the standard constructor function pattern
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

// b. When the code new measureSuccess is executed:
// - A new object is created, inheriting from MeasureSuccess.prototype.
// - The constructor function MeasureSuccess is called with the specified arguments, and with this bound to the newly
//   created object.
// - The object returned by the constructor function becomes the result of the whole new expression.
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

// c. It's common for JavaScript developers to forget the new operator. What can we if we call the constructor
// but accidentally forget the new keyword
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

// d. If you want to avoid this altogether and not worry about setting context, you could use this pattern
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
var zack = Person('Zack', 'Lieberman');

zack.firstName('Todd');
zack.lastName('Bradfield');

zack.fullName();
// => 'Todd Bradfield'

