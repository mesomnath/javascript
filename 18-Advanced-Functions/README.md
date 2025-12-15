# Advanced Function Concepts

## 📌 Mastering Functions

Deep dive into advanced function patterns and functional programming concepts.

## Higher-Order Functions

Functions that take functions as arguments or return functions.

```javascript
// Takes function as argument
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log); // 0, 1, 2

// Returns function
function multiplier(factor) {
    return number => number * factor;
}

const double = multiplier(2);
const triple = multiplier(3);
```

## Pure Functions

Functions without side effects that always return same output for same input.

```javascript
// ✅ Pure
function add(a, b) {
    return a + b;
}

// ❌ Impure (side effect)
let total = 0;
function addToTotal(x) {
    total += x; // Modifies external state
    return total;
}

// ❌ Impure (non-deterministic)
function getTime() {
    return new Date().getTime(); // Different each call
}
```

## Function Currying

Transform function with multiple arguments into sequence of functions with single argument.

```javascript
// Regular function
function add(a, b, c) {
    return a + b + c;
}

// Curried version
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

curriedAdd(1)(2)(3); // 6

// Arrow function version
const curriedAdd = a => b => c => a + b + c;

// Practical use
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

## Partial Application

```javascript
function partial(fn, ...fixedArgs) {
    return function(...remainingArgs) {
        return fn(...fixedArgs, ...remainingArgs);
    };
}

function greet(greeting, name) {
    return `${greeting}, ${name}!`;
}

const sayHello = partial(greet, "Hello");
console.log(sayHello("John"));  // "Hello, John!"
```

## Function Composition

Combine multiple functions into one.

```javascript
// Manual composition
const add1 = x => x + 1;
const multiply2 = x => x * 2;
const square = x => x * x;

const result = square(multiply2(add1(5))); // 144

// Compose utility
const compose = (...fns) => x => 
    fns.reduceRight((acc, fn) => fn(acc), x);

const compute = compose(square, multiply2, add1);
console.log(compute(5)); // 144

// Pipe (left to right)
const pipe = (...fns) => x => 
    fns.reduce((acc, fn) => fn(acc), x);

const compute2 = pipe(add1, multiply2, square);
console.log(compute2(5)); // 144
```

## Memoization

Cache function results for performance.

```javascript
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Expensive function
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fastFib = memoize(fibonacci);
console.log(fastFib(40)); // Much faster!
```

## IIFE (Immediately Invoked Function Expression)

```javascript
// Basic IIFE
(function() {
    console.log("Runs immediately!");
})();

// With parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})("John");

// Arrow IIFE
(() => {
    console.log("Arrow IIFE");
})();

// Module pattern
const counter = (function() {
    let count = 0;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        value: () => count
    };
})();
```

## Function Generators (ES6)

```javascript
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// Infinite generator
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const ids = idGenerator();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
```

## Recursion

```javascript
// Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Tree traversal
function traverse(node) {
    console.log(node.value);
    if (node.children) {
        node.children.forEach(child => traverse(child));
    }
}
```

## Interview Questions

**Q: What is a higher-order function?**
A: Function that takes a function as argument or returns a function.

**Q: What is a pure function?**
A: Function without side effects, always returns same output for same input.

**Q: What is currying?**
A: Transforming function with multiple arguments into sequence of single-argument functions.

**Q: What is function composition?**
A: Combining multiple functions into one: `compose(f, g, h)(x) = f(g(h(x)))`

**Q: What is memoization?**
A: Caching function results to avoid repeated expensive calculations.

**Q: What is an IIFE?**
A: Function that runs immediately after definition, useful for creating scope.

**Q: What are generators?**
A: Functions that can pause execution and resume, defined with `function*` and `yield`.

[See Modules](../05-Modules/README.md) | [Continue to Expert](../../04-Expert/README.md)
