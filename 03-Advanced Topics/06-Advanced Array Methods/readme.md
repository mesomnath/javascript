# Advanced Array Methods in JavaScript

## Overview

Beyond the basic methods like `push`, `pop`, and `slice`, JavaScript provides a powerful set of higher-order functions for array manipulation. These methods allow you to write more declarative and expressive code, abstracting away the need for manual loops. They each take a callback function and apply it to the elements of the array in different ways.

This guide covers the most important advanced array methods: `map`, `filter`, `reduce`, `find`, `findIndex`, `some`, `every`, and `sort`.

---

## 1. `Array.prototype.map()`

The `map()` method **creates a new array** populated with the results of calling a provided function on every element in the calling array. It transforms each element into something new.

-   **Use case**: When you want to transform an array of values into a new array of different values.
-   **Returns**: A new array of the same length.

```javascript
const numbers = [1, 4, 9, 16];

// Create a new array with the square roots of the numbers
const squareRoots = numbers.map(num => Math.sqrt(num));
console.log(squareRoots); // [1, 2, 3, 4]

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

// Create a new array containing only the names
const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob"]
```

---

## 2. `Array.prototype.filter()`

The `filter()` method **creates a new array** with all elements that pass the test implemented by the provided function.

-   **Use case**: When you want to select a subset of elements from an array based on a condition.
-   **Returns**: A new array that can be shorter than the original.

```javascript
const values = [-10, 0, 5, 25, -3];

// Create a new array with only the positive numbers
const positiveValues = values.filter(val => val >= 0);
console.log(positiveValues); // [0, 5, 25]

const products = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Apparel", price: 50 },
    { name: "Keyboard", category: "Electronics", price: 75 }
];

// Create a new array with only the electronics products
const electronics = products.filter(p => p.category === "Electronics");
console.log(electronics); // [{...Laptop...}, {...Keyboard...}]
```

---

## 3. `Array.prototype.reduce()`

The `reduce()` method executes a "reducer" callback function on each element of the array, resulting in a **single output value**. It's arguably the most powerful and versatile array method.

The reducer function takes four arguments:
1.  `accumulator`: The value resulting from the previous callback invocation.
2.  `currentValue`: The current element being processed.
3.  `currentIndex` (optional): The index of the current element.
4.  `array` (optional): The array `reduce` was called upon.

`reduce()` also takes an optional second argument: `initialValue`.

-   **Use case**: When you want to "reduce" an array to a single value (e.g., a sum, a count, a string, or even a new object).
-   **Returns**: A single value of any type.

```javascript
const numbers = [1, 2, 3, 4, 5];

// Calculate the sum of all numbers
// The `0` is the initial value for the accumulator.
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(sum); // 15

// Find the maximum value in an array
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc), -Infinity);
console.log(max); // 5

// Grouping objects by a property
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];

const groupedByAge = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(person);
    return acc;
}, {}); // Initial value is an empty object

console.log(groupedByAge);
// {
//   '25': [ { name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 } ],
//   '30': [ { name: 'Bob', age: 30 } ]
// }
```

---

## 4. `Array.prototype.find()`

The `find()` method returns the **first element** in the array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

-   **Use case**: When you need to find a specific object or value in an array.
-   **Returns**: The first matching element, or `undefined`.

```javascript
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

// Find the user with id 2
const bob = users.find(user => user.id === 2);
console.log(bob); // { id: 2, name: 'Bob' }

// Find a user that doesn't exist
const frank = users.find(user => user.name === "Frank");
console.log(frank); // undefined
```

---

## 5. `Array.prototype.findIndex()`

Similar to `find()`, but `findIndex()` returns the **index** of the first element in the array that satisfies the testing function. If no element satisfies the function, it returns `-1`.

-   **Use case**: When you need the position of an element in an array.
-   **Returns**: The index of the first matching element, or `-1`.

```javascript
const fruits = ["apple", "banana", "cherry", "banana"];

// Find the index of the first 'banana'
const bananaIndex = fruits.findIndex(fruit => fruit === "banana");
console.log(bananaIndex); // 1
```

---

## 6. `Array.prototype.some()`

The `some()` method tests whether **at least one** element in the array passes the test implemented by the provided function. It returns a boolean value.

-   **Use case**: To check if an array contains at least one element that meets a condition.
-   **Returns**: `true` or `false`.

```javascript
const numbers = [-1, 0, 5, 10];

// Does the array have at least one negative number?
const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // true

// Does the array have any number greater than 20?
const hasLargeNumber = numbers.some(num => num > 20);
console.log(hasLargeNumber); // false
```

---

## 7. `Array.prototype.every()`

The `every()` method tests whether **all** elements in the array pass the test implemented by the provided function. It returns a boolean value.

-   **Use case**: To verify that every element in an array meets a condition.
-   **Returns**: `true` or `false`.

```javascript
const numbers = [2, 4, 6, 8];

// Are all numbers in the array even?
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

const mixedNumbers = [2, 4, 7, 8];
const allEvenMixed = mixedNumbers.every(num => num % 2 === 0);
console.log(allEvenMixed); // false
```

---

## 8. `Array.prototype.sort()`

The `sort()` method sorts the elements of an array **in place** and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

**Important**: Because of this default string conversion, `sort()` can produce incorrect results for numbers. You should always provide a **compare function** when sorting numbers.

-   **Use case**: To sort an array.
-   **Returns**: The same array, now sorted. (It modifies the original array!)

### Compare Function

The compare function `(a, b)` should return:
-   A **negative** value if `a` should come before `b`.
-   A **positive** value if `a` should come after `b`.
-   **Zero** if `a` and `b` are equal.

```javascript
const names = ["Charlie", "Alice", "Bob"];
names.sort();
console.log(names); // ["Alice", "Bob", "Charlie"] (works for strings)

const numbers = [10, 5, 100, 2, 25];
// Incorrect sort without a compare function
// numbers.sort(); // [10, 100, 2, 25, 5] (because '100' comes before '2' as a string)

// Correct numeric sort (ascending)
numbers.sort((a, b) => a - b);
console.log(numbers); // [2, 5, 10, 25, 100]

// Descending sort
numbers.sort((a, b) => b - a);
console.log(numbers); // [100, 25, 10, 5, 2]

// Sorting objects
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
// Sort by age, ascending
users.sort((a, b) => a.age - b.age);
console.log(users); // Bob, Alice, Charlie
```

## Chaining Methods

One of the biggest advantages of these methods is that they can be chained together to create elegant and readable data processing pipelines.

```javascript
const products = [
    { name: "Laptop", category: "Electronics", price: 1200, stock: 10 },
    { name: "Shirt", category: "Apparel", price: 50, stock: 0 },
    { name: "Keyboard", category: "Electronics", price: 75, stock: 5 },
    { name: "Jeans", category: "Apparel", price: 80, stock: 20 }
];

// Goal: Get the names of all available electronics, sorted by price.
const availableElectronics = products
    .filter(p => p.category === "Electronics" && p.stock > 0) // 1. Filter
    .sort((a, b) => a.price - b.price)                         // 2. Sort
    .map(p => p.name);                                         // 3. Map to names

console.log(availableElectronics); // ["Keyboard", "Laptop"]
```