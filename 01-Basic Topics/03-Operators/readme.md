# Operators in JavaScript

## Overview

Operators are special symbols used to perform operations on operands (values and variables).

## 1. Arithmetic Operators

Used to perform mathematical calculations.

### Basic Arithmetic

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.333... (Division)
console.log(a % b);  // 1  (Modulus - remainder)
console.log(a ** b); // 1000 (Exponentiation - ES2016)

// Unary operators
console.log(+a);     // 10 (Unary plus)
console.log(-a);     // -10 (Unary minus)
```

### Increment and Decrement

```javascript
let counter = 5;

// Post-increment (use current value, then increment)
console.log(counter++); // 5 (prints current, then increments)
console.log(counter);   // 6

// Pre-increment (increment first, then use value)
let counter2 = 5;
console.log(++counter2); // 6 (increments first, then prints)
console.log(counter2);   // 6

// Post-decrement
let counter3 = 5;
console.log(counter3--); // 5 (prints current, then decrements)
console.log(counter3);   // 4

// Pre-decrement
let counter4 = 5;
console.log(--counter4); // 4 (decrements first, then prints)
console.log(counter4);   // 4
```

### Practical Examples

```javascript
// Calculate area and perimeter
let length = 10;
let width = 5;

let area = length * width;           // 50
let perimeter = 2 * (length + width); // 30

// Calculate compound interest
let principal = 1000;
let rate = 0.05; // 5%
let time = 3;

let amount = principal * (1 + rate) ** time;
console.log(amount); // 1157.625

// Working with remainders
let totalItems = 23;
let itemsPerPage = 5;

let totalPages = Math.ceil(totalItems / itemsPerPage); // 5
let itemsOnLastPage = totalItems % itemsPerPage;       // 3
```

## 2. Assignment Operators

Used to assign values to variables.

### Basic Assignment

```javascript
let x = 10;        // Basic assignment
let y = x;         // Assign value of x to y
```

### Compound Assignment

```javascript
let num = 10;

num += 5;   // num = num + 5;  Result: 15
num -= 3;   // num = num - 3;  Result: 12
num *= 2;   // num = num * 2;  Result: 24
num /= 4;   // num = num / 4;  Result: 6
num %= 5;   // num = num % 5;  Result: 1
num **= 3;  // num = num ** 3; Result: 1

// String concatenation
let message = "Hello";
message += " World"; // "Hello World"

// Array operations
let numbers = [1, 2];
numbers += [3, 4]; // "1,23,4" (converted to string - usually not desired)

// Better array concatenation
let arr1 = [1, 2];
let arr2 = [3, 4];
arr1.push(...arr2); // [1, 2, 3, 4]
```

## 3. Comparison Operators

Used to compare values and return boolean results.

### Equality Operators

```javascript
// Loose equality (==) - performs type coercion
console.log(5 == "5");    // true
console.log(true == 1);   // true
console.log(false == 0);  // true
console.log(null == undefined); // true

// Strict equality (===) - no type coercion
console.log(5 === "5");   // false
console.log(true === 1);  // false
console.log(false === 0); // false
console.log(null === undefined); // false

// Inequality operators
console.log(5 != "5");    // false (loose)
console.log(5 !== "5");   // true (strict)
```

### Relational Operators

```javascript
let a = 10;
let b = 5;

console.log(a > b);   // true (greater than)
console.log(a < b);   // false (less than)
console.log(a >= b);  // true (greater than or equal)
console.log(a <= b);  // false (less than or equal)

// String comparison (lexicographical)
console.log("apple" < "banana");  // true
console.log("Apple" < "apple");   // true (uppercase comes first)

// Number vs String comparison
console.log("10" > "9");  // false (string comparison)
console.log("10" > 9);    // true (string converted to number)
console.log(10 > "9");    // true (string converted to number)
```

### Practical Comparison Examples

```javascript
// Age validation
function canVote(age) {
    return age >= 18;
}

// Grade evaluation
function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

// Safe comparison function
function safeEqual(a, b) {
    return a === b;
}

