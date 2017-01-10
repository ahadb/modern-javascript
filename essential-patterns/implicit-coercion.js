/**
 * Implicit Coercion
 * JavaScript Patterns - modern JS patterns with ES5 & ES6 examples
 *
 * @copyright 2016 Ahad Bokhari
 * license: MIT
 */
 
/* (i.) JavaScript can be surprisingly forgiving when it comes to type errors, be wary of this in your applications */
5 + true; // => 4 

/* (ii.) In many cases rather than raising an error JavaScript coerces a value to the expected type by following automatic processes. When you mix numbers and strings, JavaScript breaks in favor of strings */
5 + "5" // => 55
"5" + 5 // => 55

/* (iii.) Avoid using '==' with mixed types, this helps the reader to keep clear there is no conversion involved in the comparison */ 
const today = new Date();
if (form.month.value === (today.getMonth() + 1) && // strict '==='
     form.day.value === today.getDate()) { // strict '==='
       //..do something
}