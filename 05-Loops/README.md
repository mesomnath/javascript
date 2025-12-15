# Loops in JavaScript

## 📌 What are Loops?

Loops allow you to execute a block of code repeatedly. Instead of writing the same code multiple times, loops help you iterate efficiently.

```javascript
// Without loop
console.log(1);
console.log(2);
console.log(3);

// With loop
for (let i = 1; i <= 3; i++) {
    console.log(i);
}
```

## 🔄 for Loop

Most common loop for known number of iterations.

### Syntax
```javascript
for (initialization; condition; increment) {
    // Code to execute
}
```

### Basic Examples
```javascript
// Count 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5

// Count 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Even numbers
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10
```

### Array Iteration
```javascript
let fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// With index and value
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}
// Output:
// 0: Apple
// 1: Banana
// 2: Orange
```

### Nested Loops
```javascript
// Multiplication table
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
}

// Pattern printing
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
// Output:
// *
// **
// ***
// ****
// *****
```

## 🔁 while Loop

Executes as long as condition is true. Used when number of iterations is unknown.

### Syntax
```javascript
while (condition) {
    // Code to execute
}
```

### Basic Examples
```javascript
// Count 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// User input simulation
let password = "";
while (password !== "secret") {
    password = prompt("Enter password:");
}
console.log("Access granted!");

// Sum until threshold
let sum = 0;
let num = 1;
while (sum < 100) {
    sum += num;
    num++;
}
console.log(`Sum: ${sum}, Numbers added: ${num - 1}`);
```

### Infinite Loop Warning
```javascript
// ❌ Infinite loop - NEVER do this!
while (true) {
    console.log("This runs forever!");
    // Missing break or condition change
}

// ✅ Always have an exit condition
let counter = 0;
while (true) {
    console.log(counter);
    counter++;
    if (counter >= 5) break;
}
```

## 🔃 do...while Loop

Executes at least once before checking condition.

### Syntax
```javascript
do {
    // Code to execute
} while (condition);
```

### Examples
```javascript
// Executes at least once
let i = 10;
do {
    console.log(i);
    i++;
} while (i < 5);
// Output: 10 (runs once even though condition is false)

// Menu system
let choice;
do {
    console.log("1. Option A");
    console.log("2. Option B");
    console.log("3. Exit");
    choice = prompt("Enter choice:");
} while (choice !== "3");

// Validation
let userInput;
do {
    userInput = prompt("Enter a number between 1 and 10:");
} while (userInput < 1 || userInput > 10);
```

## 🎯 for...of Loop (ES6)

Iterates over iterable objects (arrays, strings, etc.).

### Syntax
```javascript
for (variable of iterable) {
    // Code to execute
}
```

### Examples
```javascript
// Array iteration
let fruits = ["Apple", "Banana", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

// String iteration
let word = "Hello";
for (let char of word) {
    console.log(char);
}
// Output: H, e, l, l, o

// With array of objects
let users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];

for (let user of users) {
    console.log(`${user.name} is ${user.age} years old`);
}

// With Set
let numbers = new Set([1, 2, 3, 4, 5]);
for (let num of numbers) {
    console.log(num);
}
```

## 🔑 for...in Loop

Iterates over object properties (and array indices).

### Syntax
```javascript
for (variable in object) {
    // Code to execute
}
```

### Examples
```javascript
// Object iteration
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York

// Array iteration (not recommended - use for...of instead)
let colors = ["red", "green", "blue"];
for (let index in colors) {
    console.log(`${index}: ${colors[index]}`);
}

// With hasOwnProperty
let obj = { a: 1, b: 2 };
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
    }
}
```

## 🛑 break Statement

Exits the loop immediately.

```javascript
// Find first even number
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`First even: ${i}`);
        break;
    }
}
// Output: First even: 2

// Search in array
let numbers = [3, 7, 12, 9, 4];
let target = 12;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        console.log(`Found ${target} at index ${i}`);
        found = true;
        break;
    }
}

// Break in while loop
let count = 0;
while (true) {
    count++;
    if (count > 5) break;
    console.log(count);
}
```

