# Operators in JavaScript

## 📌 What are Operators?

Operators are special symbols that perform operations on operands (values and variables). They are the building blocks for performing calculations, comparisons, and logical operations.

```javascript
let sum = 10 + 5;  // + is an operator, 10 and 5 are operands
```

## 🔢 Arithmetic Operators

Perform mathematical calculations.

### Basic Arithmetic
```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 (Addition)
console.log(a - b);   // 7  (Subtraction)
console.log(a * b);   // 30 (Multiplication)
console.log(a / b);   // 3.333... (Division)
console.log(a % b);   // 1  (Modulus/Remainder)
console.log(a ** b);  // 1000 (Exponentiation - ES2016)
```

### Modulus (%) Operator
```javascript
// Finding remainder
console.log(10 % 3);   // 1
console.log(17 % 5);   // 2

// Check if even or odd
let num = 15;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");  // Outputs: Odd
}
```

### Exponentiation (**) Operator
```javascript
console.log(2 ** 3);   // 8 (2 × 2 × 2)
console.log(5 ** 2);   // 25
console.log(10 ** 0);  // 1

// Alternative: Math.pow()
console.log(Math.pow(2, 3));  // 8
```

## ➕➖ Increment and Decrement

### Increment (++)
```javascript
let x = 5;

// Post-increment (returns original value, then increments)
console.log(x++);  // 5
console.log(x);    // 6

// Pre-increment (increments first, then returns)
let y = 5;
console.log(++y);  // 6
console.log(y);    // 6
```

### Decrement (--)
```javascript
let x = 5;

// Post-decrement
console.log(x--);  // 5
console.log(x);    // 4

// Pre-decrement
let y = 5;
console.log(--y);  // 4
console.log(y);    // 4
```

### Practical Example
```javascript
let counter = 0;
console.log(counter++);  // 0 (use then increment)
console.log(counter);    // 1

let points = 10;
console.log(++points);   // 11 (increment then use)
console.log(points);     // 11
```

## 🎯 Assignment Operators

Assign values to variables.

### Basic Assignment
```javascript
let x = 10;  // Assigns 10 to x
```

### Compound Assignment
```javascript
let x = 10;

x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x %= 4;   // x = x % 4  → 2
x **= 3;  // x = x ** 3 → 8
```

### Chaining Assignments
```javascript
let a, b, c;
a = b = c = 10;
console.log(a, b, c);  // 10 10 10

// Equivalent to:
c = 10;
b = c;
a = b;
```

## ⚖️ Comparison Operators

Compare two values and return a boolean (true/false).

### Equality Operators

```javascript
let a = 5;
let b = "5";

// Equal (loose - with type coercion)
console.log(a == b);    // true (converts string to number)

// Strict Equal (no type coercion)
console.log(a === b);   // false (different types)

// Not Equal (loose)
console.log(a != b);    // false

// Strict Not Equal
console.log(a !== b);   // true (different types)
```

### Relational Operators
```javascript
let x = 10;
let y = 5;

console.log(x > y);     // true  (Greater than)
console.log(x < y);     // false (Less than)
console.log(x >= 10);   // true  (Greater than or equal)
console.log(y <= 5);    // true  (Less than or equal)
```

### Comparison Truth Table
```javascript
console.log(5 == "5");      // true
console.log(5 === "5");     // false
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(0 == false);    // true
console.log(0 === false);   // false
console.log("" == false);   // true
console.log("" === false);  // false
```

## 🧠 Logical Operators

Combine multiple boolean conditions.

### AND (&&)
Returns true only if ALL conditions are true.

```javascript
let age = 25;
let hasLicense = true;

// Can drive if age >= 18 AND has license
console.log(age >= 18 && hasLicense);  // true

console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false
```

### OR (||)
Returns true if AT LEAST ONE condition is true.

```javascript
let isWeekend = false;
let isHoliday = true;

// Day off if weekend OR holiday
console.log(isWeekend || isHoliday);  // true

console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false
```

### NOT (!)
Inverts the boolean value.

```javascript
let isRaining = false;
console.log(!isRaining);  // true

console.log(!true);       // false
console.log(!false);      // true
console.log(!!true);      // true (double negation)
console.log(!!"hello");   // true (convert to boolean)
```

### Short-Circuit Evaluation

```javascript
// AND: stops at first false
let result1 = false && console.log("This won't run");

// OR: stops at first true
let result2 = true || console.log("This won't run");

// Practical use: Default values
let username = "";
let displayName = username || "Guest";
console.log(displayName);  // "Guest"

// Practical use: Null checking
let user = null;
user && user.greet();  // Won't error because user is null
```

## ❓ Ternary (Conditional) Operator

Shorthand for if-else statements: `condition ? valueIfTrue : valueIfFalse`

### Basic Usage
```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);  // "Adult"

// Equivalent if-else
let status2;
if (age >= 18) {
    status2 = "Adult";
} else {
    status2 = "Minor";
}
```

