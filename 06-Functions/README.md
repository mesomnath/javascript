# Functions in JavaScript

## 📌 What are Functions?

Functions are reusable blocks of code designed to perform a specific task. They help organize code, promote reusability, and make programs more maintainable.

```javascript
// Without function (repetitive)
console.log("Hello, John!");
console.log("Hello, Jane!");
console.log("Hello, Bob!");

// With function (reusable)
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("John");
greet("Jane");
greet("Bob");
```

## 🎯 Function Declaration

The traditional way to define a function.

### Syntax
```javascript
function functionName(parameters) {
    // Function body
    return value;  // Optional
}
```

### Examples
```javascript
// Simple function
function sayHello() {
    console.log("Hello!");
}

sayHello();  // Call the function

// Function with parameters
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("John");  // "Hello, John!"

// Function with return value
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum);  // 8

// Multiple parameters
function introduce(firstName, lastName, age) {
    return `I'm ${firstName} ${lastName}, ${age} years old.`;
}

console.log(introduce("John", "Doe", 30));
```

## 📝 Function Expression

Assign a function to a variable.

```javascript
// Anonymous function expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("John"));  // "Hello, John!"

// Named function expression
const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);  // Can call itself by name
};

console.log(factorial(5));  // 120

// Difference: Function expressions are NOT hoisted
// sayHi();  // Error: Cannot access before initialization
const sayHi = function() {
    console.log("Hi!");
};
```

## ➡️ Arrow Functions (ES6)

Modern, concise syntax for functions.

### Syntax
```javascript
// Basic syntax
const functionName = (parameters) => {
    // Function body
    return value;
};

// Shorthand for single expression (implicit return)
const functionName = (parameters) => expression;

// Single parameter (parentheses optional)
const functionName = parameter => expression;
```

### Examples
```javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function (full syntax)
const add = (a, b) => {
    return a + b;
};

// Arrow function (shorthand - implicit return)
const add = (a, b) => a + b;

// Single parameter
const square = x => x * x;
console.log(square(5));  // 25

// No parameters
const sayHello = () => console.log("Hello!");

// Multiple statements
const greet = name => {
    const message = `Hello, ${name}!`;
    console.log(message);
    return message;
};

// Returning object (wrap in parentheses)
const createPerson = (name, age) => ({ name, age });
console.log(createPerson("John", 30));  // { name: "John", age: 30 }
```

### Arrow Functions vs Regular Functions
```javascript
// 1. Arrow functions don't have their own 'this'
const obj = {
    name: "John",
    regularFunc: function() {
        console.log(this.name);  // "John"
    },
    arrowFunc: () => {
        console.log(this.name);  // undefined (inherits from outer scope)
    }
};

// 2. Arrow functions can't be used as constructors
const Person = (name) => {
    this.name = name;
};
// new Person("John");  // Error!

// 3. Arrow functions don't have 'arguments' object
function regular() {
    console.log(arguments);  // Works
}

const arrow = () => {
    // console.log(arguments);  // Error!
};
```

## 🔙 Return Statement

Returns a value from a function and stops execution.

```javascript
function add(a, b) {
    return a + b;
    console.log("This won't run");  // Unreachable code
}

// Return stops execution
function checkAge(age) {
    if (age < 18) {
        return "Too young";
    }
    return "Old enough";
}

// Multiple return statements
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

// No return = undefined
function noReturn() {
    console.log("Hello");
}
console.log(noReturn());  // undefined
```

## 📊 Parameters and Arguments

### Default Parameters (ES6)
```javascript
// Old way
function greet(name) {
    name = name || "Guest";
    console.log(`Hello, ${name}!`);
}

// Modern way (ES6)
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet("John");  // "Hello, John!"
greet();        // "Hello, Guest!"

// Multiple defaults
function createUser(name = "Anonymous", age = 0, country = "Unknown") {
    return { name, age, country };
}

console.log(createUser("John", 30));
// { name: "John", age: 30, country: "Unknown" }
```

### Rest Parameters (ES6)
```javascript
// Collect remaining arguments into array
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15

// Mix regular and rest parameters
function introduce(firstName, lastName, ...hobbies) {
    console.log(`${firstName} ${lastName}`);
    console.log(`Hobbies: ${hobbies.join(", ")}`);
}

introduce("John", "Doe", "Reading", "Gaming", "Coding");
// John Doe
// Hobbies: Reading, Gaming, Coding

// Rest parameter must be last
// function invalid(...rest, last) { }  // Error!
```

### Arguments Object (Legacy)
```javascript
// Available in regular functions (not arrow functions)
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3, 4));  // 10

// Convert to array
function toArray() {
    return Array.from(arguments);
    // Or: return [...arguments];
}
```

## 🎭 Function Scope

Variables declared in a function are local to that function.

```javascript
// Global scope
let globalVar = "I'm global";

