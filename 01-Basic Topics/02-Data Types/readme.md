# Data Types in JavaScript

## Overview

JavaScript has **8 data types** divided into two categories: **Primitive** and **Non-Primitive** (Reference) types.

## Primitive Data Types

Primitive types are stored by value and are immutable.

### 1. String

Represents text data enclosed in quotes.

```javascript
// Different ways to create strings
let singleQuotes = 'Hello World';
let doubleQuotes = "JavaScript";
let templateLiteral = `Modern String`;

// String with variables
let name = "Alice";
let greeting = `Hello, ${name}!`; // "Hello, Alice!"

// Multi-line strings
let multiline = `
    This is a
    multi-line string
`;

// Escape characters
let escaped = "He said, \"Hello!\"";
let newline = "Line 1\nLine 2";
```

**Common String Properties and Methods:**
```javascript
let text = "JavaScript";

console.log(text.length);        // 10
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.toLowerCase()); // "javascript"
console.log(text.charAt(0));     // "J"
console.log(text.indexOf("Script")); // 4
```

### 2. Number

Represents both integers and floating-point numbers.

```javascript
// Integer
let age = 25;

// Floating-point
let price = 99.99;

// Scientific notation
let scientific = 2.5e6; // 2500000

// Special numeric values
let infinity = Infinity;
let negInfinity = -Infinity;
let notANumber = NaN;

// Number methods
console.log(Number.isInteger(25));    // true
console.log(Number.isNaN(NaN));       // true
console.log(parseFloat("3.14"));      // 3.14
console.log(parseInt("42px"));        // 42
```

**Number Limitations:**
```javascript
// Maximum safe integer
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Precision issues
console.log(0.1 + 0.2);              // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);      // false

// Solution for precision
console.log((0.1 + 0.2).toFixed(1)); // "0.3"
```

### 3. Boolean

Represents logical values: `true` or `false`.

```javascript
let isActive = true;
let isCompleted = false;

// Boolean conversion
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean("hello"));  // true
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false

// Truthy and Falsy values
// Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// Truthy: everything else
```

### 4. Undefined

Represents a variable that has been declared but not assigned a value.

```javascript
let variable;
console.log(variable); // undefined

// Function without return
function noReturn() {
    // No return statement
}
console.log(noReturn()); // undefined

// Object property that doesn't exist
let obj = {};
console.log(obj.property); // undefined
```

### 5. Null

Represents an intentional absence of any object value.

```javascript
let data = null; // Intentionally empty

// Common use cases
let user = null; // No user logged in
let result = null; // No result yet

// Checking for null
if (data === null) {
    console.log("Data is null");
}

// Note: typeof null returns "object" (JavaScript quirk)
console.log(typeof null); // "object"
```

### 6. Symbol (ES6+)

Represents a unique identifier.

```javascript
// Creating symbols
let symbol1 = Symbol();
let symbol2 = Symbol("description");

// Symbols are always unique
console.log(Symbol("id") === Symbol("id")); // false

// Use in object properties
let id = Symbol("id");
let user = {
    name: "John",
    [id]: 12345
};

console.log(user[id]); // 12345
console.log(user.id);  // undefined (different property)
```

### 7. BigInt (ES2020)

Represents integers with arbitrary precision.

```javascript
// Regular number limitation
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// BigInt for larger numbers
let bigNumber = BigInt(9007199254740992);
let anotherBig = 9007199254740992n; // 'n' suffix

// BigInt operations
let sum = 1n + 2n; // 3n
let diff = 10n - 3n; // 7n

// Cannot mix BigInt with regular numbers
// let mixed = 1n + 1; // TypeError
let mixed = 1n + BigInt(1); // 2n
```

## Non-Primitive (Reference) Data Types

### 8. Object

Represents collections of key-value pairs.

```javascript
// Object literal
let person = {
    name: "John",
    age: 30,
    isStudent: false,
    address: {
        city: "New York",
        country: "USA"
    }
};

// Accessing properties
console.log(person.name);        // "John"
console.log(person["age"]);      // 30
console.log(person.address.city); // "New York"

// Arrays (special type of object)
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

// Functions (special type of object)
function greet(name) {
    return `Hello, ${name}!`;
}

// Dates (built-in object)
let now = new Date();
console.log(now);

// Regular Expressions (built-in object)
let regex = /pattern/g;
```