## ⏭️ continue Statement

Skips current iteration and continues to next.

```javascript
// Skip odd numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}
// Output: 2, 4, 6, 8, 10

// Skip specific values
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// Output: 1, 2, 4, 5

// Filter array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of numbers) {
    if (num % 3 === 0) continue;  // Skip multiples of 3
    console.log(num);
}
// Output: 1, 2, 4, 5, 7, 8, 10
```

## 🏷️ Labeled Statements

Label loops for break/continue in nested loops.

```javascript
// Break outer loop from inner loop
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;  // Breaks outer loop
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Continue outer loop
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) continue outer;
        console.log(`i: ${i}, j: ${j}`);
    }
}
```

## 📊 Loop Comparison

| Loop | Use Case | Access Index | Works With |
|------|----------|--------------|------------|
| for | Known iterations | ✅ Yes | Any |
| while | Unknown iterations | ❌ Manual | Any |
| do...while | At least once | ❌ Manual | Any |
| for...of | Iterate values | ❌ No | Iterables |
| for...in | Object properties | ✅ Yes | Objects |

## 💡 Best Practices

### 1. Choose the Right Loop
```javascript
// ✅ for - known number of iterations
for (let i = 0; i < 10; i++) { }

// ✅ while - unknown number of iterations
while (condition) { }

// ✅ for...of - iterate array values
for (let item of array) { }

// ✅ for...in - iterate object keys
for (let key in object) { }
```

### 2. Avoid Modifying Loop Variable Inside Loop
```javascript
// ❌ Avoid
for (let i = 0; i < 10; i++) {
    i += 2;  // Confusing!
}

// ✅ Better
for (let i = 0; i < 10; i += 3) {
    // Clear increment in loop declaration
}
```

### 3. Use const in for...of
```javascript
// ✅ Use const (won't be reassigned)
for (const item of array) {
    console.log(item);
}

// ❌ Unnecessary let
for (let item of array) {
    console.log(item);  // Never reassigned
}
```

### 4. Cache Array Length
```javascript
// ❌ Length checked every iteration
for (let i = 0; i < array.length; i++) { }

// ✅ Cache length (minor optimization)
for (let i = 0, len = array.length; i < len; i++) { }

// ✅ Best: Use for...of if index not needed
for (const item of array) { }
```

### 5. Avoid Deep Nesting
```javascript
// ❌ Hard to read
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            // ...
        }
    }
}

// ✅ Extract to functions
function processItem(i, j, k) {
    // ...
}

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            processItem(i, j, k);
        }
    }
}
```

## 🧪 Practice Examples

### Example 1: Sum Array
```javascript
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));  // 15
```

### Example 2: Factorial
```javascript
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));  // 120 (5 × 4 × 3 × 2 × 1)
```

### Example 3: Reverse String
```javascript
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("Hello"));  // "olleH"
```

### Example 4: Find Maximum
```javascript
function findMax(arr) {
    if (arr.length === 0) return null;
    
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([3, 7, 2, 9, 1]));  // 9
```

### Example 5: FizzBuzz
```javascript
for (let i = 1; i <= 20; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
```

### Example 6: Count Occurrences
```javascript
function countChar(str, char) {
    let count = 0;
    for (let c of str) {
        if (c.toLowerCase() === char.toLowerCase()) {
            count++;
        }
    }
    return count;
}

console.log(countChar("Hello World", "l"));  // 3
```

### Example 7: Multiplication Table
```javascript
function multiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            row += (i * j).toString().padStart(4, " ");
        }
        console.log(row);
    }
}

multiplicationTable(5);
```

## 📚 Interview Questions & Answers

### Q1: What is the difference between for and while loops?
**Answer**:
- **for**: Used when number of iterations is known
- **while**: Used when number of iterations depends on a condition

