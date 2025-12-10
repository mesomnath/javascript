# ES6+ Features in JavaScript

## Overview

ECMAScript 2015 (ES6) was a major update to JavaScript, introducing a wealth of new features that make the language more powerful, expressive, and easier to work with. Since then, new features have been added every year. This guide covers some of the most important and commonly used features from ES6 and beyond.

---

## 1. `let` and `const`

`let` and `const` are new ways to declare variables that offer **block scope**, unlike `var` which has function scope.

-   **`let`**: Allows you to declare a block-scoped variable that can be reassigned.
-   **`const`**: Allows you to declare a block-scoped variable that **cannot** be reassigned. For objects and arrays, this means the reference is constant, but the contents can still be modified.

```javascript
let name = "Alice";
name = "Bob"; // Allowed

const birthYear = 1990;
// birthYear = 1991; // TypeError: Assignment to constant variable.

const person = { name: "Charlie" };
person.name = "David"; // Allowed, because we are modifying the object's property, not the reference.
// person = { name: "Eve" }; // TypeError, cannot reassign the constant reference.

// Block Scope Example
if (true) {
    let x = 10;
    const y = 20;
    var z = 30;
}
// console.log(x); // ReferenceError: x is not defined
// console.log(y); // ReferenceError: y is not defined
console.log(z); // 30 (`var` is not block-scoped)
```
**Best Practice**: Use `const` by default and `let` only when you know you'll need to reassign the variable. Avoid `var`.

---

## 2. Arrow Functions

Arrow functions provide a more concise syntax for writing function expressions. They also behave differently with the `this` keyword.

-   **Concise Syntax**:
    ```javascript
    // Traditional function expression
    const add = function(a, b) {
        return a + b;
    };

    // Arrow function
    const addArrow = (a, b) => a + b; // Implicit return for single expressions

    // With a function body
    const subtract = (a, b) => {
        const result = a - b;
        return result;
    };
    ```

-   **Lexical `this`**: Arrow functions do not have their own `this` context. Instead, they inherit `this` from their surrounding (lexical) scope. This is extremely useful in event handlers and methods.

    ```javascript
    function Timer() {
        this.seconds = 0;

        // In a traditional function, `this` would be the global object (or undefined).
        // setInterval(function() {
        //     this.seconds++; // `this` is not the Timer instance
        // }, 1000);

        // With an arrow function, `this` is correctly bound to the Timer instance.
        setInterval(() => {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    }

    const myTimer = new Timer();
    ```

---

## 3. Template Literals

Template literals provide an easier way to create strings with embedded expressions. They are enclosed in backticks (`` ` ``) instead of single or double quotes.

```javascript
const userName = "Guest";
const itemsInCart = 3;

// Old way
const messageOld = "Welcome, " + userName + "! You have " + itemsInCart + " items in your cart.";

// With template literals
const messageNew = `Welcome, ${userName}! You have ${itemsInCart} items in your cart.`;

// They also support multi-line strings
const multiLine = `
This is a string
that spans across
multiple lines.
`;
```

---

## 4. Destructuring Assignment

Destructuring allows you to unpack values from arrays or properties from objects into distinct variables.

### Object Destructuring

```javascript
const user = {
    id: 101,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
};

// Extract properties into variables
const { firstName, email } = user;
console.log(firstName); // "John"
console.log(email);     // "john.doe@example.com"

// Renaming variables
const { firstName: fName, lastName: lName } = user;
console.log(fName); // "John"

// Providing default values
const { country = "USA" } = user;
console.log(country); // "USA"
```

### Array Destructuring

```javascript
const numbers = [10, 20, 30, 40, 50];

// Extract values by position
const [first, second] = numbers;
console.log(first);  // 10
console.log(second); // 20

// Skipping elements
const [a, , c] = numbers;
console.log(c); // 30
```

---

## 5. Rest and Spread Operators (`...`)

The `...` syntax can be used for both "rest" and "spread" operations, depending on the context.

### Rest Operator
The rest operator collects the "rest" of the elements into an array. It's often used in function parameters.

```javascript
function sum(...numbers) {
    // `numbers` is an array containing all arguments passed to the function.
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100

// Can be combined with other parameters
function logFamily(parent1, parent2, ...children) {
    console.log(`Parents: ${parent1} and ${parent2}`);
    console.log("Children:", children.join(", "));
}

logFamily("Alice", "Bob", "Charlie", "Diana", "Eve");
```

### Spread Operator
The spread operator "spreads" the elements of an iterable (like an array or string) into another array, or into the arguments of a function call.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Create a copy of an array
const arr1Copy = [...arr1];

// Use in function calls
const nums = [10, 20, 30];
console.log(Math.max(...nums)); // Equivalent to Math.max(10, 20, 30)

// Create a copy of an object (ES2018)
const originalObj = { a: 1, b: 2 };
const copiedObj = { ...originalObj, c: 3 }; // { a: 1, b: 2, c: 3 }
```

---

## 6. Default Parameters

You can now provide default values for function parameters directly in the function signature.

```javascript
function greet(name = "Guest", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

greet("Alice", "Hi"); // "Hi, Alice!"
greet("Bob");         // "Hello, Bob!"
greet();              // "Hello, Guest!"
```

---

## 7. Promises and `async/await`

These features revolutionized asynchronous programming in JavaScript.

-   **Promises**: A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It can be in one of three states: `pending`, `fulfilled`, or `rejected`.

    ```javascript
    const fetchData = new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data.");
            }
        }, 1000);
    });

    fetchData
        .then(response => console.log(response)) // Handles success
        .catch(error => console.error(error));   // Handles failure
    ```

-   **`async/await` (ES2017)**: This is syntactic sugar built on top of Promises, making asynchronous code look and behave more like synchronous code.

    -   `async`: Placed before a function to indicate it returns a Promise.
    -   `await`: Used inside an `async` function to pause execution until a Promise is settled.

    ```javascript
    async function displayData() {
        try {
            console.log("Fetching data...");
            const data = await fetchData; // Pauses here until the promise resolves
            console.log(data); // "Data fetched successfully!"
            console.log("Done.");
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    displayData();
    ```

---

## 8. Optional Chaining (`?.`) and Nullish Coalescing (`??`) (ES2020)

-   **Optional Chaining (`?.`)**: Prevents errors when trying to access properties of an object that may be `null` or `undefined`.

    ```javascript
    const userProfile = {
        info: {
            name: "Jane",
            // address is missing
        }
    };

    // Without optional chaining, this would throw a TypeError
    // const city = userProfile.info.address.city; 

    // With optional chaining, it returns `undefined` instead of an error.
    const city = userProfile.info.address?.city;
    console.log(city); // undefined
    ```

-   **Nullish Coalescing (`??`)**: A logical operator that returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand. It's a safer alternative to the `||` operator, which triggers on any "falsy" value (like `0`, `''`, `false`).

    ```javascript
    let volume = 0;

    // Using ||, 0 is falsy, so it defaults to 50.
    const setting1 = volume || 50; 
    console.log(setting1); // 50 (Incorrect if 0 is a valid setting)

    // Using ??, it only defaults if volume is null or undefined.
    const setting2 = volume ?? 50;
    console.log(setting2); // 0 (Correct)
    ```