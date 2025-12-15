# Control Flow in JavaScript

## 📌 What is Control Flow?

Control flow determines the order in which code is executed. By default, code runs from top to bottom, but control flow statements allow you to:
- Make decisions (if/else)
- Execute different code based on conditions (switch)
- Repeat code (loops - covered in next section)

## 🔀 if Statement

Executes a block of code if a condition is true.

### Basic Syntax
```javascript
if (condition) {
    // Code to execute if condition is true
}
```

### Example
```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}

let temperature = 30;
if (temperature > 25) {
    console.log("It's hot outside!");
}
```

## 🔀 if...else Statement

Executes one block if condition is true, another if false.

### Syntax
```javascript
if (condition) {
    // Code if condition is true
} else {
    // Code if condition is false
}
```

### Example
```javascript
let age = 15;

if (age >= 18) {
    console.log("You can vote");
} else {
    console.log("You cannot vote yet");
}

let num = 7;
if (num % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}
```

## 🔀 if...else if...else Statement

Test multiple conditions.

### Syntax
```javascript
if (condition1) {
    // Code if condition1 is true
} else if (condition2) {
    // Code if condition2 is true
} else {
    // Code if all conditions are false
}
```

### Example
```javascript
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// Time-based greeting
let hour = 14;

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
```

## 🎯 Nested if Statements

if statements inside other if statements.

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("You can drive");
    } else {
        console.log("You need a license");
    }
} else {
    console.log("You're too young to drive");
}

// Login system
let username = "john";
let password = "pass123";

if (username === "john") {
    if (password === "pass123") {
        console.log("Login successful");
    } else {
        console.log("Incorrect password");
    }
} else {
    console.log("User not found");
}
```

## 🔄 switch Statement

Cleaner alternative to multiple if...else if statements.

### Syntax
```javascript
switch (expression) {
    case value1:
        // Code
        break;
    case value2:
        // Code
        break;
    default:
        // Code if no case matches
}
```

### Basic Example
```javascript
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
```

### Fall-through Cases
```javascript
let month = 2;
let daysInMonth;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daysInMonth = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daysInMonth = 30;
        break;
    case 2:
        daysInMonth = 28;
        break;
    default:
        daysInMonth = "Invalid month";
}

console.log(daysInMonth);  // 28
```

### Practical Example: Calculator
```javascript
let num1 = 10;
let num2 = 5;
let operator = "+";
let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
    default:
        result = "Invalid operator";
}

console.log(result);  // 15
```

## ❓ Ternary Operator (Quick Review)

Shorthand for simple if...else statements.

```javascript
// Syntax: condition ? valueIfTrue : valueIfFalse

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";

// Equivalent to:
let status2;
if (age >= 18) {
    status2 = "Adult";
} else {
    status2 = "Minor";
}

// More examples
let score = 75;
console.log(score >= 50 ? "Pass" : "Fail");

let temperature = 30;
let weather = temperature > 25 ? "Hot" : "Cold";

// Nested ternary (use sparingly)
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
```

## 🎯 Truthy and Falsy Values

Understanding truthiness is crucial for control flow.

### Falsy Values
```javascript
// These 6 values are falsy:
if (false) { }        // Won't execute
if (0) { }            // Won't execute
if ("") { }           // Won't execute
if (null) { }         // Won't execute
if (undefined) { }    // Won't execute
if (NaN) { }          // Won't execute
```

### Truthy Values
```javascript
// Everything else is truthy:
if (true) { }         // Executes
if (1) { }            // Executes
if ("hello") { }      // Executes
if ([]) { }           // Executes (empty array)
if ({}) { }           // Executes (empty object)
if (function(){}) { } // Executes
```

### Practical Usage
```javascript
// Check if variable has value
let username = "";

if (username) {
    console.log(`Hello, ${username}`);
} else {
    console.log("Please enter a username");
}

// Default values
function greet(name) {
    name = name || "Guest";  // If name is falsy, use "Guest"
    console.log(`Hello, ${name}!`);
}