// Null/undefined checking
function isValidValue(value) {
    return value !== null && value !== undefined;
}
```

## 4. Logical Operators

Used to combine or invert boolean values.

### AND Operator (&&)

```javascript
let isLoggedIn = true;
let hasPermission = true;

// Both conditions must be true
if (isLoggedIn && hasPermission) {
    console.log("Access granted");
}

// Short-circuit evaluation
let user = { name: "John" };
user && user.name && console.log(user.name); // "John"

// Practical use - default values
let config = null;
let theme = config && config.theme || "default";
console.log(theme); // "default"
```

### OR Operator (||)

```javascript
let isAdmin = false;
let isModerator = true;

// At least one condition must be true
if (isAdmin || isModerator) {
    console.log("Can moderate content");
}

// Default value assignment
let userName = "" || "Guest";
console.log(userName); // "Guest"

// Multiple fallbacks
let value = null || undefined || 0 || "default";
console.log(value); // "default"
```

### NOT Operator (!)

```javascript
let isVisible = true;
console.log(!isVisible); // false

// Double NOT for boolean conversion
console.log(!!"hello");  // true
console.log(!!0);        // false
console.log(!!"");       // false

// Practical use
function isNotEmpty(str) {
    return !(str === "" || str === null || str === undefined);
}

// Or more concisely
function isNotEmpty2(str) {
    return !!str;
}
```

### Nullish Coalescing Operator (??) - ES2020

```javascript
let user = null;
let defaultUser = "Guest";

// Only null or undefined trigger default
let displayName = user ?? defaultUser; // "Guest"

// Difference from ||
let count = 0;
console.log(count || 10);  // 10 (0 is falsy)
console.log(count ?? 10);  // 0 (0 is not null/undefined)

// Practical use
function getUserName(user) {
    return user?.name ?? "Anonymous";
}
```

### Logical Assignment Operators (ES2021)

```javascript
let obj = {};

// Logical AND assignment
obj.value &&= "new value"; // Only assign if obj.value is truthy
console.log(obj.value); // undefined (wasn't truthy)

// Logical OR assignment
obj.value ||= "default"; // Assign if obj.value is falsy
console.log(obj.value); // "default"

// Nullish coalescing assignment
let settings = { theme: null };
settings.theme ??= "light"; // Only assign if null or undefined
console.log(settings.theme); // "light"
```

## 5. Special Operators

### Ternary Operator (? :)

```javascript
// Basic syntax: condition ? valueIfTrue : valueIfFalse
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Nested ternary (use sparingly)
let score = 85;
let grade = score >= 90 ? 'A' : 
            score >= 80 ? 'B' : 
            score >= 70 ? 'C' : 'F';

// In function returns
function getDiscount(isPremium) {
    return isPremium ? 0.2 : 0.1;
}

// With complex expressions
let user = { isLoggedIn: true, role: "admin" };
let canEdit = user.isLoggedIn && user.role === "admin" ? true : false;
// Better as: let canEdit = user.isLoggedIn && user.role === "admin";
```

### typeof Operator

```javascript
console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (JavaScript quirk)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"

// Practical use in type checking
function processValue(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    if (typeof value === 'number') {
        return value * 2;
    }
    return value;
}
```

### instanceof Operator

```javascript
let date = new Date();
let array = [];
let regex = /pattern/;

console.log(date instanceof Date);   // true
console.log(array instanceof Array); // true
console.log(regex instanceof RegExp); // true

// Custom constructor
function Person(name) {
    this.name = name;
}

let john = new Person("John");
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true (all objects inherit from Object)
```

### in Operator

```javascript
let person = {
    name: "Alice",
    age: 30
};

console.log("name" in person);    // true
console.log("height" in person);  // false

// With arrays
let colors = ["red", "green", "blue"];
console.log(0 in colors);         // true (index exists)
console.log(3 in colors);         // false (index doesn't exist)
console.log("length" in colors);  // true (length property exists)

// Checking for method existence
if ("push" in []) {
    console.log("Array has push method");
}
```

## Operator Precedence

Operators are evaluated in specific order (highest to lowest precedence):

```javascript
// Parentheses have highest precedence
let result1 = 2 + 3 * 4;     // 14 (3 * 4 first, then + 2)
let result2 = (2 + 3) * 4;   // 20 (parentheses first)

