# Variables and Data Types

## 📌 What are Variables?

Variables are containers for storing data values. Think of them as labeled boxes where you can store information and retrieve it later.

```javascript
let name = "John";  // A box labeled 'name' containing "John"
let age = 25;       // A box labeled 'age' containing 25
```

## 🔤 Variable Declaration Keywords

JavaScript has three ways to declare variables:

### 1. var (Old way - avoid in modern code)
```javascript
var name = "John";
var age = 25;
```

**Characteristics:**
- Function-scoped
- Can be redeclared
- Can be updated
- Hoisted (moved to top of scope)

### 2. let (Modern - recommended for changing values)
```javascript
let name = "John";
name = "Jane";  // Can be changed
```

**Characteristics:**
- Block-scoped
- Cannot be redeclared in same scope
- Can be updated
- Not hoisted (temporal dead zone)

### 3. const (Modern - recommended for constants)
```javascript
const PI = 3.14159;
// PI = 3.14;  // Error: Cannot reassign
```

**Characteristics:**
- Block-scoped
- Cannot be redeclared
- Cannot be reassigned
- Must be initialized during declaration

## 📊 Comparison Table

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Redeclare | ✅ Yes | ❌ No | ❌ No |
| Reassign | ✅ Yes | ✅ Yes | ❌ No |
| Hoisting | ✅ Yes | ❌ No (TDZ) | ❌ No (TDZ) |
| Initialize | Optional | Optional | Required |

## 🎯 Scoping Examples

### Block Scope (let and const)
```javascript
{
    let x = 10;
    const y = 20;
    console.log(x, y); // 10, 20
}
// console.log(x, y); // Error: x and y not defined
```

### Function Scope (var)
```javascript
function test() {
    var x = 10;
    if (true) {
        var x = 20;  // Same variable!
        console.log(x); // 20
    }
    console.log(x); // 20 (var ignores block scope)
}
```

### let vs var in loops
```javascript
// With var
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3 (var is function-scoped)

// With let
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2 (let is block-scoped)
```

## 📝 Variable Naming Rules

### Valid Names
```javascript
let firstName = "John";      // ✅ camelCase (recommended)
let first_name = "John";     // ✅ snake_case
let FirstName = "John";      // ✅ PascalCase (for classes)
let _name = "John";          // ✅ starts with underscore
let $name = "John";          // ✅ starts with dollar sign
let name2 = "John";          // ✅ contains numbers
```

### Invalid Names
```javascript
let 2name = "John";          // ❌ starts with number
let first-name = "John";     // ❌ contains hyphen
let first name = "John";     // ❌ contains space
let let = "John";            // ❌ reserved keyword
```

### Naming Conventions
```javascript
// Variables and functions: camelCase
let userName = "John";
function getUserName() {}

// Constants: UPPER_SNAKE_CASE
const MAX_SIZE = 100;
const API_KEY = "abc123";

// Classes: PascalCase
class UserProfile {}

// Private variables: _prefix (convention only)
let _privateVar = "secret";
```

## 🎲 Data Types in JavaScript

JavaScript has **8 data types** (7 primitive + 1 reference):

### Primitive Data Types

#### 1. String
```javascript
let name = "John";
let city = 'New York';
let message = `Hello, ${name}!`;  // Template literal

// String properties and methods
console.log(name.length);        // 4
console.log(name.toUpperCase()); // JOHN
console.log(name.toLowerCase()); // john
```

#### 2. Number
```javascript
let age = 25;              // Integer
let price = 99.99;         // Decimal
let negative = -10;        // Negative
let billion = 1e9;         // Scientific notation (1,000,000,000)

// Special numeric values
let infinity = Infinity;   // Division by zero
let notANumber = NaN;      // Invalid mathematical operation

console.log(10 / 0);       // Infinity
console.log("abc" * 5);    // NaN
```

#### 3. BigInt (ES2020)
```javascript
// For integers larger than 2^53 - 1
let bigNumber = 1234567890123456789012345678901234567890n;
let anotherBig = BigInt("9999999999999999999999999999");

console.log(bigNumber + 1n); // Must use 'n' suffix
```

#### 4. Boolean
```javascript
let isActive = true;
let isCompleted = false;

// Boolean from comparisons
let isGreater = 10 > 5;    // true
let isEqual = 5 === "5";   // false
```

#### 5. Undefined
```javascript
let x;                     // Declared but not assigned
console.log(x);            // undefined

function test() {}
console.log(test());       // undefined (no return value)
```

