# ES6+ Modern Features

## 📌 Modern JavaScript Features

ES6 (ES2015) and later versions introduced powerful features that modernized JavaScript.

## Destructuring

### Array Destructuring
```javascript
let [a, b, c] = [1, 2, 3];
let [first, ...rest] = [1, 2, 3, 4];
let [x = 10, y = 20] = [5];
```

### Object Destructuring
```javascript
let { name, age } = { name: "John", age: 30 };
let { name: userName, age: userAge } = user;
let { name, ...otherProps } = user;
```

## Spread Operator (...)
```javascript
// Array spread
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];

// Object spread
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };

// Function arguments
Math.max(...[1, 5, 3]);
```

## Rest Parameters
```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

sum(1, 2, 3, 4, 5); // 15
```

## Enhanced Object Literals
```javascript
let name = "John";
let age = 30;

// Property shorthand
let user = { name, age };

// Method shorthand
let obj = {
    greet() {
        console.log("Hello");
    }
};

// Computed property names
let prop = "dynamicKey";
let obj2 = {
    [prop]: "value"
};
```

## Template Literals
```javascript
let name = "John";
let greeting = `Hello, ${name}!`;

// Multi-line
let html = `
    <div>
        <h1>${title}</h1>
        <p>${content}</p>
    </div>
`;

// Tagged templates
function tag(strings, ...values) {
    return strings[0] + values[0] + strings[1];
}

let result = tag`Hello ${name}!`;
```

## Arrow Functions
```javascript
// Regular
let add = (a, b) => a + b;

// With block
let multiply = (a, b) => {
    return a * b;
};

// Single parameter
let square = x => x * x;

// No parameters
let greet = () => console.log("Hi");
```

## Default Parameters
```javascript
function greet(name = "Guest", greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}
```

## Optional Chaining (?.)
```javascript
let user = null;
console.log(user?.address?.city); // undefined (no error)

// With arrays
users?.[0]?.name;

// With functions
object.method?.();
```

## Nullish Coalescing (??)
```javascript
let value = null ?? "default";     // "default"
let value2 = 0 ?? "default";       // 0 (not default!)
let value3 = "" ?? "default";      // "" (not default!)

// vs OR operator
let val1 = 0 || "default";         // "default"
let val2 = 0 ?? "default";         // 0
```

## for...of Loop
```javascript
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

// With index
for (let [index, fruit] of fruits.entries()) {
    console.log(index, fruit);
}
```

## Map and Set

### Map
```javascript
let map = new Map();
map.set("name", "John");
map.set("age", 30);

console.log(map.get("name")); // "John"
console.log(map.has("age"));  // true
map.delete("age");
map.clear();
```

### Set
```javascript
let set = new Set([1, 2, 3, 3, 4]);
console.log(set); // Set(4) {1, 2, 3, 4}

set.add(5);
set.has(3); // true
set.delete(2);
set.clear();
```

## Symbol
```javascript
let id = Symbol("id");
let id2 = Symbol("id");

console.log(id === id2); // false (always unique)

// Use as object key
let obj = {
    [id]: 123
};
```

## Interview Questions

**Q: What is destructuring?**
A: Extracting values from arrays/objects into variables in a single statement.

**Q: Difference between spread and rest?**
A: Spread expands array/object. Rest collects multiple elements into array.

**Q: What is optional chaining?**
A: Safely access nested properties without errors: `obj?.prop?.nested`

**Q: Difference between ?? and ||?**
A: `??` only checks null/undefined. `||` checks any falsy value.

**Q: What are template literals?**
A: String enclosed in backticks with embedded expressions: `` `Hello ${name}` ``

[See Async JS](../03-Async-JS/README.md) | [Continue to Modules](../05-Modules/README.md)