### Nested Ternary
```javascript
let score = 75;
let grade = score >= 90 ? "A" : 
            score >= 80 ? "B" : 
            score >= 70 ? "C" : 
            score >= 60 ? "D" : "F";
console.log(grade);  // "C"

// More readable with if-else for complex conditions
```

### Practical Examples
```javascript
// Even or Odd
let num = 15;
console.log(num % 2 === 0 ? "Even" : "Odd");

// Max of two numbers
let max = a > b ? a : b;

// Pluralization
let apples = 1;
console.log(`${apples} apple${apples !== 1 ? 's' : ''}`);
```

## 🔗 String Operators

### Concatenation (+)
```javascript
let firstName = "John";
let lastName = "Doe";

// Using + operator
let fullName = firstName + " " + lastName;
console.log(fullName);  // "John Doe"

// Using += operator
let message = "Hello";
message += " World";
message += "!";
console.log(message);  // "Hello World!"
```

### Template Literals (Modern approach)
```javascript
let name = "John";
let age = 30;

// Old way
console.log("My name is " + name + " and I'm " + age + " years old.");

// Modern way (ES6)
console.log(`My name is ${name} and I'm ${age} years old.`);
```

## 🎭 Type Operators

### typeof Operator
```javascript
console.log(typeof 42);          // "number"
console.log(typeof "Hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (JavaScript bug)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
```

### instanceof Operator
```javascript
let arr = [1, 2, 3];
let date = new Date();

console.log(arr instanceof Array);   // true
console.log(date instanceof Date);   // true
console.log(arr instanceof Object);  // true (arrays are objects)

// Checking array properly
console.log(Array.isArray(arr));     // true
```

## 🔀 Nullish Coalescing Operator (??)

Returns right operand when left is `null` or `undefined` (ES2020).

```javascript
let username = null;
let defaultName = "Guest";

// Using || (treats "", 0, false as falsy)
let name1 = username || defaultName;

// Using ?? (only null/undefined)
let name2 = username ?? defaultName;

// Difference:
let value1 = 0 || 100;    // 100 (0 is falsy)
let value2 = 0 ?? 100;    // 0 (0 is not null/undefined)

let value3 = "" || "default";   // "default"
let value4 = "" ?? "default";   // "" (empty string is valid)
```

## ⛓️ Optional Chaining Operator (?.)

Safely access nested object properties (ES2020).

```javascript
let user = {
    name: "John",
    address: {
        city: "New York"
    }
};

// Without optional chaining (can error)
// console.log(user.contact.phone);  // Error!

// With optional chaining
console.log(user.contact?.phone);    // undefined (no error)
console.log(user.address?.city);     // "New York"

// With arrays
let users = null;
console.log(users?.[0]);             // undefined

// With functions
let obj = {};
obj.someMethod?.();                  // No error if method doesn't exist
```

## 📊 Operator Precedence

Operators are evaluated in specific order:

```javascript
let result = 10 + 5 * 2;
console.log(result);  // 20, not 30 (* before +)

// Precedence (highest to lowest):
// 1. Grouping: ()
// 2. Increment/Decrement: ++ --
// 3. NOT: !
// 4. Exponentiation: **
// 5. Multiplication/Division: * / %
// 6. Addition/Subtraction: + -
// 7. Comparison: < > <= >=
// 8. Equality: == != === !==
// 9. Logical AND: &&
// 10. Logical OR: ||
// 11. Ternary: ? :
// 12. Assignment: = += -= *= /=
```

### Using Parentheses
```javascript
let result1 = 10 + 5 * 2;      // 20
let result2 = (10 + 5) * 2;    // 30

let result3 = 10 > 5 && 3 < 1;           // false
let result4 = 10 > 5 && (3 < 1 || 5 > 2); // true
```

## 💡 Best Practices

### 1. Use Strict Equality
```javascript
// ❌ Avoid
if (value == "5") { }

// ✅ Better
if (value === "5") { }
```

### 2. Use Appropriate Operators
```javascript
// ❌ Avoid long conditions
if (x === 1 || x === 2 || x === 3) { }

// ✅ Better
if ([1, 2, 3].includes(x)) { }
```

### 3. Parentheses for Clarity
```javascript
// ❌ Less clear
let result = a + b * c - d / e;

// ✅ More clear
let result = a + (b * c) - (d / e);
```

### 4. Use Ternary for Simple Conditions
```javascript
// ❌ Overkill for simple condition
let status;
if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}

// ✅ Simpler
let status = age >= 18 ? "Adult" : "Minor";
```

### 5. Avoid Complex Ternary Nesting
```javascript
// ❌ Hard to read
let result = a ? b ? c ? d : e : f : g;