greet("John");  // "Hello, John!"
greet();        // "Hello, Guest!"
```

## 🔍 Comparison Best Practices

### Use Strict Equality
```javascript
// ❌ Avoid loose equality
if (value == "5") { }

// ✅ Use strict equality
if (value === "5") { }

// Examples of loose vs strict
console.log(5 == "5");   // true (type coercion)
console.log(5 === "5");  // false (different types)
```

### Explicit Comparisons
```javascript
// ❌ Less clear
if (array.length) { }

// ✅ More explicit
if (array.length > 0) { }

// ❌ Truthy check
if (value) { }

// ✅ Explicit null/undefined check
if (value !== null && value !== undefined) { }
// Or using modern nullish coalescing
if (value ?? false) { }
```

## 💡 Best Practices

### 1. Use Braces Even for Single Statements
```javascript
// ❌ Avoid
if (condition)
    doSomething();

// ✅ Better
if (condition) {
    doSomething();
}
```

### 2. Keep Conditions Simple
```javascript
// ❌ Complex condition
if (age >= 18 && age < 65 && hasLicense && !isSuspended) {
    // ...
}

// ✅ Extract to variable
let canDrive = age >= 18 && age < 65 && hasLicense && !isSuspended;
if (canDrive) {
    // ...
}
```

### 3. Guard Clauses (Early Returns)
```javascript
// ❌ Nested conditions
function processUser(user) {
    if (user) {
        if (user.active) {
            if (user.age >= 18) {
                return "Process user";
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
    
    return "Process user";
}
```

### 4. Use switch for Multiple Discrete Values
```javascript
// ❌ Multiple if statements
if (status === "pending") { }
else if (status === "approved") { }
else if (status === "rejected") { }
else { }

// ✅ Switch statement
switch (status) {
    case "pending":
        // ...
        break;
    case "approved":
        // ...
        break;
    case "rejected":
        // ...
        break;
    default:
        // ...
}
```

### 5. Avoid Deep Nesting
```javascript
// ❌ Deeply nested
if (a) {
    if (b) {
        if (c) {
            if (d) {
                // ...
            }
        }
    }
}

// ✅ Flatten with early returns or logical operators
if (!a) return;
if (!b) return;
if (!c) return;
if (!d) return;
// ...

// Or use logical AND
if (a && b && c && d) {
    // ...
}
```

## 🧪 Practice Examples

### Example 1: Grade Calculator
```javascript
function calculateGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    }
    
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

console.log(calculateGrade(95));   // "A"
console.log(calculateGrade(75));   // "C"
console.log(calculateGrade(105));  // "Invalid score"
```

### Example 2: Login Validation
```javascript
function validateLogin(username, password) {
    if (!username) {
        return "Username is required";
    }
    
    if (!password) {
        return "Password is required";
    }
    
    if (username.length < 3) {
        return "Username must be at least 3 characters";
    }
    
    if (password.length < 8) {
        return "Password must be at least 8 characters";
    }
    
    return "Login successful";
}

console.log(validateLogin("jo", "pass"));
// "Username must be at least 3 characters"
```

### Example 3: Shipping Calculator
```javascript
function calculateShipping(country, weight) {
    let cost;
    
    switch (country) {
        case "USA":
            cost = weight * 5;
            break;
        case "Canada":
            cost = weight * 7;
            break;
        case "Mexico":
            cost = weight * 6;
            break;
        default:
            cost = weight * 10;
    }
    
    // Free shipping for orders over 100
    if (cost > 100) {
        cost = 0;
    }
    
    return cost;
}

console.log(calculateShipping("USA", 15));  // 75
console.log(calculateShipping("UK", 5));    // 50
```

### Example 4: Traffic Light System
```javascript
function handleTrafficLight(color) {
    switch (color.toLowerCase()) {
        case "red":
            console.log("Stop!");
            break;
        case "yellow":
            console.log("Slow down!");
            break;
        case "green":
            console.log("Go!");
            break;
        default:
            console.log("Invalid color!");
    }
}

handleTrafficLight("RED");     // "Stop!"
handleTrafficLight("green");   // "Go!"
```

## 📚 Interview Questions & Answers

### Q1: What is the difference between if...else and switch?
**Answer**:
- **if...else**: Better for complex conditions, ranges, and boolean logic
- **switch**: Better for comparing one value against multiple discrete values

```javascript
// Better with if...else (ranges)
if (score >= 90) { }
else if (score >= 80) { }

// Better with switch (discrete values)
switch (day) {
    case "Monday": break;
    case "Tuesday": break;
}
```

### Q2: What happens if you forget break in a switch case?
**Answer**: "Fall-through" occurs - execution continues to the next case regardless of whether it matches.

```javascript
switch (2) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");  // Executes
    case 3:
        console.log("Three"); // Also executes!
}
// Output: "Two", "Three"
```

### Q3: What are truthy and falsy values?
**Answer**: 
**Falsy values** (6 total): `false`, `0`, `""`, `null`, `undefined`, `NaN`
**Truthy values**: Everything else

```javascript
if ("0") console.log("Truthy");    // Executes (string "0")
if (0) console.log("Truthy");      // Doesn't execute (number 0)
```

### Q4: What is the ternary operator?
**Answer**: A shorthand for if...else with syntax: `condition ? valueIfTrue : valueIfFalse`

```javascript
let status = age >= 18 ? "Adult" : "Minor";

// Equivalent to:
let status;
if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}
```

### Q5: What are guard clauses?
**Answer**: Early return statements that handle edge cases first, reducing nesting.

```javascript
// Without guard clauses
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