## Type Checking

### Using `typeof` Operator

```javascript
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (quirk!)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 123n);        // "bigint"
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
```

### More Specific Type Checking

```javascript
// Check for null specifically
function isNull(value) {
    return value === null;
}

// Check for array
console.log(Array.isArray([]));     // true
console.log(Array.isArray({}));     // false

// Check for number (excluding NaN)
function isValidNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// instanceof for objects
let date = new Date();
console.log(date instanceof Date);   // true
console.log(date instanceof Object); // true
```

## Type Conversion

### Automatic (Implicit) Conversion

```javascript
// String + Number = String
console.log("5" + 3);      // "53"
console.log("5" - 3);      // 2 (string converted to number)
console.log("5" * 3);      // 15
console.log("5" / 3);      // 1.666...

// Boolean conversions
console.log(true + 1);     // 2
console.log(false + 1);    // 1

// Comparison conversions
console.log("5" == 5);     // true (loose equality)
console.log("5" === 5);    // false (strict equality)
```

### Manual (Explicit) Conversion

```javascript
// To String
let num = 123;
console.log(String(num));      // "123"
console.log(num.toString());   // "123"
console.log(num + "");         // "123"

// To Number
let str = "456";
console.log(Number(str));      // 456
console.log(parseInt(str));    // 456
console.log(parseFloat("3.14")); // 3.14
console.log(+str);             // 456 (unary plus)

// To Boolean
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(!!"hello");        // true (double negation)
```

## Memory Storage

### Stack vs Heap

```javascript
// Primitives stored in stack (by value)
let a = 5;
let b = a;    // Copies the value
a = 10;
console.log(b); // 5 (unchanged)

// Objects stored in heap (by reference)
let obj1 = { name: "John" };
let obj2 = obj1;    // Copies the reference
obj1.name = "Jane";
console.log(obj2.name); // "Jane" (changed)

// Creating independent copy
let obj3 = { ...obj1 };    // Shallow copy
let obj4 = JSON.parse(JSON.stringify(obj1)); // Deep copy
```

## Practical Examples

### Data Validation

```javascript
function validateUser(user) {
    // Check required fields
    if (typeof user.name !== 'string' || user.name.trim() === '') {
        return { valid: false, message: 'Name is required' };
    }
    
    if (typeof user.age !== 'number' || user.age < 0) {
        return { valid: false, message: 'Valid age is required' };
    }
    
    if (typeof user.email !== 'string' || !user.email.includes('@')) {
        return { valid: false, message: 'Valid email is required' };
    }
    
    return { valid: true };
}

// Usage
let user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
};

console.log(validateUser(user)); // { valid: true }
```

### Working with Different Types

```javascript
// Mixed data processing
function processData(data) {
    switch (typeof data) {
        case 'string':
            return data.toUpperCase();
        case 'number':
            return data * 2;
        case 'boolean':
            return !data;
        case 'object':
            if (Array.isArray(data)) {
                return data.length;
            }
            if (data === null) {
                return 'null value';
            }
            return Object.keys(data).length;
        default:
            return 'unknown type';
    }
}

console.log(processData("hello"));     // "HELLO"
console.log(processData(5));           // 10
console.log(processData(true));        // false
console.log(processData([1, 2, 3]));   // 3
console.log(processData({a: 1, b: 2})); // 2
```

## Summary Table

| Type | Example | typeof Result | Stored By |
|------|---------|---------------|-----------|
| String | `"hello"` | `"string"` | Value |
| Number | `42` | `"number"` | Value |
| Boolean | `true` | `"boolean"` | Value |
| Undefined | `undefined` | `"undefined"` | Value |
| Null | `null` | `"object"` | Value |
| Symbol | `Symbol("id")` | `"symbol"` | Value |
| BigInt | `123n` | `"bigint"` | Value |
| Object | `{}`, `[]`, `function` | `"object"` or `"function"` | Reference |

## Best Practices

1. **Use strict equality (`===`)** instead of loose equality (`==`)
2. **Validate data types** before operations
3. **Be careful with automatic type conversion**
4. **Use meaningful variable names** that indicate the expected type
5. **Handle `null` and `undefined`** explicitly
6. **Use TypeScript** for larger projects to catch type errors early