# Arrays in JavaScript

## Overview

Arrays are ordered collections of elements that can store multiple values in a single variable. JavaScript arrays are dynamic, meaning they can grow or shrink in size, and can contain elements of different data types.

## 1. Creating Arrays

### Array Literal (Most Common)

```javascript
// Empty array
let emptyArray = [];

// Array with initial values
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null, {name: "John"}];

// Multi-dimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(fruits.length); // 3
console.log(matrix[1][2]); // 6
```

### Array Constructor

```javascript
// Array constructor
let arr1 = new Array(); // Empty array
let arr2 = new Array(5); // Array with 5 empty slots
let arr3 = new Array(1, 2, 3); // [1, 2, 3]

// Be careful with single number argument
let confusing = new Array(5); // [empty × 5] - not [5]
let clear = [5]; // [5] - what you probably want

// Array.from() - convert array-like objects to arrays
let str = "hello";
let charArray = Array.from(str); // ["h", "e", "l", "l", "o"]

// Array.of() - create array from arguments
let numbers = Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
let singleNumber = Array.of(5); // [5] - not empty array with 5 slots
```

## 2. Accessing Array Elements

### Index-Based Access

```javascript
let colors = ["red", "green", "blue", "yellow"];

// Access by index (0-based)
console.log(colors[0]); // "red"
console.log(colors[2]); // "blue"
console.log(colors[colors.length - 1]); // "yellow" (last element)

// Negative indices don't work like in Python
console.log(colors[-1]); // undefined (not last element)

// Use at() method for negative indices (ES2022)
console.log(colors.at(-1)); // "yellow" (last element)
console.log(colors.at(-2)); // "blue" (second to last)

// Modifying elements
colors[1] = "purple";
console.log(colors); // ["red", "purple", "blue", "yellow"]

// Adding elements beyond current length
colors[10] = "pink";
console.log(colors.length); // 11
console.log(colors[5]); // undefined (sparse array)
```

### Destructuring Assignment

```javascript
let fruits = ["apple", "banana", "orange", "grape"];

// Basic destructuring
let [first, second] = fruits;
console.log(first);  // "apple"
console.log(second); // "banana"

// Skip elements
let [, , third] = fruits;
console.log(third); // "orange"

// Rest operator
let [head, ...tail] = fruits;
console.log(head); // "apple"
console.log(tail); // ["banana", "orange", "grape"]

// Default values
let [a, b, c, d, e = "default"] = fruits;
console.log(e); // "default" (since fruits[4] is undefined)

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1
```

## 3. Essential Array Methods

### Adding and Removing Elements

```javascript
let arr = [1, 2, 3];

// Add to end
arr.push(4, 5); // Returns new length: 5
console.log(arr); // [1, 2, 3, 4, 5]

// Remove from end
let last = arr.pop(); // Returns removed element: 5
console.log(arr); // [1, 2, 3, 4]

// Add to beginning
arr.unshift(0); // Returns new length: 5
console.log(arr); // [0, 1, 2, 3, 4]

// Remove from beginning
let first = arr.shift(); // Returns removed element: 0
console.log(arr); // [1, 2, 3, 4]

// Add/remove from middle (splice)
let removed = arr.splice(2, 1, "a", "b"); // At index 2, remove 1, add "a", "b"
console.log(arr); // [1, 2, "a", "b", 4]
console.log(removed); // [3]
```

### Searching and Finding

