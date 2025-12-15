# Arrays in JavaScript

## 📌 What are Arrays?

Arrays are ordered collections that store multiple values in a single variable. They can hold different data types and are zero-indexed.

```javascript
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0]);  // "Apple" (first element)
console.log(fruits.length);  // 3
```

## 🎯 Creating Arrays

### Array Literal (Recommended)
```javascript
let empty = [];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null, {name: "John"}];
```

### Array Constructor
```javascript
let arr1 = new Array();        // []
let arr2 = new Array(3);       // [empty × 3] - length 3
let arr3 = new Array(1, 2, 3); // [1, 2, 3]
```

### Array.from() and Array.of()
```javascript
// Array.from() - create from iterable
let str = "hello";
let chars = Array.from(str);  // ["h", "e", "l", "l", "o"]

// Array.of() - create from arguments
let nums = Array.of(1, 2, 3);  // [1, 2, 3]
```

## 📊 Accessing Elements

```javascript
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Index access
console.log(fruits[0]);   // "Apple"
console.log(fruits[2]);   // "Orange"
console.log(fruits[-1]);  // undefined (no negative indexing)

// Last element
console.log(fruits[fruits.length - 1]);  // "Mango"

// Using at() method (ES2022)
console.log(fruits.at(0));   // "Apple"
console.log(fruits.at(-1));  // "Mango" (negative indexing works!)
```

## ✏️ Modifying Arrays

### Adding Elements
```javascript
let fruits = ["Apple", "Banana"];

// push() - add to end
fruits.push("Orange");
console.log(fruits);  // ["Apple", "Banana", "Orange"]

// unshift() - add to beginning
fruits.unshift("Mango");
console.log(fruits);  // ["Mango", "Apple", "Banana", "Orange"]

// Direct assignment
fruits[fruits.length] = "Grape";

// splice() - add at specific position
fruits.splice(2, 0, "Kiwi");  // At index 2, delete 0, add "Kiwi"
```

### Removing Elements
```javascript
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// pop() - remove from end
let last = fruits.pop();
console.log(last);    // "Mango"
console.log(fruits);  // ["Apple", "Banana", "Orange"]

// shift() - remove from beginning
let first = fruits.shift();
console.log(first);   // "Apple"
console.log(fruits);  // ["Banana", "Orange"]

// splice() - remove from specific position
fruits.splice(1, 1);  // At index 1, delete 1 element
console.log(fruits);  // ["Banana"]

// delete operator (leaves hole - avoid)
delete fruits[0];     // [empty, ...]
```

## 🔄 Array Iteration Methods

### forEach()
Executes a function for each element.

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2);
});

// With arrow function
numbers.forEach(num => console.log(num * 2));

// With index and array
numbers.forEach((num, index, arr) => {
    console.log(`${index}: ${num}`);
});
```

### map()
Creates new array by transforming each element.

```javascript
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

let squared = numbers.map(num => num ** 2);
console.log(squared);  // [1, 4, 9, 16, 25]

// With objects
let users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];

let names = users.map(user => user.name);
console.log(names);  // ["John", "Jane"]
```

### filter()
Creates new array with elements that pass a test.

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4, 6, 8, 10]

let greaterThan5 = numbers.filter(num => num > 5);
console.log(greaterThan5);  // [6, 7, 8, 9, 10]

// With objects
let users = [
    { name: "John", age: 30, active: true },
    { name: "Jane", age: 25, active: false },
    { name: "Bob", age: 35, active: true }
];

let activeUsers = users.filter(user => user.active);
console.log(activeUsers);  // John and Bob
```

### reduce()
Reduces array to single value.

```javascript
let numbers = [1, 2, 3, 4, 5];

// Sum all numbers
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 15

// Find maximum
let max = numbers.reduce((max, num) => num > max ? num : max);
console.log(max);  // 5

// Count occurrences
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count);  // { apple: 3, banana: 2, orange: 1 }

// Flatten array
let nested = [[1, 2], [3, 4], [5, 6]];
let flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat);  // [1, 2, 3, 4, 5, 6]
```

### find() and findIndex()
Find first element that passes a test.

```javascript
let numbers = [5, 12, 8, 130, 44];

// find() - returns element
let found = numbers.find(num => num > 10);
console.log(found);  // 12

// findIndex() - returns index
let index = numbers.findIndex(num => num > 10);
console.log(index);  // 1

// With objects
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];

let user = users.find(u => u.id === 2);
console.log(user);  // { id: 2, name: "Jane" }
```

### some() and every()
Test if elements meet a condition.

```javascript
let numbers = [1, 2, 3, 4, 5];

// some() - at least one passes
console.log(numbers.some(num => num > 4));    // true
console.log(numbers.some(num => num > 10));   // false

// every() - all pass
console.log(numbers.every(num => num > 0));   // true
console.log(numbers.every(num => num > 3));   // false

// With objects
let users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];

let allAdults = users.every(user => user.age >= 18);
console.log(allAdults);  // true
```

## 🔍 Searching Arrays

