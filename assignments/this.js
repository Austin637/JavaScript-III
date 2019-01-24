/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is when a browser window is the default object that when you arent creating a new object with the other three bindings.  
* 2. Implicit binding is when a method is called on an object, auto binding happens. Method inside object and called to object.
* 3. New binding is when using the new keyword, a new object is created from constructor.q
* 4. Explicit binding is when it's explicitly stated and binds by calling a function w/ an object. Using .apply() and .call() on functions.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
const favoriteColor = function() {
    console.log(this.color);
   }
   
   favoriteColor();

// Principle 2

// code example for Implicit Binding
const austinEsp = {
    name: 'Austin',
    color: 'blue',
    food: 'ice-cream',
    favoriteColor: function() {
     console.log(`${this.name}'s favorite color is ${this.color}.`)
    }
   }
   
   austinEsp.favoriteColor();

// Principle 3

// code example for New Binding
function Person(name, color) {
    this.name = name;
    this.color = color;
   }
   
   const bobby = new Person('Bobby', 'purple');
   
   console.log(bobby);

// Principle 4

// code example for Explicit Binding
let favoriteFood = function() {
    console.log(`${this.name}'s favorite food is ${this.food}.`)
   }
   
   favoriteFood.call(austinEsp);