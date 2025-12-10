# Scope and Hoisting in JavaScript

## Overview

Scope and hoisting are fundamental concepts in JavaScript that determine the accessibility of variables and functions at various parts of your code. Understanding them is crucial for writing predictable and bug-free programs.

## 1. What is Scope?

Scope is the context in which variables and functions are declared and can be accessed. It defines the visibility and lifetime of identifiers.

### Types of Scope

1.  **Global Scope**: Variables declared outside of any function or block are in the global scope. They are accessible from anywhere in the code.
2.  **Function Scope**: Variables declared inside a function are only accessible within that function.
3.  **Block Scope (ES6+)**: Variables declared with `let` and `const` inside a block (`{...}`) are only accessible within that block.

### Global Scope

```javascript
// This variable is in the global scope
let globalVar = "I am global";

function checkGlobal() {
    console.log(globalVar); // Accessible here
}

checkGlobal();
console.log(globalVar); // Also accessible here

// Avoid creating global variables unless necessary, as they can cause conflicts.
// In a browser, global variables become properties of the `window` object.
// window.globalVar is the same as globalVar
```

### Function Scope

Variables declared with `var` are function-scoped.

```javascript
function myFunction() {
    var functionScopedVar = "I am local to the function";
    console.log(functionScopedVar); // Accessible
}

myFunction();
// console.log(functionScopedVar); // ReferenceError: functionScopedVar is not defined
```

### Block Scope

Variables declared with `let` and `const` are block-scoped. A block is any code within curly braces `{}` (e.g., `if`, `for`, `while`).

```javascript
if (true) {
    let blockScopedLet = "Visible only inside this block";
    const blockScopedConst = "Also only visible here";
    var functionScopedVar = "Visible throughout the function";
    
    console.log(blockScopedLet);   // Accessible
    console.log(blockScopedConst); // Accessible
}

// console.log(blockScopedLet);   // ReferenceError
// console.log(blockScopedConst); // ReferenceError
console.log(functionScopedVar); // "Visible throughout the function" (`var` is not block-scoped)
```

### Lexical Scope (Static Scope)

JavaScript has lexical scope, which means the scope of a variable is determined by its position in the source code at the time of writing, not at runtime. An inner function can access variables from its outer (parent) function.

```javascript
function outer() {
    let outerVar = "I am from the outer function";

    function inner() {
        let innerVar = "I am from the inner function";
        // The inner function can access the outer function's variables
        console.log(outerVar); 
    }

    inner();
    // console.log(innerVar); // ReferenceError: innerVar is not defined here
}

outer(); // "I am from the outer function"
```

## 2. What is Hoisting?

Hoisting is JavaScript's default behavior of moving declarations to the top of their current scope (global, function, or block) before code execution.

**Important**: Only the *declarations* are hoisted, not the *initializations*.

### Hoisting with `var`

`var` declarations are hoisted to the top of their function scope and are initialized with `undefined`.

```javascript
console.log(myVar); // undefined (No error, because the declaration was hoisted)

var myVar = "Hello, World!";

console.log(myVar); // "Hello, World!"

// The code is interpreted by the engine like this:
/*
var myVar; // Declaration is hoisted and initialized with undefined
console.log(myVar); // undefined
myVar = "Hello, World!"; // Initialization happens here
console.log(myVar); // "Hello, World!"
*/
```

### Hoisting with `let` and `const`

`let` and `const` declarations are also hoisted, but they are **not** initialized. They are in a "Temporal Dead Zone" (TDZ) from the start of the block until the declaration is encountered.

```javascript
// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
// This is the Temporal Dead Zone for myLet

let myLet = "I am a let variable";

console.log(myLet); // "I am a let variable"

// The TDZ prevents you from accidentally using a variable before it's declared.
```

### Hoisting with Functions

#### Function Declarations
The entire function (name and body) is hoisted.

```javascript
// You can call the function before it's declared
sayHello(); // "Hello!"

function sayHello() {
    console.log("Hello!");
}
```

#### Function Expressions
Only the variable declaration is hoisted, not the function body.

```javascript
// sayGoodbye(); // TypeError: sayGoodbye is not a function

var sayGoodbye = function() {
    console.log("Goodbye!");
};

sayGoodbye(); // "Goodbye!"

// The code is interpreted like this:
/*
var sayGoodbye; // Declaration is hoisted
// sayGoodbye(); // At this point, sayGoodbye is undefined, not a function
sayGoodbye = function() { ... }; // Initialization happens here
sayGoodbye();
*/
```

## 3. Scope Chain

When you try to access a variable, JavaScript looks for it in the current scope. If it can't find it, it looks in the outer scope, and so on, up to the global scope. This sequence of nested scopes is called the **scope chain**.

```javascript
let globalScopeVar = "Global";

function outerFunction() {
    let outerScopeVar = "Outer";

    function innerFunction() {
        let innerScopeVar = "Inner";
        
        // Accessing variables:
        console.log(innerScopeVar);  // Found in inner scope
        console.log(outerScopeVar);  // Found in outer scope (via scope chain)
        console.log(globalScopeVar); // Found in global scope (via scope chain)
    }

    innerFunction();
}

outerFunction();
```

## 4. Practical Examples and Best Practices

### Example 1: The Loop Problem with `var`

This classic example demonstrates the issue with `var` not being block-scoped.

```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        // By the time this runs, the loop has finished and `i` is 3.
        console.log(i); 
    }, 100);
}
// Output: 3, 3, 3

// With `let`, a new `i` is created for each iteration (block-scoped).
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        // Each function "closes over" a different `j`.
        console.log(j);
    }, 100);
}
// Output: 0, 1, 2
```

### Example 2: Shadowing

When you declare a variable in an inner scope with the same name as a variable in an outer scope, it's called "shadowing".

```javascript
let x = 10;

function shadowExample() {
    let x = 20; // This `x` shadows the global `x`
    console.log(x); // 20 (accesses the local `x`)
}

shadowExample();
console.log(x); // 10 (the global `x` is unaffected)
```

### Best Practices

1.  **Use `const` by default, `let` when you need to reassign.** This helps prevent accidental reassignment and makes your code more predictable.
2.  **Avoid `var` in modern JavaScript.** `let` and `const` provide block scope, which is more intuitive and less error-prone.
3.  **Declare variables at the top of their scope.** This makes your code easier to read and understand, even though hoisting happens automatically.
4.  **Minimize global variables.** Keep variables in the narrowest scope possible to avoid naming conflicts and make your code more modular.
5.  **Understand the Temporal Dead Zone.** Be aware that you cannot access `let` or `const` variables before their declaration.

## Summary

| Feature | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Scope** | Function | Block | Block |
| **Hoisting** | Declaration hoisted, initialized to `undefined` | Declaration hoisted, but **not** initialized (TDZ) | Declaration hoisted, but **not** initialized (TDZ) |
| **Re-declaration** | ✅ Allowed in the same scope | ❌ Not allowed in the same scope | ❌ Not allowed in the same scope |
| **Re-assignment** | ✅ Allowed | ✅ Allowed | ❌ Not allowed |
| **Global Object** | Creates a property on the global object | Does not create a property | Does not create a property |

A solid grasp of scope and hoisting will help you debug issues related to variable access and understand why your code behaves the way it does.