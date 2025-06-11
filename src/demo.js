import {my_awesome_func} from './custom-module.js'; // named import
import {another_var} from './another-module.js'

console.log(`another_var = ${another_var}`);

let message = 'Hello';  // the old javascript uses 'var'

/*
 * There are three ways to declare a variable in JS
 * 1. let
 * 2. const
 * 3. var
 *
 * Variables, declared with 'var', are either function-scoped or global-scoped.
 */

for (var i = 0; i < 10; i++) {
    var var_number = 100;
    let let_number = 500;
}

// in other languages both 'i' and 'var_number' lifecycle should expire
console.log(i); // 10
console.log(var_number); // 100
// console.log(let_number); // ReferenceError: is not defined

function test_local_var() {
    var local_var_number = 1000;
}

test_local_var();
// console.log(local_var_number); // ReferenceError: local_var_number is not defined

// var allows redeclaration but let doesn't
var user = 'John';
var user = 'Adam';
let password = '123';
// let password = '456'; // SyntaxError: Identifier 'password' has already been declared

/*
 * 'var and 'let' are hoisted differently:
 * variables declared both 'var' and 'let' are hoisted, meaning
 * their variable declarations are moved to the beginning of the file.
 * However, referencing a variable declared with 'var' before it's initialized
 * will return 'undefined' and referencing a variable declared with 'let'
 * will cause error ReferenceError: Cannot access 'xxx' before initialization
 *
 * note that: Declarations are hoisted, but assignments are not.
 */

console.log(hoisting_var);
var hoisting_var = 10;

// console.log(hoisting_let);
// let hoisting_let = 10; ReferenceError

/*
 * Additionally
 * functions declared with 'function' are not only hoisted but also fully usable
 * before initialization
 */

saySomething();
function saySomething() {
  console.log("I am saying something");
}

// this will cause error because 'undefined' is not a function:
// sayHello();
var sayHello = function() {
  console.log("I am saying hello");
}

let sayMyName = function() {
  console.log('I am Hisenburg');
}
sayMyName();

function hoistingInFunction() {
  console.log(local_hoisted_number);
  let local_hoisted_number = 500;
}

// hoistingInFunction(); // ReferenceError: Cannot access 'local_hoisted_number' before initialization

/*
 * the following code is called IIFE (immidiately-invoked function expression)
 * and it's used in the back days for overcoming the leaking 'var' variables.
 *
 * Because old JS didn't have block scoped variables, taking advantage of function scoped variables were necessary.
 * But this syntax is now outdated.
 *
 * check out https://javascript.info/var for the defailed explanation
 */
(function() {
  var message = 'Hello, this is IIFE';  // this var will leak if not put in a function
  console.log(message);
})(); // this will execute immidiately

// Equivalent code (modern):
{
  let message = "Hello, this is IIFE's counterpart";  // let is block-scoped
  console.log(message);
}

/*
 * Global variables:
 *  Built-ins: window (browser), global (node)
 */

global.myList = [1, 2, 3];
console.log(global.myList);







