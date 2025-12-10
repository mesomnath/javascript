# Higher-Order Functions in JavaScript

## Overview

A function that either takes one or more functions as arguments, or returns a function as its result, is called a **higher-order function**. This is a core concept in functional programming and is possible in JavaScript because functions are "first-class citizens."

**First-Class Citizens** means that functions can be treated like any other value:
-   They can be assigned to variables.
-   They can be stored in arrays or objects.
-   They can be passed as arguments to other functions.
-   They can be returned from other functions.

This ability is what makes higher-order functions possible.

## Functions as Arguments (Callbacks)

The most common use of higher-order functions is to pass a function as an argument to another function. This argument function is known as a **callback function** because it is "called back" by the higher-order function at the appropriate time.

Many of JavaScript's built-in array methods are higher-order functions.

### Example: `Array.prototype.map()`

The `map()` method creates a new array by calling a provided function on every element in the calling array.

```javascript
const numbers = [1, 2, 3, 4];

// `double` is the callback function.
// `map` is the higher-order function.
function double(number) {
    return number * 2;
}

const doubledNumbers = numbers.map(double);

console.log(doubledNumbers); // [2, 4, 6, 8]

// You can also use an anonymous function or an arrow function directly.
const tripledNumbers = numbers.map(function(num) {
    return num * 3;
});

const quadrupledNumbers = numbers.map(num => num * 4);

console.log(tripledNumbers);   // [3, 6, 9, 12]
console.log(quadrupledNumbers); // [4, 8, 12, 16]
```

### Example: Creating Your Own Higher-Order Function

Let's create a simple higher-order function that mimics `map`.

```javascript
function myMap(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        // Call the callback for each element and push the result.
        newArray.push(callback(array[i]));
    }
    return newArray;
}

const original = [5, 10, 15];
const squared = myMap(original, num => num * num);

console.log(squared); // [25, 100, 225]
```

## Functions as Return Values (Function Factories)

Higher-order functions can also return a new function. This is a powerful pattern for creating "function factories" that generate specialized functions based on some input. This pattern heavily relies on **closures**.

### Example: `createMultiplier()`

Let's create a function that generates other functions, each designed to multiply by a specific number.

```javascript
// `createMultiplier` is a higher-order function because it returns a function.
function createMultiplier(factor) {
    // This inner function is a closure. It "remembers" the `factor`
    // from its parent scope even after `createMultiplier` has finished executing.
    return function(number) {
        return number * factor;
    };
}

// Create a function that doubles a number.
const double = createMultiplier(2);

// Create a function that triples a number.
const triple = createMultiplier(3);

console.log(double(10)); // 20
console.log(triple(10)); // 30

// You can also call it directly.
const result = createMultiplier(5)(8);
console.log(result); // 40
```

### Example: `createGreeter()`

This factory creates functions that greet in different languages.

```javascript
function createGreeter(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

const greetInSpanish = createGreeter("Hola");
const greetInFrench = createGreeter("Bonjour");

greetInSpanish("Carlos"); // "Hola, Carlos!"
greetInFrench("Sophie");  // "Bonjour, Sophie!"
```

## Practical Use Cases

1.  **Asynchronous Operations**: Callbacks are the foundation of handling asynchronous tasks like fetching data from an API, handling user events, or timers.

    ```javascript
    console.log("Start");

    // `setTimeout` is a higher-order function.
    // The anonymous function is the callback.
    setTimeout(() => {
        console.log("This runs after 2 seconds.");
    }, 2000);

    console.log("End");
    ```

2.  **Array Methods**: As seen with `map`, other methods like `filter`, `reduce`, `forEach`, and `find` are all higher-order functions that make array manipulation concise and declarative.

    ```javascript
    const values = [0, 5, -10, 15, -2];

    // `filter` uses a callback that returns true or false.
    const positiveValues = values.filter(val => val >= 0);
    console.log(positiveValues); // [0, 5, 15]

    // `reduce` uses a callback to accumulate a single value.
    const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum); // 8
    ```

3.  **Event Listeners**: When you add an event listener, you pass a callback function to be executed when the event occurs.

    ```javascript
    const myButton = document.getElementById("myButton");

    // `addEventListener` is a higher-order function.
    function handleClick() {
        console.log("Button was clicked!");
    }

    myButton.addEventListener("click", handleClick);
    ```

## Summary

-   A **higher-order function** is a function that operates on other functions, either by taking them as arguments or by returning them.
-   **Callbacks** are functions passed as arguments to be executed later.
-   **Function factories** are functions that return new, specialized functions.
-   Higher-order functions are a cornerstone of functional programming in JavaScript, enabling more abstract, reusable, and readable code.
-   They are used everywhere in modern JavaScript, from array manipulation to asynchronous programming and event handling.