// Unary operators
let x = 5;
console.log(-x++); // -5 (unary minus has higher precedence than ++)
console.log(x);    // 6

// Logical operators
let a = true;
let b = false;
let c = true;

console.log(a && b || c);  // true (&& before ||)
console.log(a && (b || c)); // true (explicit grouping)

// Assignment has low precedence
let y = 2 + 3 * 4; // y = 14 (not (y = 2 + 3) * 4)
```

## Practical Examples

### Form Validation

```javascript
function validateForm(data) {
    let errors = [];
    
    // Check required fields
    if (!data.email || data.email.trim() === "") {
        errors.push("Email is required");
    }
    
    // Email format check
    if (data.email && !data.email.includes("@")) {
        errors.push("Invalid email format");
    }
    
    // Age validation
    if (data.age && (data.age < 13 || data.age > 120)) {
        errors.push("Age must be between 13 and 120");
    }
    
    // Password strength
    if (data.password && data.password.length < 8) {
        errors.push("Password must be at least 8 characters");
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}
```

### Calculator Function

```javascript
function calculator(a, b, operator) {
    // Input validation
    if (typeof a !== 'number' || typeof b !== 'number') {
        return { error: "Both operands must be numbers" };
    }
    
    switch (operator) {
        case '+':
            return { result: a + b };
        case '-':
            return { result: a - b };
        case '*':
            return { result: a * b };
        case '/':
            return b !== 0 ? { result: a / b } : { error: "Division by zero" };
        case '%':
            return b !== 0 ? { result: a % b } : { error: "Division by zero" };
        case '**':
            return { result: a ** b };
        default:
            return { error: "Invalid operator" };
    }
}

// Usage
console.log(calculator(10, 5, '+')); // { result: 15 }
console.log(calculator(10, 0, '/')); // { error: "Division by zero" }
```

### Shopping Cart Logic

```javascript
class ShoppingCart {
    constructor() {
        this.items = [];
        this.discountRate = 0;
    }
    
    addItem(item) {
        // Validate item
        if (!item || typeof item.price !== 'number' || item.price <= 0) {
            return false;
        }
        
        this.items.push(item);
        return true;
    }
    
    calculateTotal() {
        // Calculate subtotal
        let subtotal = this.items.reduce((sum, item) => sum + item.price, 0);
        
        // Apply discount
        let discount = subtotal * this.discountRate;
        let total = subtotal - discount;
        
        // Free shipping for orders over $50
        let shipping = total >= 50 ? 0 : 5.99;
        
        return {
            subtotal: subtotal.toFixed(2),
            discount: discount.toFixed(2),
            shipping: shipping.toFixed(2),
            total: (total + shipping).toFixed(2)
        };
    }
    
    applyDiscount(code) {
        // Simple discount codes
        switch (code?.toLowerCase()) {
            case 'save10':
                this.discountRate = 0.10;
                return true;
            case 'save20':
                this.discountRate = 0.20;
                return true;
            default:
                return false;
        }
    }
}
```

## Common Mistakes to Avoid

1. **Using `==` instead of `===`** for comparisons
2. **Confusing assignment (`=`) with comparison (`==`)**
3. **Not understanding operator precedence**
4. **Forgetting that logical operators short-circuit**
5. **Using `typeof null === "object"`** without handling the null case

## Summary

| Category | Operators | Purpose |
|----------|-----------|---------|
| Arithmetic | `+ - * / % **` | Mathematical operations |
| Assignment | `= += -= *= /= %=` | Assign values |
| Comparison | `== === != !== < > <= >=` | Compare values |
| Logical | `&& \|\| !` | Combine boolean expressions |
| Unary | `++ -- + - !` | Single operand operations |
| Ternary | `? :` | Conditional expressions |
| Type | `typeof instanceof in` | Type and property checking |

**Best Practices:**
- Use strict equality (`===`) by default
- Use parentheses to make precedence clear
- Understand short-circuit evaluation
- Validate inputs before operations
- Use meaningful variable names in complex expressions