```javascript
let numbers = [1, 5, 3, 8, 3, 9, 2];
let users = [
    {id: 1, name: "Alice", active: true},
    {id: 2, name: "Bob", active: false},
    {id: 3, name: "Charlie", active: true}
];

// indexOf/lastIndexOf - find index of primitive values
console.log(numbers.indexOf(3));     // 2 (first occurrence)
console.log(numbers.lastIndexOf(3)); // 4 (last occurrence)
console.log(numbers.indexOf(10));    // -1 (not found)

// includes - check if value exists
console.log(numbers.includes(5)); // true
console.log(numbers.includes(10)); // false

// find - find first element matching condition
let activeUser = users.find(user => user.active);
console.log(activeUser); // {id: 1, name: "Alice", active: true}

// findIndex - find index of first matching element
let bobIndex = users.findIndex(user => user.name === "Bob");
console.log(bobIndex); // 1

// findLast/findLastIndex (ES2023)
let lastActive = users.findLast(user => user.active);
console.log(lastActive); // {id: 3, name: "Charlie", active: true}

// some/every - test conditions
let hasInactive = users.some(user => !user.active);
console.log(hasInactive); // true

let allActive = users.every(user => user.active);
console.log(allActive); // false
```

### Transforming Arrays

```javascript
let numbers = [1, 2, 3, 4, 5];

// map - transform each element
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

let words = ["hello", "world"];
let lengths = words.map(word => word.length);
console.log(lengths); // [5, 5]

// filter - select elements meeting criteria
let evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

let longWords = words.filter(word => word.length > 4);
console.log(longWords); // ["hello", "world"]

// reduce - combine elements into single value
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

let max = numbers.reduce((max, num) => num > max ? num : max);
console.log(max); // 5

// Complex reduce example: group by property
let people = [
    {name: "Alice", age: 25, city: "New York"},
    {name: "Bob", age: 30, city: "New York"},
    {name: "Charlie", age: 25, city: "London"}
];

let groupedByAge = people.reduce((groups, person) => {
    let age = person.age;
    if (!groups[age]) {
        groups[age] = [];
    }
    groups[age].push(person);
    return groups;
}, {});
console.log(groupedByAge);
// {
//   25: [{name: "Alice", ...}, {name: "Charlie", ...}],
//   30: [{name: "Bob", ...}]
// }
```

### Sorting Arrays

```javascript
let numbers = [3, 1, 4, 1, 5, 9, 2, 6];
let words = ["banana", "apple", "cherry", "date"];

// Basic sorting (modifies original array)
numbers.sort(); // Converts to strings first!
console.log(numbers); // [1, 1, 2, 3, 4, 5, 6, 9] - works for single digits

// Proper numeric sorting
let nums = [10, 5, 40, 25, 1000, 1];
nums.sort((a, b) => a - b); // Ascending
console.log(nums); // [1, 5, 10, 25, 40, 1000]

nums.sort((a, b) => b - a); // Descending
console.log(nums); // [1000, 40, 25, 10, 5, 1]

// String sorting
words.sort(); // Alphabetical
console.log(words); // ["apple", "banana", "cherry", "date"]

// Case-insensitive sorting
let mixedCase = ["Banana", "apple", "Cherry"];
mixedCase.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(mixedCase); // ["apple", "Banana", "Cherry"]

// Sorting objects
let students = [
    {name: "Alice", grade: 85},
    {name: "Bob", grade: 92},
    {name: "Charlie", grade: 78}
];

// Sort by grade (descending)
students.sort((a, b) => b.grade - a.grade);
console.log(students); // Bob (92), Alice (85), Charlie (78)

// Sort by name (alphabetical)
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students); // Alice, Bob, Charlie

// toSorted() - non-mutating sort (ES2023)
let original = [3, 1, 4, 1, 5];
let sorted = original.toSorted((a, b) => a - b);
console.log(original); // [3, 1, 4, 1, 5] (unchanged)
console.log(sorted);   // [1, 1, 3, 4, 5]
```

## 4. Array Iteration Methods

### forEach - Execute function for each element

```javascript
let colors = ["red", "green", "blue"];

// Basic forEach
colors.forEach(color => {
    console.log(color);
});

// With index and array parameters
colors.forEach((color, index, array) => {
    console.log(`${index}: ${color} (total: ${array.length})`);
});

// Practical example: Update DOM elements
let buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Button clicked!');
    });
});
```

