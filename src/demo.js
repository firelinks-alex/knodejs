/*
 * Variable Declaration:
 * There are three ways to declare a variable in JS
 * 1. let
 * 2. const
 * 3. var
 *
 * Variables, declared with 'var', are either function-scoped or global-scoped.
 * But NOT block scoped.
 */
for (var i = 0; i < 10; i++) {
    var var_number = 100;
    let let_number = 500;
}
/*
 * The lifecycle of both 'i' and 'var_number' in the 'for' block above
 * won't expire here due to the 'var' declaration.
 */
console.log(i); // 10
console.log(var_number); // 100
/*
 * However, 'let' declaration will expire because its lifecycle is block-scoped.
 */
// console.log(let_number); // ReferenceError: is not defined

function test_local_var() {
    var local_var_number = 1000;
}

test_local_var();
/*
 * Although 'var' isn't block bound it is still function-scoped.
 */
// console.log(local_var_number); // ReferenceError: local_var_number is not defined

/*
 * 'var' allows re-declaration but 'let' doesn't
 */
var user = 'John';
var user = 'Adam';
let password = '123';
// let password = '456'; // SyntaxError: Identifier 'password' has already been declared

/*
 * Declarations are hoisted, but assignments are not:
 * variables declared both 'var' and 'let' are hoisted, meaning
 * their variable declarations are moved to the beginning of the file.
 * However, referencing a variable declared with 'var' before it's initialized
 * will return 'undefined' and referencing a variable declared with 'let'
 * will cause error ReferenceError: Cannot access 'xxx' before initialization
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

// sayHello(); // this will cause error because 'undefined' is not a function:
// sayMyName(); ReferenceError: Cannot access 'sayMyName' before initialization
var sayHello = function() {
  console.log("I am saying hello");
}

let sayMyName = function() {
  console.log('I am Hisenburg');
}

function hoistingInFunction() {
  console.log(local_hoisted_number);
  let local_hoisted_number = 500;
}
// hoistingInFunction(); // ReferenceError: Cannot access 'local_hoisted_number' before initialization

/*
 * the following code is called IIFE (immidiately-invoked function expression)
 * and it's used in the back days for overcoming the leaking 'var' variables.
 * Because old JS didn't have block scoped variables, taking advantage of function-scoped variables were necessary.
 * This syntax is now outdated!
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
var myGlobalNumber = 10; // this won't automatically become global.myGlobalNumber
global.myList = [1, 2, 3];
console.log(global.myList);
console.log(global.myGlobalNumber); // undefined