// ✅ Use if-else for complex logic
let result;
if (a) {
    if (b) {
        result = c ? d : e;
    } else {
        result = f;
    }
} else {
    result = g;
}
```

## 🧪 Practice Examples

### Example 1: Calculator
```javascript
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log(calculate(10, 5, '+'));  // 15
console.log(calculate(10, 5, '/'));  // 2
```

### Example 2: Age Category
```javascript
function getAgeCategory(age) {
    if (age < 0) return "Invalid age";
    if (age < 13) return "Child";
    if (age < 20) return "Teenager";
    if (age < 60) return "Adult";
    return "Senior";
}

console.log(getAgeCategory(15));  // "Teenager"
console.log(getAgeCategory(45));  // "Adult"
```

### Example 3: Validation
```javascript
function validateUser(username, password) {
    let isUsernameValid = username && username.length >= 3;
    let isPasswordValid = password && password.length >= 8;
    
    return isUsernameValid && isPasswordValid;
}

console.log(validateUser("john", "password123"));  // true
console.log(validateUser("ab", "12345"));          // false
```

## 📚 Interview Questions & Answers

### Q1: What is the difference between == and ===?
**Answer**:
- `==` (loose equality): Compares values after type coercion
- `===` (strict equality): Compares both value and type without coercion

```javascript
console.log(5 == "5");    // true (coerces string to number)
console.log(5 === "5");   // false (different types)
```

**Best Practice**: Always use `===` to avoid unexpected results.

### Q2: What is the difference between pre-increment and post-increment?
**Answer**:
- **Pre-increment (++x)**: Increments first, then returns the value
- **Post-increment (x++)**: Returns the value first, then increments

```javascript
let x = 5;
console.log(x++);  // 5 (returns 5, then becomes 6)
console.log(x);    // 6

let y = 5;
console.log(++y);  // 6 (becomes 6, then returns 6)
console.log(y);    // 6
```

### Q3: What is short-circuit evaluation?
**Answer**: JavaScript stops evaluating logical expressions once the result is determined:

- **AND (&&)**: Stops at first falsy value
- **OR (||)**: Stops at first truthy value

```javascript
false && console.log("Won't run");     // Stops at false
true || console.log("Won't run");      // Stops at true

// Practical use
let user = null;
user && user.greet();  // Safe: won't call greet() if user is null
```

### Q4: What is the ternary operator?
**Answer**: A shorthand for if-else statements with syntax: `condition ? valueIfTrue : valueIfFalse`

```javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
```

### Q5: What are the falsy values in JavaScript?
**Answer**: There are 6 falsy values:
1. `false`
2. `0`
3. `""` (empty string)
4. `null`
5. `undefined`
6. `NaN`

Everything else is truthy.

### Q6: What is operator precedence?
**Answer**: The order in which operators are evaluated in an expression. Multiplication and division have higher precedence than addition and subtraction.

```javascript
let result = 10 + 5 * 2;  // 20 (not 30)
// Multiplication first: 5 * 2 = 10
// Then addition: 10 + 10 = 20
```

Use parentheses to override: `(10 + 5) * 2 = 30`

### Q7: What is the difference between || and ?? operators?
**Answer**:
- **|| (OR)**: Returns right operand if left is any falsy value
- **?? (Nullish Coalescing)**: Returns right operand only if left is `null` or `undefined`

```javascript
let value1 = 0 || 100;    // 100 (0 is falsy)
let value2 = 0 ?? 100;    // 0 (0 is not null/undefined)

let value3 = "" || "default";   // "default" (empty string is falsy)
let value4 = "" ?? "default";   // "" (empty string is not null/undefined)
```

### Q8: What is the typeof operator?
**Answer**: Returns a string indicating the type of a variable.

```javascript
console.log(typeof 42);        // "number"
console.log(typeof "Hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (JavaScript quirk/bug)
```

### Q9: What is optional chaining (?.)?
**Answer**: Safely access nested object properties without errors if a property doesn't exist (ES2020).

```javascript
let user = null;
// console.log(user.address.city);  // Error!
console.log(user?.address?.city);   // undefined (no error)
```

### Q10: How does the modulus (%) operator work?
**Answer**: Returns the remainder after division.

```javascript
console.log(10 % 3);  // 1 (10 ÷ 3 = 3 remainder 1)
console.log(17 % 5);  // 2 (17 ÷ 5 = 3 remainder 2)

// Common use: Check even/odd
let num = 8;
console.log(num % 2 === 0);  // true (even)
```

## 🎓 Key Takeaways

- Operators perform operations on values
- Use `===` instead of `==` for comparisons
- Understand operator precedence and use parentheses for clarity
- Short-circuit evaluation can prevent errors
- Ternary operator is great for simple conditions
- Modern operators (??, ?.) make code safer and cleaner
- Pre/post increment behave differently

## 🔗 Next Topic

Continue to [Control Flow](../04-Control-Flow/README.md) to learn decision-making in JavaScript!

---

**Practice Challenge**: Create a simple calculator that uses all arithmetic operators and handles division by zero!
