# Variables in JavaScript

## What are Variables?

Variables are containers that store data values. In JavaScript, you can declare variables using three keywords: `var`, `let`, and `const`.

## Variable Declaration Keywords

### 1. `var` (Legacy - Avoid in Modern Code)

```javascript
var name = "John";
var age = 25;
var isStudent = true;

// Function scoped
function example() {
    var x = 1;
    if (true) {
        var x = 2; // Same variable
        console.log(x); // 2
    }
    console.log(x); // 2
}
```

**Characteristics:**
- Function-scoped or globally-scoped
- Can be redeclared
- Hoisted (can be used before declaration)
- Creates properties on global object

### 2. `let` (Modern - Block Scoped)

```javascript
let name = "Jane";
let age = 30;

// Block scoped
function example() {
    let x = 1;
    if (true) {
        let x = 2; // Different variable
        console.log(x); // 2
    }
    console.log(x); // 1
}

// Cannot redeclare in same scope
let count = 1;
// let count = 2; // SyntaxError
```

**Characteristics:**
- Block-scoped
- Cannot be redeclared in same scope
- Hoisted but not initialized (Temporal Dead Zone)
- Can be reassigned

### 3. `const` (Modern - Constants)

```javascript
const PI = 3.14159;
const userName = "admin";

// Must be initialized at declaration
// const value; // SyntaxError

// Cannot be reassigned
// PI = 3.14; // TypeError

// Objects and arrays can be modified
const person = { name: "John", age: 25 };
person.age = 26; // Valid - modifying property
person.city = "New York"; // Valid - adding property

const colors = ["red", "green"];
colors.push("blue"); // Valid - modifying array
```

**Characteristics:**
- Block-scoped
- Cannot be redeclared
- Cannot be reassigned
- Must be initialized at declaration
- Objects/arrays contents can be modified

## Variable Naming Rules

### Valid Names:
```javascript
let firstName = "John";
let _private = "secret";
let $element = document.getElementById("myId");
let user123 = "user";
let camelCase = "recommended";
```

### Invalid Names:
```javascript
// let 123user = "invalid"; // Cannot start with number
// let first-name = "invalid"; // Hyphens not allowed
// let first name = "invalid"; // Spaces not allowed
// let class = "invalid"; // Reserved keywords not allowed
```

### Best Practices:
- Use `camelCase` for variable names
- Use descriptive names
- Use `const` by default, `let` when reassignment needed
- Avoid `var` in modern JavaScript

## Scope Examples

### Global Scope:
```javascript
let globalVar = "I'm global";

function accessGlobal() {
    console.log(globalVar); // Accessible
}
```

### Function Scope:
```javascript
function myFunction() {
    let functionScoped = "Only in function";
    console.log(functionScoped); // Accessible here
}
// console.log(functionScoped); // ReferenceError
```

### Block Scope:
```javascript
if (true) {
    let blockScoped = "Only in block";
    const alsoBlockScoped = "Also only in block";
    console.log(blockScoped); // Accessible here
}
// console.log(blockScoped); // ReferenceError
```

## Hoisting Behavior

### `var` Hoisting:
```javascript
console.log(x); // undefined (not error)
var x = 5;

// Equivalent to:
var x;
console.log(x); // undefined
x = 5;
```

### `let` and `const` Hoisting:
```javascript
// console.log(y); // ReferenceError: Cannot access before initialization
let y = 10;

// console.log(z); // ReferenceError: Cannot access before initialization
const z = 20;
```

## Practical Examples

### Variable Reassignment:
```javascript
let score = 0;
score = 10;     // ✅ Valid
score += 5;     // ✅ Valid, score is now 15

const maxScore = 100;
// maxScore = 200; // ❌ TypeError: Assignment to constant variable
```

### Loop Variables:
```javascript
// Using let (recommended)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints: 0, 1, 2
}

// Using var (problematic)
for (var j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100); // Prints: 3, 3, 3
}
```

### Object and Array Constants:
```javascript
const user = {
    name: "Alice",
    email: "alice@example.com"
};

// ✅ Can modify properties
user.name = "Bob";
user.age = 30;

// ❌ Cannot reassign entire object
// user = { name: "Charlie" }; // TypeError

const numbers = [1, 2, 3];
// ✅ Can modify array contents
numbers.push(4);
numbers[0] = 10;

// ❌ Cannot reassign entire array
// numbers = [5, 6, 7]; // TypeError
```

## Common Mistakes to Avoid

1. **Using `var` in modern code**
2. **Forgetting to declare variables**
3. **Trying to reassign `const` variables**
4. **Not understanding block scope**
5. **Using reserved keywords as variable names**

## Summary

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function/Global | Block | Block |
| Redeclaration | ✅ | ❌ | ❌ |
| Reassignment | ✅ | ✅ | ❌ |
| Hoisting | ✅ (initialized) | ✅ (not initialized) | ✅ (not initialized) |
| Temporal Dead Zone | ❌ | ✅ | ✅ |
| Use in Modern JS | ❌ Avoid | ✅ When reassignment needed | ✅ Default choice |

**Recommendation:** Use `const` by default, `let` when you need to reassign, and avoid `var` completely in modern JavaScript.