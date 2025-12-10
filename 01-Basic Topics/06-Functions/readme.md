# Functions in JavaScript

## Overview

Functions are reusable blocks of code that perform specific tasks. They are fundamental building blocks in JavaScript programming and enable code organization, reusability, and modularity.

## 1. Function Declarations

### Basic Function Declaration

```javascript
// Function declaration syntax
function functionName(parameters) {
    // Function body
    return value; // optional
}

// Simple example
function greet(name) {
    return `Hello, ${name}!`;
}

// Function call
let message = greet("Alice");
console.log(message); // "Hello, Alice!"

// Function without parameters
function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

console.log(getCurrentTime()); // Current time string

// Function without return statement (returns undefined)
function logMessage(message) {
    console.log(message);
    // implicit return undefined
}
```

### Function Hoisting

```javascript
// Functions are hoisted - can be called before declaration
console.log(add(5, 3)); // 8 - works due to hoisting

function add(a, b) {
    return a + b;
}

// This is why function declarations are "hoisted"
// The above code is effectively interpreted as:
/*
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // 8
*/
```

## 2. Function Expressions

### Basic Function Expression

```javascript
// Function expression - function assigned to variable
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20

// Function expressions are NOT hoisted
// console.log(subtract(10, 3)); // Error: Cannot access before initialization

let subtract = function(a, b) {
    return a - b;
};

// Named function expression (useful for debugging)
let divide = function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};
```

### Immediately Invoked Function Expression (IIFE)

```javascript
// IIFE - function that runs immediately
(function() {
    console.log("This runs immediately!");
})();

// IIFE with parameters
(function(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
})("John", 25);

// IIFE with return value
let result = (function(x, y) {
    return x * y;
})(5, 3);
console.log(result); // 15

// IIFE for creating private scope
let counter = (function() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount()); // 2
```

## 3. Arrow Functions (ES6+)

### Basic Arrow Function Syntax

```javascript
// Traditional function expression
let add = function(a, b) {
    return a + b;
};

// Arrow function equivalent
let addArrow = (a, b) => {
    return a + b;
};

// Shorter syntax for single expression
let addShort = (a, b) => a + b;

// Single parameter (parentheses optional)
let square = x => x * x;
let squareExplicit = (x) => x * x; // Equivalent

// No parameters
let sayHello = () => "Hello World!";

// Multiple statements require curly braces
let processData = (data) => {
    let processed = data.trim().toLowerCase();
    let result = processed.split(' ');
    return result;
};
```

### Arrow Functions vs Regular Functions

```javascript
// 1. 'this' binding difference
let person = {
    name: "Alice",
    
    // Regular function - 'this' refers to person object
    greetRegular: function() {
        console.log(`Hello, I'm ${this.name}`);
    },
    
    // Arrow function - 'this' refers to enclosing scope
    greetArrow: () => {
        console.log(`Hello, I'm ${this.name}`); // undefined (or global this)
    },
    
    // Practical use of arrow function in methods
    delayedGreeting: function() {
        setTimeout(() => {
            // Arrow function preserves 'this' from enclosing scope
            console.log(`Delayed greeting from ${this.name}`);
        }, 1000);
    }
};

person.greetRegular(); // "Hello, I'm Alice"
person.greetArrow();   // "Hello, I'm undefined"
person.delayedGreeting(); // "Delayed greeting from Alice" (after 1 second)

// 2. Arguments object
function regularFunction() {
    console.log(arguments); // arguments object available
}

let arrowFunction = () => {
    // console.log(arguments); // Error: arguments is not defined
};

// Use rest parameters instead in arrow functions
let arrowWithRest = (...args) => {
    console.log(args); // Array of arguments
};

regularFunction(1, 2, 3); // [1, 2, 3] (arguments object)
arrowWithRest(1, 2, 3);   // [1, 2, 3] (array)
```

## 4. Function Parameters

### Default Parameters

```javascript
// ES6+ default parameters
function greet(name = "World", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());              // "Hello, World!"
console.log(greet("Alice"));       // "Hello, Alice!"
console.log(greet("Bob", "Hi"));   // "Hi, Bob!"