### Advanced Iteration Examples

```javascript
let products = [
    {id: 1, name: "Laptop", price: 999, category: "Electronics"},
    {id: 2, name: "Shirt", price: 25, category: "Clothing"},
    {id: 3, name: "Phone", price: 699, category: "Electronics"},
    {id: 4, name: "Jeans", price: 60, category: "Clothing"}
];

// Method chaining
let expensiveElectronics = products
    .filter(product => product.category === "Electronics")
    .filter(product => product.price > 500)
    .map(product => product.name)
    .sort();

console.log(expensiveElectronics); // ["Laptop", "Phone"]

// Complex data processing
let categoryStats = products.reduce((stats, product) => {
    let category = product.category;
    
    if (!stats[category]) {
        stats[category] = {
            count: 0,
            totalValue: 0,
            avgPrice: 0,
            products: []
        };
    }
    
    stats[category].count++;
    stats[category].totalValue += product.price;
    stats[category].avgPrice = stats[category].totalValue / stats[category].count;
    stats[category].products.push(product.name);
    
    return stats;
}, {});

console.log(categoryStats);
```

## 5. Array Manipulation

### Copying Arrays

```javascript
let original = [1, 2, 3, {name: "John"}];

// Shallow copies
let copy1 = [...original];           // Spread operator
let copy2 = Array.from(original);    // Array.from()
let copy3 = original.slice();        // slice() with no arguments

// Deep copy (for nested objects)
let deepCopy = JSON.parse(JSON.stringify(original));

// Modifying copies
copy1[0] = 99;
console.log(original[0]); // 1 (unchanged)

copy1[3].name = "Jane";
console.log(original[3].name); // "Jane" (changed - shallow copy!)

deepCopy[3].name = "Bob";
console.log(original[3].name); // "Jane" (unchanged - deep copy)
```

### Joining and Splitting

```javascript
// Join array elements into string
let words = ["Hello", "World", "How", "Are", "You"];
let sentence = words.join(" ");
console.log(sentence); // "Hello World How Are You"

let csv = ["apple", "banana", "orange"];
let csvString = csv.join(",");
console.log(csvString); // "apple,banana,orange"

// Split string into array
let text = "apple,banana,orange";
let fruits = text.split(",");
console.log(fruits); // ["apple", "banana", "orange"]

let sentence2 = "Hello World";
let wordArray = sentence2.split(" ");
console.log(wordArray); // ["Hello", "World"]

// Reverse array
let numbers = [1, 2, 3, 4, 5];
let reversed = numbers.reverse(); // Modifies original!
console.log(numbers); // [5, 4, 3, 2, 1]
console.log(reversed); // [5, 4, 3, 2, 1] (same reference)

// Non-mutating reverse
let original2 = [1, 2, 3, 4, 5];
let reversedCopy = [...original2].reverse();
console.log(original2); // [1, 2, 3, 4, 5] (unchanged)
console.log(reversedCopy); // [5, 4, 3, 2, 1]

// toReversed() - non-mutating reverse (ES2023)
let reversed2 = original2.toReversed();
console.log(original2); // [1, 2, 3, 4, 5] (unchanged)
console.log(reversed2); // [5, 4, 3, 2, 1]
```

### Combining Arrays

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

// Concatenation
let combined = arr1.concat(arr2, arr3);
console.log(combined); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Spread operator (more flexible)
let combined2 = [...arr1, ...arr2, ...arr3];
let combined3 = [0, ...arr1, 99, ...arr2, ...arr3, 100];

// Flattening arrays
let nested = [[1, 2], [3, 4], [5, 6]];
let flattened = nested.flat();
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// Deep flattening
let deepNested = [1, [2, [3, [4, 5]]]];
let deepFlat = deepNested.flat(3); // Depth of 3
console.log(deepFlat); // [1, 2, 3, 4, 5]