```javascript
// for - iterate 10 times
for (let i = 0; i < 10; i++) { }

// while - iterate until condition
while (condition) { }
```

### Q2: What is the difference between for...of and for...in?
**Answer**:
- **for...of**: Iterates over values of iterables (arrays, strings, etc.)
- **for...in**: Iterates over enumerable properties of objects

```javascript
let arr = ["a", "b", "c"];

for (let value of arr) {
    console.log(value);  // "a", "b", "c"
}

for (let index in arr) {
    console.log(index);  // "0", "1", "2"
}
```

### Q3: What is the difference between break and continue?
**Answer**:
- **break**: Exits the loop completely
- **continue**: Skips current iteration and continues to next

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;  // Stops at 3
    console.log(i);
}
// Output: 1, 2

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;  // Skips 3
    console.log(i);
}
// Output: 1, 2, 4, 5
```

### Q4: What is the difference between while and do...while?
**Answer**:
- **while**: Checks condition before executing
- **do...while**: Executes at least once, then checks condition

```javascript
let i = 10;

while (i < 5) {
    console.log(i);  // Never runs
}

do {
    console.log(i);  // Runs once (output: 10)
} while (i < 5);
```

### Q5: Can you use const in a for loop?
**Answer**: 
- **Regular for**: No, because the variable is reassigned
- **for...of/for...in**: Yes, because a new binding is created each iteration

```javascript
// ❌ Error: Assignment to constant
for (const i = 0; i < 5; i++) { }

// ✅ Works fine
for (const item of array) { }
for (const key in object) { }
```

### Q6: How do you loop through an object?
**Answer**: Use `for...in` or `Object` methods:

```javascript
let person = { name: "John", age: 30 };

// Method 1: for...in
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Method 2: Object.keys()
Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
});

// Method 3: Object.entries()
for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}
```

### Q7: What is an infinite loop?
**Answer**: A loop that never stops executing because its condition always evaluates to true.

```javascript
// ❌ Infinite loop
while (true) {
    console.log("Forever!");
}

// ✅ Always have exit condition
while (true) {
    if (someCondition) break;
}
```

### Q8: Can you use labels with break/continue?
**Answer**: Yes, labels allow breaking/continuing outer loops from nested loops.

```javascript
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outer;  // Breaks outer loop
        }
    }
}
```

### Q9: How do you iterate over an array backwards?
**Answer**: 

```javascript
let arr = [1, 2, 3, 4, 5];

// Method 1: for loop
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// Method 2: reverse() (mutates original)
for (let item of arr.reverse()) {
    console.log(item);
}

// Method 3: slice().reverse() (doesn't mutate)
for (let item of arr.slice().reverse()) {
    console.log(item);
}
```

### Q10: What is the best way to iterate an array?
**Answer**: Depends on the use case:

```javascript
// ✅ Need only values: for...of
for (const item of array) { }

// ✅ Need index: forEach
array.forEach((item, index) => { });

// ✅ Transform array: map
let doubled = array.map(x => x * 2);

// ✅ Filter array: filter
let evens = array.filter(x => x % 2 === 0);

// ✅ Need to break early: traditional for or for...of with break
for (let i = 0; i < array.length; i++) {
    if (condition) break;
}
```

## 🎓 Key Takeaways

- **for**: Known iterations, need index
- **while**: Unknown iterations, condition-based
- **do...while**: Execute at least once
- **for...of**: Iterate values (arrays, strings)
- **for...in**: Iterate keys (objects)
- **break**: Exit loop
- **continue**: Skip iteration
- Choose the right loop for the task
- Avoid infinite loops
- Use modern array methods when possible

## 🔗 Next Topic

Continue to [Functions](../06-Functions/README.md) to learn how to organize and reuse code!

---

**Practice Challenge**: Write a function that finds all prime numbers up to a given number using loops!