```javascript
let fruits = ["Apple", "Banana", "Orange", "Banana"];

// indexOf() - first occurrence
console.log(fruits.indexOf("Banana"));      // 1
console.log(fruits.indexOf("Grape"));       // -1 (not found)

// lastIndexOf() - last occurrence
console.log(fruits.lastIndexOf("Banana"));  // 3

// includes() - check existence (ES2016)
console.log(fruits.includes("Apple"));      // true
console.log(fruits.includes("Grape"));      // false
```

## ✂️ Slicing and Splicing

### slice() - Extract portion (doesn't modify original)
```javascript
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grape"];

let sliced1 = fruits.slice(1, 3);
console.log(sliced1);  // ["Banana", "Orange"]

let sliced2 = fruits.slice(2);
console.log(sliced2);  // ["Orange", "Mango", "Grape"]

let sliced3 = fruits.slice(-2);
console.log(sliced3);  // ["Mango", "Grape"]

console.log(fruits);  // Original unchanged
```

### splice() - Add/remove elements (modifies original)
```javascript
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Remove elements
let removed = fruits.splice(1, 2);
console.log(removed);  // ["Banana", "Orange"]
console.log(fruits);   // ["Apple", "Mango"]

// Add elements
fruits.splice(1, 0, "Kiwi", "Grape");
console.log(fruits);   // ["Apple", "Kiwi", "Grape", "Mango"]

// Replace elements
fruits.splice(1, 2, "Banana");
console.log(fruits);   // ["Apple", "Banana", "Mango"]
```

## 🔗 Joining and Splitting

```javascript
// join() - array to string
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.join());      // "Apple,Banana,Orange"
console.log(fruits.join(" - ")); // "Apple - Banana - Orange"
console.log(fruits.join(""));    // "AppleBananaOrange"

// concat() - combine arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = arr1.concat(arr2);
console.log(combined);  // [1, 2, 3, 4, 5, 6]

// Spread operator (modern)
let combined2 = [...arr1, ...arr2];
console.log(combined2);  // [1, 2, 3, 4, 5, 6]
```

## 🔄 Sorting Arrays

```javascript
let numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// sort() - sorts as strings by default
numbers.sort();
console.log(numbers);  // [1, 1, 2, 3, 4, 5, 6, 9]

// Numeric sort (ascending)
numbers.sort((a, b) => a - b);
console.log(numbers);  // [1, 1, 2, 3, 4, 5, 6, 9]

// Numeric sort (descending)
numbers.sort((a, b) => b - a);
console.log(numbers);  // [9, 6, 5, 4, 3, 2, 1, 1]

// String sort
let fruits = ["Banana", "Apple", "Orange", "Mango"];
fruits.sort();
console.log(fruits);  // ["Apple", "Banana", "Mango", "Orange"]

// Sort objects
let users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 35 }
];

users.sort((a, b) => a.age - b.age);  // Sort by age
console.log(users);  // Jane (25), John (30), Bob (35)

// reverse() - reverse array
numbers.reverse();
console.log(numbers);
```

## 📦 Destructuring Arrays (ES6)

```javascript
// Basic destructuring
let [first, second, third] = ["Apple", "Banana", "Orange"];
console.log(first);   // "Apple"
console.log(second);  // "Banana"

// Skip elements
let [a, , c] = [1, 2, 3];
console.log(a, c);  // 1, 3

// Rest operator
let [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head);  // 1
console.log(tail);  // [2, 3, 4, 5]

// Default values
let [x = 10, y = 20] = [5];
console.log(x, y);  // 5, 20

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);  // 2, 1
```

## 🌟 Spread Operator (ES6)

```javascript
// Copy array
let original = [1, 2, 3];
let copy = [...original];

// Combine arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];

// Add elements
let fruits = ["Apple", "Banana"];
let moreFruits = [...fruits, "Orange", "Mango"];

// Pass as function arguments
let numbers = [1, 5, 3, 9, 2];
console.log(Math.max(...numbers));  // 9

// Convert string to array
let chars = [..."Hello"];
console.log(chars);  // ["H", "e", "l", "l", "o"]
```

## 🎯 Multi-dimensional Arrays

```javascript
// 2D Array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]);  // 1
console.log(matrix[1][2]);  // 6

// Iterate 2D array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// Or with forEach
matrix.forEach(row => {
    row.forEach(num => console.log(num));
});

// 3D Array
let cube = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]]
];

console.log(cube[0][1][0]);  // 3
```

## 🧪 Practical Examples

### Remove Duplicates
```javascript
// Method 1: Using Set
let numbers = [1, 2, 2, 3, 4, 4, 5];
let unique = [...new Set(numbers)];
console.log(unique);  // [1, 2, 3, 4, 5]

// Method 2: Using filter
let unique2 = numbers.filter((num, index, arr) => {
    return arr.indexOf(num) === index;
});
```

