# JavaScript Patterns
An extensive list of everyday modern JavaScript design and coding patterns (patterns in general, not just design patterns) with syntactical examples in both ES5 and ES6.

## Introduction
This repository is a place for pragmatic javascript developers (beginners to advanced) to view and familiarize themselves with modern
everyday patterns and idioms in vanilla style ES5 & ES6. The great majority of patterns are found here are very useful and common, while others might not be as popular. There are no silver bullets, so please don't try and force your problem to fit a pattern or tool.

I hope you find that this repo will help you think to quickly recognize even the trivial of patterns - most of all I hope you find invaluable inspiration and satisfaction as you work through the examples. For novices, you'll gain the most if you revisit them after you've gained some experience.

Listed within this repository will be the following types of patterns:
 * General Code Patterns
 * Design Patterns
 * Modern Patterns (ES6, Node)
 * Refactoring Patterns

...note that the work here has been identified by the JavaScript community as well as within the authors own work. Thanks should be given to the developers, early adopters, JavaScript technocrats, and technology pundits that came before us outlining important and often misunderstood concepts. 

## Table of Contents

1. [**CORE PATTERNS**](https://github.com/ahadb/javascript-patterns/tree/master/core-patterns)  
    1.1 [Variable Declaration](https://github.com/ahadb/javascript-patterns/tree/master/core-patterns#variable-declarations)  
    1.2 [`let` & `const`](https://github.com/ahadb/javascript-patterns/tree/master/core-patterns#let-and-const)   
    1.3 [Global Variables](https://github.com/ahadb/javascript-patterns/tree/master/core-patterns#global-variables)  
    1.4 [Coding & Naming Conventions](https://github.com/ahadb/javascript-patterns/tree/master/core-patterns#coding-and-naming-conventions)  
    1.5 [Commas, Comments, Semicolons & Whitespace](https://github.com/ahadb/javascript-patterns/tree/master/core-patterns#commas-comments-semicolons-and-whitespace)  
    1.6 [Strings](https://github.com/ahadb/javascript-patterns/tree/master/core-patterns#strings)  
    1.7 [Implicit Coercion](https://github.com/ahadb/javascript-patterns/tree/master/core-patterns#implicit-coercion)    
    1.8 [Iteration Statements / Loops](https://github.com/ahadb/javascript-patterns/blob/master/core-patterns/README.md#iteration-statements)  
    1.9 [Block Scope vs Lexical Scope](https://github.com/ahadb/javascript-patterns/blob/master/core-patterns/README.md#scope)  
    1.10 [Conditionals](https://github.com/ahadb/javascript-patterns/blob/master/core-patterns/README.md#conditionals)  
 
2. [**OBJECT PATTERNS**](https://github.com/ahadb/javascript-patterns/tree/master/object-patterns)  
    2.1 [Object Creation](https://github.com/ahadb/javascript-patterns/tree/master/object-patterns#object-creation)  
    2.2 [Object.create](https://github.com/ahadb/javascript-patterns/tree/master/object-patterns#object-create)  
    2.3 Object Enumeration  
    2.4 [Object Factory Pattern](https://github.com/ahadb/javascript-patterns/tree/master/object-patterns#object-factory-pattern)  
    2.5 [NameSpace Pattern](https://github.com/ahadb/javascript-patterns/tree/master/object-patterns#namespace-pattern)   
    2.6 [Module Pattern](https://github.com/ahadb/javascript-patterns/tree/master/object-patterns#module-pattern)    
    2.7 [Chaining Pattern](https://github.com/ahadb/javascript-patterns/tree/master/object-patterns#chaining-pattern)  
    2.8 [ES5 Constructor Function Pattern](https://github.com/ahadb/javascript-patterns/tree/master/object-patterns#es5-constructor-function-pattern)  
    2.9 ES6 Class Pattern   

3. ARRAY PATTERNS  
    3.1 Array Creation   
    3.2 Array Enumeration  
    3.3 Array Methods  
    3.4 Functional Arrays     
   
4. FUNCTION PATTERNS  
    4.1 IIFE / IIAF  
    4.2 Immediate Object Initialization  
    4.3 Function Invocation  
    4.4 Returning from Functions  
    4.5 Callbacks  
    4.6 Closures  
    4.7 Higher Order Functions  
    4.8 Arrow Functions  
    4.9 Partial Application  
    4.10 The `this` Keyword  

5. DESIGN PATTERNS  
    5.1 Singleton  
    5.2 Factory   
    5.3 Iterator  
    5.4 Pub/Sub Pattern  
    5.5 Observer Pattern  
    5.6 Decorator Pattern  
    5.7 Facade Pattern  

6. ASYNC PATTERNS  
     6.1 Callbacks in Depth  
     6.2 Promises  
     6.3 Async Generators  
     6.4 Async Functions  
 
7. MODULE CREATION PATTERNS  
    7.1 Node & NPM    
    7.2 ES6  
    7.3 Babel  
 
8. LIBRARY CREATION PATTERNS  
    8.2 Authoring  
    8.2 Distribution  

9. MORE MODERN-ESQUE / ES6 PATTERNS  
    9.1 TypeScript  
    9.2 Rest  
    9.3 Destructuring      
    9.4 Array Spreads  
    9.5 Iterators and Generators  
    9.6 Default Parameters  

## Future of This Project
In future releases we will also cover Angular (2.x) and React patterns. The formula for adding patterns will be determinedby libraries / frameworks that hold the most market value. Once this repository contains enough information I'd like it to be converted into a full blown application so developers can cover a great deal and retain information in short, but more meaningful bursts.

## Publishing
When time permits, there will be a version out on Leanpub or Gitbook - it's too early to tell at this point, but the skies the limit.

## Training & Speaking
If you or your team of developers need hands on training regarding the material covered in this course please reach out to me: [ahadb.com](http://ahadb.com)

## Resources

### Blogs

* [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Scotch.io JavaScript](https://scotch.io/tag/javascript)
* [Raganwald by Reginald Braithwaite](http://raganwald.com/)
* [Sitepoint](https://www.sitepoint.com/javascript/raw-javascript/)
* [2@lity by Dr. Axel Rauschmayer](http://www.2ality.com/)
* [Toptal Engineering Blog](https://www.toptal.com/developers/blog)
* [Ben Alman](http://benalman.com/)
* [David Walsh](https://davidwalsh.name/)
* [Perfection Kills by Kangax](http://perfectionkills.com/)
* [Douglas Crockford JavaScript](http://javascript.crockford.com/)
* [Pony Foo](https://ponyfoo.com/)

### Books
* [JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/) - Addy Osmani
* [Human JS](http://read.humanjavascript.com/) - Henrik Joreteg
* [Object Oriented JavaScript](https://www.amazon.com/Object-Oriented-JavaScript-Stoyan-Stefanov-ebook/dp/B0057UNEJC) - Stoyan Stefanov
* [JavaScript Patterns](http://shop.oreilly.com/product/9780596806767.do) - Stoyan Stefanov
* [You Don't Know JS](http://shop.oreilly.com/category/get/kyle-simpson-kit.do) - Kyle Simpson
* [Eloquent JavaScript](http://eloquentjavascript.net/) - Marijn Haverbeke
* [JavaScript: The Good Parts](http://shop.oreilly.com/product/9780596517748.do) - Douglas Crockford
* [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](https://www.amazon.com/Effective-JavaScript-Specific-Software-Development/dp/0321812182) - David Herman
* [Maintainable JavaScript](https://www.amazon.com/Maintainable-JavaScript-Writing-Readable-Code/dp/1449327680/ref=sr_1_sc_1?s=books&ie=UTF8&qid=1480954592&sr=1-1-spell&keywords=maintanable+javascript) - Nicholas C. Zakas
* [Professional JavaScript for Web Developers](http://shop.oreilly.com/product/9781118026694.do) - Nicholas C. Zakas 


## Contributing
Feel free to contribute to this repository by sending a PR for a specific pattern that you would like to see added. A guide will be
put up shortly. 