function test() {
    // Local scope
    let localVar = "I'm local";
    console.log(globalVar);  // Accessible
    console.log(localVar);   // Accessible
}

test();
console.log(globalVar);  // Accessible
// console.log(localVar);  // Error: not defined

// Block scope with let/const
function demo() {
    if (true) {
        let blockVar = "Block scope";
        console.log(blockVar);  // Accessible
    }
    // console.log(blockVar);  // Error: not defined
}

// Scope chain
let a = "global";

function outer() {
    let b = "outer";
    
    function inner() {
        let c = "inner";
        console.log(a, b, c);  // All accessible
    }
    
    inner();
    // console.log(c);  // Error: not defined
}

outer();
```

## 🔄 Hoisting

Function declarations are hoisted, function expressions are not.

```javascript
// ✅ Function declaration (hoisted)
sayHello();  // Works!

function sayHello() {
    console.log("Hello!");
}

// ❌ Function expression (not hoisted)
// sayHi();  // Error: Cannot access before initialization

const sayHi = function() {
    console.log("Hi!");
};

// ❌ Arrow function (not hoisted)
// greet();  // Error

const greet = () => console.log("Greetings!");
```

## 🎲 IIFE (Immediately Invoked Function Expression)

Function that runs immediately after being defined.

```javascript
// Basic IIFE
(function() {
    console.log("I run immediately!");
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})("John");

// Arrow function IIFE
(() => {
    console.log("Arrow IIFE!");
})();

// Use case: Private scope
const counter = (function() {
    let count = 0;  // Private variable
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
})();

console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.getValue());   // 2
// console.log(count);  // Error: not accessible
```

## 🎯 Callback Functions

Functions passed as arguments to other functions.

```javascript
// Basic callback
function processUser(name, callback) {
    console.log(`Processing ${name}...`);
    callback(name);
}

processUser("John", function(name) {
    console.log(`Welcome, ${name}!`);
});

// Array methods use callbacks
let numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(function(num) {
    console.log(num * 2);
});

// map
let doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4]

// reduce
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 15

// Asynchronous callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log(data);
});
```

## 🏗️ Higher-Order Functions

Functions that take functions as arguments or return functions.

```javascript
// Function that returns a function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// Function that takes a function
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);  // 0, 1, 2

// Practical example: custom filter
function greaterThan(n) {
    return function(m) {
        return m > n;
    };
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(15));  // true
console.log(greaterThan10(5));   // false
```

## 💡 Best Practices

### 1. Use Descriptive Names
```javascript
// ❌ Avoid
function f(x, y) { return x + y; }

// ✅ Better
function addNumbers(a, b) { return a + b; }
```

### 2. Keep Functions Small and Focused
```javascript
// ❌ Doing too much
function processUserAndSendEmail(user) {
    // Validate user
    // Save to database
    // Generate email
    // Send email
    // Log activity
}

// ✅ Single responsibility
function validateUser(user) { }
function saveUser(user) { }
function sendWelcomeEmail(user) { }
```

### 3. Use Default Parameters
```javascript
// ❌ Old way
function greet(name) {
    name = name || "Guest";
}

// ✅ Modern way
function greet(name = "Guest") { }
```

### 4. Return Early
```javascript
// ❌ Nested conditions
function processUser(user) {
    if (user) {
        if (user.active) {
            if (user.age >= 18) {
                return "Process";
            }
        }
    }
    return "Cannot process";
}

// ✅ Guard clauses
function processUser(user) {
    if (!user) return "Cannot process";
    if (!user.active) return "Cannot process";
    if (user.age < 18) return "Cannot process";
    return "Process";
}
```

### 5. Use Arrow Functions Appropriately
```javascript
// ✅ Good for callbacks
array.map(x => x * 2);
setTimeout(() => console.log("Done"), 1000);

// ❌ Don't use for methods needing 'this'
const obj = {
    value: 10,
    // ❌ Wrong
    getValue: () => this.value,  // undefined
    // ✅ Correct
    getValue: function() { return this.value; }
};
```

## 🧪 Practice Examples

### Example 1: Temperature Converter
```javascript
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

console.log(celsiusToFahrenheit(0));   // 32
console.log(fahrenheitToCelsius(32));  // 0
```

### Example 2: Palindrome Checker
```javascript
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("racecar"));  // true
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("A man, a plan, a canal: Panama"));  // true
```

### Example 3: Fibonacci
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Generate first n Fibonacci numbers
function fibonacciSequence(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fibonacci(i));
    }
    return result;
}

console.log(fibonacciSequence(10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

### Example 4: Array Utilities
```javascript
// Find maximum
const findMax = arr => Math.max(...arr);