// Infinite depth
let infiniteFlat = deepNested.flat(Infinity);
console.log(infiniteFlat); // [1, 2, 3, 4, 5]

// flatMap - map then flatten
let sentences = ["Hello world", "How are you"];
let words2 = sentences.flatMap(sentence => sentence.split(" "));
console.log(words2); // ["Hello", "world", "How", "are", "you"]
```

## 6. Practical Examples

### Shopping Cart Implementation

```javascript
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(product, quantity = 1) {
        let existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }
    
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }
    
    updateQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeItem(productId);
        } else {
            let item = this.items.find(item => item.product.id === productId);
            if (item) {
                item.quantity = newQuantity;
            }
        }
    }
    
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }
    
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }
    
    getItemsByCategory() {
        return this.items.reduce((categories, item) => {
            let category = item.product.category;
            if (!categories[category]) {
                categories[category] = [];
            }
            categories[category].push(item);
            return categories;
        }, {});
    }
    
    clearCart() {
        this.items = [];
    }
    
    getSummary() {
        return {
            items: this.items.map(item => ({
                name: item.product.name,
                price: item.product.price,
                quantity: item.quantity,
                subtotal: item.product.price * item.quantity
            })),
            totalItems: this.getItemCount(),
            totalPrice: this.getTotal()
        };
    }
}

// Usage
let cart = new ShoppingCart();

let laptop = {id: 1, name: "Laptop", price: 999, category: "Electronics"};
let mouse = {id: 2, name: "Mouse", price: 25, category: "Electronics"};

cart.addItem(laptop, 1);
cart.addItem(mouse, 2);

console.log(cart.getSummary());
```

### Data Processing Pipeline

```javascript
// Student grade processing system
let students = [
    {id: 1, name: "Alice Johnson", grades: [85, 92, 78, 96, 88]},
    {id: 2, name: "Bob Smith", grades: [76, 81, 72, 85, 79]},
    {id: 3, name: "Charlie Brown", grades: [95, 98, 92, 89, 94]},
    {id: 4, name: "Diana Prince", grades: [68, 74, 71, 77, 73]}
];

function processStudentData(students) {
    return students
        .map(student => {
            // Calculate average grade
            let average = student.grades.reduce((sum, grade) => sum + grade, 0) / student.grades.length;
            
            // Determine letter grade
            let letterGrade;
            if (average >= 90) letterGrade = 'A';
            else if (average >= 80) letterGrade = 'B';
            else if (average >= 70) letterGrade = 'C';
            else if (average >= 60) letterGrade = 'D';
            else letterGrade = 'F';
            
            return {
                ...student,
                average: Math.round(average * 100) / 100, // Round to 2 decimal places
                letterGrade: letterGrade,
                highest: Math.max(...student.grades),
                lowest: Math.min(...student.grades)
            };
        })
        .sort((a, b) => b.average - a.average); // Sort by average (descending)
}

function generateReport(processedStudents) {
    let report = {
        totalStudents: processedStudents.length,
        classAverage: processedStudents.reduce((sum, student) => sum + student.average, 0) / processedStudents.length,
        gradeDistribution: {},
        topPerformers: processedStudents.slice(0, 3),
        needsHelp: processedStudents.filter(student => student.average < 70)
    };
    
    // Calculate grade distribution
    processedStudents.forEach(student => {
        let grade = student.letterGrade;
        report.gradeDistribution[grade] = (report.gradeDistribution[grade] || 0) + 1;
    });
    
    return report;
}

let processedData = processStudentData(students);
let report = generateReport(processedData);

console.log("Class Report:", report);
console.log("\nStudent Details:");
processedData.forEach(student => {
    console.log(`${student.name}: ${student.average}% (${student.letterGrade})`);
});
```

### Array Utility Functions

```javascript
// Collection of useful array utility functions

function removeDuplicates(array) {
    return [...new Set(array)];
}