### Flatten Array
```javascript
// Method 1: flat() (ES2019)
let nested = [1, [2, [3, [4]]]];
console.log(nested.flat());     // [1, 2, [3, [4]]]
console.log(nested.flat(2));    // [1, 2, 3, [4]]
console.log(nested.flat(Infinity));  // [1, 2, 3, 4]

// Method 2: reduce
function flattenArray(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), 
    []);
}
```

### Chunk Array
```javascript
function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
// [[1, 2, 3], [4, 5, 6], [7]]
```

### Shuffle Array
```javascript
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));
```

## 📚 Interview Questions & Answers

### Q1: What is the difference between array methods that mutate and don't mutate?
**Answer**:
**Mutating methods** (modify original):
- `push()`, `pop()`, `shift()`, `unshift()`
- `splice()`, `sort()`, `reverse()`

**Non-mutating methods** (return new array):
- `slice()`, `concat()`, `map()`, `filter()`, `reduce()`

```javascript
let arr = [1, 2, 3];
arr.push(4);  // Mutates: [1, 2, 3, 4]

let arr2 = [1, 2, 3];
let newArr = arr2.concat(4);  // Doesn't mutate: arr2 still [1, 2, 3]
```

### Q2: What is the difference between map() and forEach()?
**Answer**:
- `map()`: Returns a new array with transformed elements
- `forEach()`: Just iterates, returns undefined

```javascript
let numbers = [1, 2, 3];

let doubled = numbers.map(n => n * 2);  // [2, 4, 6]

numbers.forEach(n => console.log(n * 2));  // Just logs, returns undefined
```

### Q3: How do you remove duplicates from an array?
**Answer**:
```javascript
// Method 1: Set (easiest)
let unique = [...new Set([1, 2, 2, 3, 4, 4])];  // [1, 2, 3, 4]

// Method 2: filter
let unique2 = arr.filter((item, index) => arr.indexOf(item) === index);

// Method 3: reduce
let unique3 = arr.reduce((acc, item) => 
    acc.includes(item) ? acc : [...acc, item], 
[]);
```

### Q4: What is the difference between slice() and splice()?
**Answer**:
- `slice()`: Extracts portion, doesn't modify original
- `splice()`: Adds/removes elements, modifies original

```javascript
let arr = [1, 2, 3, 4, 5];

let sliced = arr.slice(1, 3);  // [2, 3], original unchanged

arr.splice(1, 2);  // Returns [2, 3], original becomes [1, 4, 5]
```

### Q5: How do you flatten a nested array?
**Answer**:
```javascript
// Method 1: flat() (ES2019)
[1, [2, [3]]].flat(2);  // [1, 2, 3]

// Method 2: reduce + recursion
function flatten(arr) {
    return arr.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val),
    []);
}
```

### Q6: What is the difference between find() and filter()?
**Answer**:
- `find()`: Returns first matching element
- `filter()`: Returns array of all matching elements

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.find(n => n > 2);    // 3 (first match)
numbers.filter(n => n > 2);  // [3, 4, 5] (all matches)
```

### Q7: How do you check if a value exists in an array?
**Answer**:
```javascript
let fruits = ["apple", "banana", "orange"];

// Method 1: includes() (ES2016)
fruits.includes("apple");  // true

// Method 2: indexOf()
fruits.indexOf("apple") !== -1;  // true

// Method 3: find()
fruits.find(f => f === "apple") !== undefined;  // true

// Method 4: some()
fruits.some(f => f === "apple");  // true
```

### Q8: What does reduce() do?
**Answer**: Reduces an array to a single value by executing a function on each element.

```javascript
let numbers = [1, 2, 3, 4, 5];

// Sum
let sum = numbers.reduce((total, num) => total + num, 0);  // 15

// Max
let max = numbers.reduce((max, num) => num > max ? num : max);  // 5
```

### Q9: How do you copy an array?
**Answer**:
```javascript
let original = [1, 2, 3];

// Method 1: Spread operator
let copy1 = [...original];

// Method 2: slice()
let copy2 = original.slice();

// Method 3: Array.from()
let copy3 = Array.from(original);

// Method 4: concat()
let copy4 = [].concat(original);

// Note: These are shallow copies!
```

### Q10: What is array destructuring?
**Answer**: Extracting values from arrays into variables (ES6).

```javascript
let [a, b, c] = [1, 2, 3];
console.log(a, b, c);  // 1, 2, 3

// With rest
let [first, ...rest] = [1, 2, 3, 4];
console.log(first);  // 1
console.log(rest);   // [2, 3, 4]

// Swapping
[a, b] = [b, a];
```

## 🎓 Key Takeaways

- Arrays store ordered collections
- Zero-indexed (first element is index 0)
- `map()`, `filter()`, `reduce()` are powerful transformation methods
- Use spread operator `...` for copying and combining
- Understand mutating vs non-mutating methods
- `forEach()` for iteration, `map()` for transformation
- Array destructuring simplifies value extraction
- Modern methods like `find()`, `includes()`, `flat()` improve readability

## 🔗 Next Topic

Continue to [Objects](../02-Objects/README.md) to learn about key-value pair data structures!

---

**Practice Challenge**: Create functions to find the second largest number in an array and to rotate an array by k positions!