// With guard clause
function divide(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}
```

### Q6: What is short-circuit evaluation?
**Answer**: Logical operators (`&&`, `||`) stop evaluating once the result is determined.

```javascript
// AND stops at first falsy
false && console.log("Won't run");

// OR stops at first truthy
true || console.log("Won't run");

// Practical use
let user = null;
user && user.greet();  // Safe: won't call greet() if user is null
```

### Q7: How do you handle multiple conditions?
**Answer**: Several approaches:

```javascript
// 1. Logical operators
if (age >= 18 && hasLicense) { }

// 2. Multiple if statements
if (age >= 18) {
    if (hasLicense) { }
}

// 3. if...else if
if (condition1) { }
else if (condition2) { }

// 4. switch (for discrete values)
switch (value) {
    case 1: break;
    case 2: break;
}
```

### Q8: What's the difference between == and === in conditions?
**Answer**:
- `==`: Loose equality with type coercion
- `===`: Strict equality without type coercion

```javascript
if (5 == "5") { }   // true (coerces types)
if (5 === "5") { }  // false (different types)
```

**Best Practice**: Always use `===`

### Q9: Can you use a switch statement with strings?
**Answer**: Yes! Switch works with any data type.

```javascript
switch (name.toLowerCase()) {
    case "john":
        console.log("Hello John");
        break;
    case "jane":
        console.log("Hello Jane");
        break;
}
```

### Q10: What is the default case in switch?
**Answer**: The `default` case executes when no other case matches. It's optional but recommended.

```javascript
switch (value) {
    case 1:
        // ...
        break;
    case 2:
        // ...
        break;
    default:
        console.log("No match found");
}
```

## 🎓 Key Takeaways

- Control flow directs program execution based on conditions
- Use `if...else` for ranges and complex conditions
- Use `switch` for multiple discrete values
- Always use strict equality (`===`)
- Guard clauses reduce nesting
- Understand truthy/falsy values
- Don't forget `break` in switch cases
- Keep conditions simple and readable

## 🔗 Next Topic

Continue to [Loops](../05-Loops/README.md) to learn how to repeat code efficiently!

---

**Practice Challenge**: Create a function that determines if a year is a leap year (divisible by 4, except centuries unless divisible by 400)!