function removeDuplicateObjects(array, key) {
    let seen = new Set();
    return array.filter(item => {
        let keyValue = item[key];
        if (seen.has(keyValue)) {
            return false;
        }
        seen.add(keyValue);
        return true;
    });
}

function shuffle(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function chunk(array, size) {
    let chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

function partition(array, predicate) {
    let pass = [];
    let fail = [];
    
    array.forEach(item => {
        if (predicate(item)) {
            pass.push(item);
        } else {
            fail.push(item);
        }
    });
    
    return [pass, fail];
}

function groupBy(array, keyFunction) {
    return array.reduce((groups, item) => {
        let key = typeof keyFunction === 'function' ? keyFunction(item) : item[keyFunction];
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(item);
        return groups;
    }, {});
}

function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}

function difference(arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item));
}

function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// Usage examples
let numbers = [1, 2, 3, 2, 4, 3, 5];
let people = [
    {id: 1, name: "Alice", age: 25},
    {id: 2, name: "Bob", age: 30},
    {id: 1, name: "Alice", age: 25}, // Duplicate
    {id: 3, name: "Charlie", age: 25}
];

console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5]
console.log(removeDuplicateObjects(people, 'id')); // Removes duplicate Alice

let [adults, minors] = partition(people, person => person.age >= 18);
console.log("Adults:", adults.length);

let ageGroups = groupBy(people, 'age');
console.log("Age groups:", ageGroups);

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3)); // [[1,2,3], [4,5,6], [7]]
```

## 7. Performance Considerations

### Efficient Array Operations

```javascript
// Efficient ways to work with large arrays

// 1. Use appropriate methods for the task
let largeArray = Array.from({length: 1000000}, (_, i) => i);

// Bad: Using forEach when you need to find something
let found = null;
largeArray.forEach(item => {
    if (item === 500000) {
        found = item; // This doesn't stop the loop!
    }
});

// Good: Use find() which stops when found
let foundEfficient = largeArray.find(item => item === 500000);

// 2. Avoid creating unnecessary intermediate arrays
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Less efficient: Multiple passes through array
let result1 = data
    .filter(x => x > 3)
    .map(x => x * 2)
    .filter(x => x < 15);

// More efficient: Single pass with reduce
let result2 = data.reduce((acc, x) => {
    if (x > 3) {
        let doubled = x * 2;
        if (doubled < 15) {
            acc.push(doubled);
        }
    }
    return acc;
}, []);

// 3. Use for loops for maximum performance when needed
function sumArrayFor(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function sumArrayReduce(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// for loop is generally faster for simple operations
// reduce is more readable and functional
```

## Common Mistakes to Avoid

1. **Modifying array while iterating** (can skip elements)
2. **Confusing mutating vs non-mutating methods** (sort vs toSorted)
3. **Using == instead of === in find/filter conditions**
4. **Not handling empty arrays** in reduce without initial value
5. **Creating sparse arrays** by setting length or using Array constructor
6. **Forgetting that some methods return new arrays** vs modifying original

## Summary

| Method Category | Methods | Mutates Original | Returns |
|-----------------|---------|------------------|---------|
| Adding/Removing | `push`, `pop`, `shift`, `unshift`, `splice` | ✅ | Length or removed element |
| Searching | `indexOf`, `includes`, `find`, `findIndex` | ❌ | Index, boolean, or element |
| Testing | `some`, `every` | ❌ | Boolean |
| Transforming | `map`, `filter`, `reduce` | ❌ | New array or value |
| Sorting | `sort`, `reverse` | ✅ | Modified array |
| Copying | `slice`, `concat`, `...spread` | ❌ | New array |
| Iteration | `forEach` | ❌ | `undefined` |

**Best Practices:**
- Use appropriate method for the task
- Prefer immutable operations when possible
- Chain methods for readable data transformations
- Handle edge cases (empty arrays, null values)
- Consider performance for large datasets
- Use meaningful variable names in callbacks