#### 6. Null
```javascript
let user = null;           // Intentionally empty value

// null vs undefined
let a;                     // undefined (not assigned)
let b = null;              // null (explicitly set to nothing)
```

#### 7. Symbol (ES6)
```javascript
let id1 = Symbol('id');
let id2 = Symbol('id');

console.log(id1 === id2);  // false (always unique)

// Use case: unique object keys
let user = {
    name: "John",
    [id1]: 123
};
```

### Reference Data Type

#### 8. Object
```javascript
// Object literal
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Array (special type of object)
let colors = ["red", "green", "blue"];

// Function (special type of object)
function greet() {
    return "Hello!";
}

// Date (built-in object)
let today = new Date();
```

## 🔍 typeof Operator

The `typeof` operator returns the data type of a variable:

```javascript
console.log(typeof "Hello");         // "string"
console.log(typeof 42);              // "number"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof null);            // "object" (JavaScript bug!)
console.log(typeof Symbol('id'));    // "symbol"
console.log(typeof 123n);            // "bigint"
console.log(typeof {});              // "object"
console.log(typeof []);              // "object"
console.log(typeof function(){});    // "function"
```

## 🔄 Type Conversion

### Implicit Conversion (Type Coercion)
```javascript
// String coercion
console.log("5" + 2);        // "52" (number to string)
console.log("5" - 2);        // 3 (string to number)
console.log("5" * "2");      // 10 (both to numbers)

// Boolean coercion
console.log(5 + true);       // 6 (true = 1)
console.log(5 + false);      // 5 (false = 0)
```

### Explicit Conversion

#### To String
```javascript
let num = 123;
let str1 = String(num);      // "123"
let str2 = num.toString();   // "123"
let str3 = "" + num;         // "123"
```

#### To Number
```javascript
let str = "123";
let num1 = Number(str);      // 123
let num2 = parseInt(str);    // 123
let num3 = parseFloat("12.5"); // 12.5
let num4 = +str;             // 123 (unary plus)

console.log(Number("123abc")); // NaN
console.log(parseInt("123abc")); // 123 (parses until non-digit)
```

#### To Boolean
```javascript
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("Hello"));  // true
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false

// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy
```

## 🎨 Template Literals (ES6)

```javascript
let name = "John";
let age = 30;

// Old way
console.log("My name is " + name + " and I'm " + age);

// Modern way (template literals)
console.log(`My name is ${name} and I'm ${age}`);

// Multi-line strings
let message = `
    Hello,
    This is a
    multi-line string
`;

// Expressions in template literals
console.log(`Sum: ${10 + 20}`);
console.log(`Is adult: ${age >= 18 ? 'Yes' : 'No'}`);
```

## 💡 Best Practices

1. **Use `const` by default**, `let` only when you need to reassign
```javascript
const PI = 3.14;           // Won't change
let counter = 0;           // Will change
```

2. **Avoid `var`** in modern JavaScript
```javascript
// ❌ Avoid
var name = "John";

// ✅ Use
const name = "John";
```

3. **Initialize variables when declaring**
```javascript
// ❌ Avoid
let name;
// ... many lines later
name = "John";

// ✅ Better
const name = "John";
```

4. **Use descriptive variable names**
```javascript
// ❌ Avoid
let x = 10;
let y = 20;

// ✅ Better
const userAge = 10;
const maxAttempts = 20;
```

5. **One variable per line**
```javascript
// ❌ Avoid
let name = "John", age = 30, city = "NYC";

// ✅ Better
const name = "John";
const age = 30;
const city = "NYC";
```

## 🧪 Practice Examples

### Example 1: Variable Swap
```javascript
let a = 5;
let b = 10;

// Using temporary variable
let temp = a;
a = b;
b = temp;
console.log(a, b); // 10, 5

// Using destructuring (ES6)
[a, b] = [b, a];
console.log(a, b); // 5, 10
```

### Example 2: Type Checking
```javascript
function checkType(value) {
    console.log(`Value: ${value}`);
    console.log(`Type: ${typeof value}`);
    console.log(`Is Number: ${typeof value === 'number'}`);
    console.log('---');
}

checkType(42);
checkType("Hello");
checkType(true);
checkType(null);
checkType(undefined);
```

### Example 3: Constant Object
```javascript
// const prevents reassignment, not mutation
const person = {
    name: "John",
    age: 30
};