// Default parameters can use other parameters
function createUser(name, role = "user", active = true) {
    return {
        name: name,
        role: role,
        active: active,
        created: new Date()
    };
}

// Complex default values
function processOrder(items, tax = 0.08, discount = calculateDiscount(items)) {
    let subtotal = items.reduce((sum, item) => sum + item.price, 0);
    let taxAmount = subtotal * tax;
    let finalPrice = subtotal + taxAmount - discount;
    
    return {
        subtotal,
        tax: taxAmount,
        discount,
        total: finalPrice
    };
}

function calculateDiscount(items) {
    let total = items.reduce((sum, item) => sum + item.price, 0);
    return total > 100 ? 10 : 0; // $10 discount for orders over $100
}
```

### Rest Parameters

```javascript
// Rest parameters - collect remaining arguments into array
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20));         // 30

// Rest parameters with other parameters
function introduce(firstName, lastName, ...hobbies) {
    console.log(`Name: ${firstName} ${lastName}`);
    if (hobbies.length > 0) {
        console.log(`Hobbies: ${hobbies.join(", ")}`);
    }
}

introduce("John", "Doe", "reading", "coding", "gaming");
// Name: John Doe
// Hobbies: reading, coding, gaming

// Practical example: Flexible logging function
function logWithTimestamp(level, ...messages) {
    let timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${level.toUpperCase()}: ${messages.join(" ")}`);
}

logWithTimestamp("info", "User logged in successfully");
logWithTimestamp("error", "Database connection failed:", "Connection timeout");
```

### Destructuring Parameters

```javascript
// Object destructuring in parameters
function createCard({title, content, author = "Anonymous"}) {
    return `
        <div class="card">
            <h3>${title}</h3>
            <p>${content}</p>
            <small>By: ${author}</small>
        </div>
    `;
}

let cardData = {
    title: "Learning JavaScript",
    content: "Functions are powerful tools in JavaScript",
    author: "John Doe"
};

console.log(createCard(cardData));

// Array destructuring in parameters
function processCoordinates([x, y, z = 0]) {
    return {
        x: x,
        y: y,
        z: z,
        distance: Math.sqrt(x*x + y*y + z*z)
    };
}

console.log(processCoordinates([3, 4]));    // z defaults to 0
console.log(processCoordinates([1, 2, 3])); // all values provided

// Complex destructuring
function updateUserProfile({
    id,
    name,
    email,
    preferences: {theme = "light", notifications = true} = {},
    ...otherData
}) {
    return {
        id,
        name,
        email,
        theme,
        notifications,
        otherData,
        lastUpdated: new Date()
    };
}
```

## 5. Return Values

### Basic Return

```javascript
// Simple return
function add(a, b) {
    return a + b; // Returns the sum
}

// Multiple return statements
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

// Early return for validation
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

// No return statement returns undefined
function logMessage(msg) {
    console.log(msg);
    // implicitly returns undefined
}
```

### Returning Objects and Arrays

```javascript
// Return object
function createUser(name, email) {
    return {
        name: name,
        email: email,
        created: new Date(),
        active: true
    };
}

// Return array
function getEvenNumbers(max) {
    let evens = [];
    for (let i = 0; i <= max; i += 2) {
        evens.push(i);
    }
    return evens;
}

// Return function (higher-order function)
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(4)); // 12
```

## 6. Scope and Closures

### Function Scope

```javascript
// Local scope
function example() {
    let localVar = "I'm local";
    console.log(localVar); // Accessible here
}

example();
// console.log(localVar); // Error: localVar is not defined

// Global vs Local
let globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";
    
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
    
    // Function parameter scope
    function inner(param) {
        console.log(param);     // Accessible
        console.log(localVar);  // Accessible from outer function
        console.log(globalVar); // Accessible
    }
    
    inner("parameter value");
}
```

### Closures

```javascript
// Basic closure
function outerFunction(x) {
    // This is the outer function's scope
    
    function innerFunction(y) {
        // Inner function has access to outer function's variables
        return x + y;
    }
    
    return innerFunction;
}

let addFive = outerFunction(5);
console.log(addFive(3)); // 8 (5 + 3)

// Practical closure example: Counter
function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count,
        reset: () => {
            count = initialValue;
            return count;
        }
    };
}

let counter1 = createCounter(10);
let counter2 = createCounter(0);

console.log(counter1.increment()); // 11
console.log(counter1.increment()); // 12
console.log(counter2.increment()); // 1
console.log(counter1.getValue());  // 12 (independent of counter2)

// Module pattern with closure
let calculator = (function() {
    let result = 0;
    
    return {
        add: function(x) {
            result += x;
            return this;
        },
        subtract: function(x) {
            result -= x;
            return this;
        },
        multiply: function(x) {
            result *= x;
            return this;
        },
        getResult: function() {
            return result;
        },
        clear: function() {
            result = 0;
            return this;
        }
    };
})();

// Method chaining
calculator.add(10).multiply(2).subtract(5);
console.log(calculator.getResult()); // 15
```

## 7. Practical Examples

### Utility Functions

```javascript
// Validation utilities
function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

function isValidPassword(password) {
    return password.length >= 8 && 
           /[A-Z]/.test(password) && 
           /[a-z]/.test(password) && 
           /\d/.test(password);
}

function sanitizeInput(input) {
    return input.trim().toLowerCase().replace(/[^a-z0-9\s]/g, '');
}

// Array utility functions
function removeDuplicates(array) {
    return [...new Set(array)];
}

function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function chunkArray(array, size) {
    let chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

// Usage examples
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // [1, 2, 3, 4]
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1,2,3], [4,5,6], [7,8]]
```

### Form Processing Functions

```javascript
function validateForm(formData) {
    let errors = [];
    
    // Name validation
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push("Name must be at least 2 characters long");
    }
    
    // Email validation
    if (!formData.email || !isValidEmail(formData.email)) {
        errors.push("Please enter a valid email address");
    }
    
    // Password validation
    if (!formData.password || !isValidPassword(formData.password)) {
        errors.push("Password must be at least 8 characters with uppercase, lowercase, and number");
    }
    
    // Age validation
    if (formData.age && (formData.age < 13 || formData.age > 120)) {
        errors.push("Age must be between 13 and 120");
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

function processFormSubmission(formElement) {
    let formData = new FormData(formElement);
    let data = Object.fromEntries(formData.entries());
    
    let validation = validateForm(data);
    
    if (validation.isValid) {
        return submitToServer(data);
    } else {
        displayErrors(validation.errors);
        return Promise.reject(validation.errors);
    }
}

function submitToServer(data) {
    return fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        console.log('Form submitted successfully:', result);
        return result;
    })
    .catch(error => {
        console.error('Submission error:', error);
        throw error;
    });
}
```

### Game Functions

```javascript
// Dice rolling functions
function rollDie(sides = 6) {
    return Math.floor(Math.random() * sides) + 1;
}

function rollMultipleDice(count, sides = 6) {
    let rolls = [];
    for (let i = 0; i < count; i++) {
        rolls.push(rollDie(sides));
    }
    return rolls;
}

// Card game functions
function createDeck() {
    let suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let deck = [];
    
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ suit, rank });
        }
    }
    
    return shuffleDeck(deck);
}

function shuffleDeck(deck) {
    let shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function dealHand(deck, handSize) {
    if (deck.length < handSize) {
        throw new Error("Not enough cards in deck");
    }
    return deck.splice(0, handSize);
}

// Game state management
function createGameState(players) {
    return {
        players: players.map(name => ({
            name: name,
            hand: [],
            score: 0,
            active: true
        })),
        deck: createDeck(),
        currentPlayer: 0,
        gamePhase: 'setup'
    };
}

function nextPlayer(gameState) {
    do {
        gameState.currentPlayer = (gameState.currentPlayer + 1) % gameState.players.length;
    } while (!gameState.players[gameState.currentPlayer].active);
}
```

## 8. Function Best Practices

### Single Responsibility Principle

```javascript
// Bad: Function doing too many things
function processUserBad(userData) {
    // Validate data
    if (!userData.email.includes('@')) return false;
    
    // Hash password
    let hashedPassword = hashPassword(userData.password);
    
    // Save to database
    database.save(userData);
    
    // Send welcome email
    emailService.sendWelcome(userData.email);
    
    // Log activity
    logger.log(`User ${userData.name} registered`);
}

// Good: Separate responsibilities
function validateUser(userData) {
    return userData.email.includes('@') && userData.password.length >= 8;
}

function hashPassword(password) {
    // Implementation
}

function saveUser(userData) {
    return database.save(userData);
}

function sendWelcomeEmail(email) {
    return emailService.sendWelcome(email);
}

function logUserActivity(message) {
    logger.log(message);
}

// Main function orchestrates the process
function processUser(userData) {
    if (!validateUser(userData)) {
        throw new Error('Invalid user data');
    }
    
    let hashedPassword = hashPassword(userData.password);
    let user = { ...userData, password: hashedPassword };
    
    saveUser(user);
    sendWelcomeEmail(user.email);
    logUserActivity(`User ${user.name} registered`);
    
    return user;
}
```

### Pure Functions

```javascript
// Pure function: same input always produces same output, no side effects
function add(a, b) {
    return a + b; // No side effects, predictable output
}

function calculateTax(amount, rate) {
    return amount * rate;
}

// Impure function: has side effects or depends on external state
let counter = 0;
function impureIncrement() {
    counter++; // Side effect: modifies external state
    return counter;
}

function impureRandom() {
    return Math.random(); // Not predictable output
}

// Converting impure to pure
function pureIncrement(currentValue) {
    return currentValue + 1; // No side effects
}

function createRandomGenerator(seed) {
    // Returns predictable "random" based on seed
    return function() {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };
}
```

### Function Documentation

```javascript
/**
 * Calculates the area of a circle
 * @param {number} radius - The radius of the circle
 * @returns {number} The area of the circle
 * @throws {Error} When radius is negative
 * 
 * @example
 * // Calculate area of circle with radius 5
 * const area = calculateCircleArea(5);
 * console.log(area); // 78.54
 */
function calculateCircleArea(radius) {
    if (radius < 0) {
        throw new Error("Radius cannot be negative");
    }
    return Math.PI * radius * radius;
}

/**
 * Formats a date string for display
 * @param {Date|string} date - Date to format
 * @param {string} [format='short'] - Format type ('short', 'long', 'iso')
 * @returns {string} Formatted date string
 */
function formatDate(date, format = 'short') {
    let dateObj = date instanceof Date ? date : new Date(date);
    
    switch (format) {
        case 'long':
            return dateObj.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        case 'iso':
            return dateObj.toISOString().split('T')[0];
        default:
            return dateObj.toLocaleDateString();
    }
}
```

## Common Mistakes to Avoid

1. **Forgetting to return a value** when one is expected
2. **Modifying function parameters** (unless intentional)
3. **Creating functions that are too long** or do too many things
4. **Not handling edge cases** (null, undefined, empty arrays)
5. **Using `var` instead of `let`/`const`** in function scope
6. **Arrow functions in object methods** when you need `this`

## Summary

| Function Type | Syntax | Hoisting | `this` Binding | Use Case |
|---------------|--------|----------|----------------|----------|
| Declaration | `function name() {}` | ✅ Yes | Dynamic | General purpose |
| Expression | `let fn = function() {}` | ❌ No | Dynamic | Variable assignment |
| Arrow | `let fn = () => {}` | ❌ No | Lexical | Callbacks, short functions |
| IIFE | `(function() {})()` | N/A | Dynamic | Immediate execution |

**Best Practices:**
- Use descriptive function names
- Keep functions small and focused
- Prefer pure functions when possible
- Use default parameters instead of checking for undefined
- Document complex functions
- Handle errors appropriately
- Choose the right function type for your needs