// Find minimum
const findMin = arr => Math.min(...arr);

// Calculate average
const average = arr => arr.reduce((sum, num) => sum + num, 0) / arr.length;

// Remove duplicates
const removeDuplicates = arr => [...new Set(arr)];

let numbers = [1, 2, 3, 4, 5, 3, 2, 1];
console.log(findMax(numbers));         // 5
console.log(findMin(numbers));         // 1
console.log(average(numbers));         // 2.625
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5]
```

### Example 5: String Utilities
```javascript
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const reverseString = str => str.split('').reverse().join('');

const countVowels = str => {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(char => vowels.includes(char)).length;
};

const truncate = (str, length) => {
    return str.length > length ? str.slice(0, length) + '...' : str;
};

console.log(capitalize("hello"));      // "Hello"
console.log(reverseString("hello"));   // "olleh"
console.log(countVowels("hello"));     // 2
console.log(truncate("Hello World", 5)); // "Hello..."
```

## 📚 Interview Questions & Answers

### Q1: What is the difference between function declaration and function expression?
**Answer**:
- **Function Declaration**: Hoisted, can be called before definition
- **Function Expression**: Not hoisted, must be defined before use

```javascript
// Function Declaration
sayHello();  // Works!
function sayHello() { console.log("Hello"); }

// Function Expression
// sayHi();  // Error!
const sayHi = function() { console.log("Hi"); };
```

### Q2: What are arrow functions and how are they different?
**Answer**: Arrow functions are a shorter syntax for functions (ES6). Key differences:
- No own `this` binding (inherits from parent scope)
- Cannot be used as constructors
- No `arguments` object
- Implicit return for single expressions

```javascript
// Regular
function add(a, b) {
    return a + b;
}

// Arrow
const add = (a, b) => a + b;
```

### Q3: What are default parameters?
**Answer**: Default values assigned to parameters if no argument is provided (ES6).

```javascript
function greet(name = "Guest", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

greet("John");           // "Hello, John!"
greet();                 // "Hello, Guest!"
greet("John", "Hi");     // "Hi, John!"
```

### Q4: What is the rest parameter?
**Answer**: Collects remaining arguments into an array (ES6). Must be the last parameter.

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // 15
```

### Q5: What is a callback function?
**Answer**: A function passed as an argument to another function, to be executed later.

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback({ name: "John" });
    }, 1000);
}

fetchData(function(data) {
    console.log(data);
});
```

### Q6: What is a higher-order function?
**Answer**: A function that takes a function as an argument or returns a function.

```javascript
// Takes function as argument
function repeat(n, action) {
    for (let i = 0; i < n; i++) action(i);
}

// Returns function
function multiplier(factor) {
    return num => num * factor;
}

const double = multiplier(2);
```

### Q7: What is an IIFE?
**Answer**: Immediately Invoked Function Expression - a function that runs immediately after being defined.

```javascript
(function() {
    console.log("I run immediately!");
})();

// Use case: Create private scope
const module = (function() {
    let private = "secret";
    return {
        getPrivate: () => private
    };
})();
```

### Q8: What is function hoisting?
**Answer**: Function declarations are moved to the top of their scope during compilation.

```javascript
sayHello();  // Works! (hoisted)

function sayHello() {
    console.log("Hello");
}

// But function expressions are NOT hoisted
// sayHi();  // Error!
const sayHi = function() { console.log("Hi"); };
```

### Q9: What is the difference between parameters and arguments?
**Answer**:
- **Parameters**: Variables in function definition
- **Arguments**: Actual values passed when calling function

```javascript
function add(a, b) {  // a, b are parameters
    return a + b;
}

add(5, 3);  // 5, 3 are arguments
```

### Q10: What does return do in a function?
**Answer**: 
- Returns a value from the function
- Stops function execution immediately
- If no return or no value, returns `undefined`

```javascript
function add(a, b) {
    return a + b;
    console.log("Never runs");
}

function noReturn() {
    console.log("Hello");
}

console.log(add(5, 3));      // 8
console.log(noReturn());     // undefined
```

## 🎓 Key Takeaways

- Functions organize and reuse code
- Three types: declarations, expressions, arrow functions
- Arrow functions have different `this` behavior
- Use default parameters for optional arguments
- Rest parameters collect multiple arguments
- Callbacks enable asynchronous operations
- Higher-order functions provide powerful abstractions
- Return early for cleaner code
- Keep functions small and focused

## 🔗 Next Steps

You've completed the Basics section! Next, move to:
- [02-Intermediate](../../02-Intermediate/README.md) for Arrays, Objects, and DOM manipulation

---

**Practice Challenge**: Create a calculator module using IIFE that has private state and public methods for basic arithmetic operations!
