# Closures in JavaScript

## 📌 What are Closures?

A closure is a function that has access to variables from its outer (enclosing) function's scope, even after the outer function has returned.

## Understanding Closures

```javascript
function outer() {
    let count = 0;
    
    function inner() {
        count++;
        console.log(count);
    }
    
    return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
// inner() still has access to 'count'!
```

## Lexical Scoping

```javascript
let name = "John";

function greet() {
    console.log(`Hello, ${name}`);
}

greet(); // "Hello, John"
// Function remembers where it was defined
```

## Practical Uses

### Private Variables
```javascript
function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count
    };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.getValue()); // 2
// console.log(count); // Error: count is private!
```

### Function Factory
```javascript
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

### Event Handlers
```javascript
function setupButton(buttonId) {
    let clickCount = 0;
    
    document.getElementById(buttonId).addEventListener('click', function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
}
```

## Common Pitfalls

### Loop Closure Issue
```javascript
// Problem
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 3, 3, 3 (wrong!)
    }, 100);
}

// Solution 1: Use let
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // 0, 1, 2 (correct!)
    }, 100);
}

// Solution 2: IIFE
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // 0, 1, 2
        }, 100);
    })(i);
}
```

## Interview Questions

**Q: What is a closure?**
A: A function that remembers and can access its lexical scope even when executed outside that scope.

**Q: Why do we need closures?**
A: For data privacy, function factories, callbacks, and maintaining state in async operations.

**Q: What are the disadvantages of closures?**
A: Memory consumption (variables aren't garbage collected) and potential memory leaks if not careful.

**Q: How do closures relate to scope?**
A: Closures capture variables from their lexical scope and keep them alive.

[See Advanced README](../README.md) | [Continue to Prototypes](../02-Prototypes/README.md)