// ✅ This works (modifying properties)
person.age = 31;
person.city = "NYC";

// ❌ This doesn't work (reassigning)
// person = { name: "Jane" };  // Error!
```

## 📚 Interview Questions & Answers

### Q1: What is the difference between var, let, and const?
**Answer**: 
- **var**: Function-scoped, can be redeclared and updated, hoisted
- **let**: Block-scoped, cannot be redeclared, can be updated, not hoisted (TDZ)
- **const**: Block-scoped, cannot be redeclared or reassigned, must be initialized

**Best Practice**: Use `const` by default, `let` when reassignment is needed, avoid `var`.

### Q2: What are the primitive data types in JavaScript?
**Answer**: JavaScript has 7 primitive types:
1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol

And one reference type: Object (includes arrays, functions, dates, etc.)

### Q3: What is the difference between null and undefined?
**Answer**:
- **undefined**: Variable declared but not assigned a value
- **null**: Explicitly assigned to represent "no value"

```javascript
let a;              // undefined (not assigned)
let b = null;       // null (intentionally empty)
console.log(typeof a); // "undefined"
console.log(typeof b); // "object" (JavaScript quirk)
```

### Q4: What is type coercion?
**Answer**: Type coercion is the automatic conversion of values from one data type to another. JavaScript performs implicit coercion in certain operations:

```javascript
console.log("5" + 2);    // "52" (number to string)
console.log("5" - 2);    // 3 (string to number)
console.log(true + 1);   // 2 (boolean to number)
```

### Q5: What are falsy values in JavaScript?
**Answer**: There are 6 falsy values in JavaScript:
1. `false`
2. `0`
3. `""` (empty string)
4. `null`
5. `undefined`
6. `NaN`

Everything else is truthy.

### Q6: What is hoisting?
**Answer**: Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. Variables declared with `var` and function declarations are hoisted.

```javascript
console.log(x);  // undefined (not error!)
var x = 5;

// Interpreted as:
var x;
console.log(x);
x = 5;
```

`let` and `const` are not hoisted (temporal dead zone):
```javascript
console.log(y);  // ReferenceError
let y = 5;
```

### Q7: What is the Temporal Dead Zone (TDZ)?
**Answer**: TDZ is the period between entering scope and variable declaration where the variable cannot be accessed. It applies to `let` and `const`.

```javascript
{
    // TDZ starts
    console.log(x);  // ReferenceError
    let x = 10;      // TDZ ends
}
```

### Q8: Can you change a const object's properties?
**Answer**: Yes! `const` prevents reassignment of the variable, but doesn't make the object immutable:

```javascript
const obj = { name: "John" };
obj.name = "Jane";     // ✅ Works
obj.age = 30;          // ✅ Works
// obj = {};           // ❌ Error: Assignment to constant
```

To make an object immutable, use `Object.freeze()`:
```javascript
const obj = Object.freeze({ name: "John" });
obj.name = "Jane";  // Silently fails (error in strict mode)
```

### Q9: What is NaN and how do you check for it?
**Answer**: NaN stands for "Not-a-Number" and results from invalid mathematical operations.

```javascript
console.log("abc" * 5);     // NaN
console.log(parseInt("abc")); // NaN

// Checking for NaN
console.log(typeof NaN);         // "number" (ironically!)
console.log(NaN === NaN);        // false (NaN is not equal to itself)
console.log(isNaN("abc"));       // true
console.log(Number.isNaN(NaN));  // true (more reliable)
```

### Q10: What is the difference between == and ===?
**Answer**:
- **==** (loose equality): Performs type coercion before comparison
- **===** (strict equality): No type coercion, compares type and value

```javascript
console.log(5 == "5");    // true (coerces string to number)
console.log(5 === "5");   // false (different types)
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

**Best Practice**: Always use `===` to avoid unexpected coercion.

## 🎓 Key Takeaways

- Use `const` by default, `let` when needed, avoid `var`
- JavaScript has 7 primitive types and 1 reference type (Object)
- Variables must start with letter, `_`, or `$`
- Use camelCase for variables and functions
- `typeof` operator checks data types
- Understand type coercion and use explicit conversion when needed
- Template literals make string concatenation easier

## 🔗 Next Topic

Continue to [Operators](../03-Operators/README.md) to learn how to work with data!

---

**Practice Challenge**: Create variables of each data type and use `typeof` to check them. Try converting between types!
