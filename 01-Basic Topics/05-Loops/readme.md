# Loops in JavaScript

## Overview

Loops allow you to execute code repeatedly based on a condition. They are essential for processing collections, performing repetitive tasks, and implementing algorithms.

## 1. for Loop

The most commonly used loop, ideal when you know the number of iterations.

### Basic for Loop Syntax

```javascript
for (initialization; condition; increment/decrement) {
    // Code to execute
}

// Example: Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5

// Example: Count backwards
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// Output: 5, 4, 3, 2, 1
```

### Array Iteration with for Loop

```javascript
let fruits = ["apple", "banana", "orange", "grape"];

// Traditional for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(`Index ${i}: ${fruits[i]}`);
}

// Practical example: Calculate sum of numbers
let numbers = [10, 25, 30, 45, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(`Total sum: ${sum}`); // 160

// Find maximum value
let scores = [85, 92, 78, 96, 88];
let maxScore = scores[0];

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > maxScore) {
        maxScore = scores[i];
    }
}
console.log(`Highest score: ${maxScore}`); // 96
```

### Nested for Loops

```javascript
// Multiplication table
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} × ${j} = ${i * j}`);
    }
    console.log("---");
}

// 2D array processing
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        console.log(`Position [${row}][${col}]: ${matrix[row][col]}`);
    }
}

// Pattern printing
function printTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "* ";
        }
        console.log(stars);
    }
}

printTriangle(4);
// Output:
// * 
// * * 
// * * * 
// * * * *
```

## 2. while Loop

Executes code while a condition is true. Good when the number of iterations is unknown.

### Basic while Loop

```javascript
let count = 1;

while (count <= 5) {
    console.log(`Count: ${count}`);
    count++; // Important: don't forget to update the condition!
}

// Practical example: User input validation
function getUserInput() {
    let input = "";
    
    while (input !== "quit") {
        input = prompt("Enter a command (or 'quit' to exit):");
        if (input !== "quit") {
            console.log(`You entered: ${input}`);
        }
    }
    console.log("Goodbye!");
}

// Finding a value in array
let numbers = [3, 7, 12, 19, 25];
let target = 12;
let index = 0;
let found = false;

while (index < numbers.length && !found) {
    if (numbers[index] === target) {
        found = true;
        console.log(`Found ${target} at index ${index}`);
    } else {
        index++;
    }
}

if (!found) {
    console.log(`${target} not found in array`);
}
```

### Real-World while Loop Examples

```javascript
// Simple game loop
function numberGuessingGame() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess = 0;
    let attempts = 0;
    
    while (guess !== secretNumber) {
        guess = parseInt(prompt("Guess a number between 1 and 100:"));
        attempts++;
        
        if (guess < secretNumber) {
            console.log("Too low!");
        } else if (guess > secretNumber) {
            console.log("Too high!");
        } else {
            console.log(`Congratulations! You guessed it in ${attempts} attempts!`);
        }
    }
}

// Reading from a data stream (conceptual)
function processDataStream(dataStream) {
    while (dataStream.hasMoreData()) {
        let data = dataStream.readNext();
        if (data.isValid()) {
            processRecord(data);
        } else {
            logError(`Invalid data: ${data}`);
        }
    }
}
```

## 3. do...while Loop

Executes code at least once, then continues while a condition is true.

### Basic do...while Loop

```javascript
let number;

do {
    number = parseInt(prompt("Enter a positive number:"));
    if (number <= 0) {
        console.log("Please enter a positive number!");
    }
} while (number <= 0);

console.log(`You entered: ${number}`);

// Menu system example
function showMenu() {
    let choice;
    
    do {
        console.log("\n=== Menu ===");
        console.log("1. View Profile");
        console.log("2. Edit Settings");
        console.log("3. Logout");
        
        choice = parseInt(prompt("Choose an option (1-3):"));
        
        switch (choice) {
            case 1:
                console.log("Showing profile...");
                break;
            case 2:
                console.log("Opening settings...");
                break;
            case 3:
                console.log("Logging out...");
                break;
            default:
                console.log("Invalid choice! Please try again.");
        }
    } while (choice !== 3);
}
```

### Practical do...while Examples

```javascript
// Password validation
function createPassword() {
    let password;
    let isValid;
    
    do {
        password = prompt("Create a password:");
        isValid = validatePassword(password);
        
        if (!isValid) {
            console.log("Password must be at least 8 characters with one number and one uppercase letter");
        }
    } while (!isValid);
    
    return password;
}

function validatePassword(password) {
    return password.length >= 8 && 
           /\d/.test(password) && 
           /[A-Z]/.test(password);
}

// Dice game
function rollDice() {
    let rollAgain;
    
    do {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        let sum = dice1 + dice2;
        
        console.log(`Rolled: ${dice1} + ${dice2} = ${sum}`);
        
        if (sum === 7 || sum === 11) {
            console.log("Winner!");
        } else if (sum === 2 || sum === 3 || sum === 12) {
            console.log("Craps! You lose.");
        } else {
            console.log(`Your point is ${sum}`);
        }
        
        rollAgain = confirm("Roll again?");
    } while (rollAgain);
}
```

## 4. for...in Loop

Iterates over enumerable properties of an object.

### Object Iteration

```javascript
let person = {
    name: "John",
    age: 30,
    city: "New York",
    occupation: "Developer"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// city: New York
// occupation: Developer

// Practical example: Object validation
function validateUserData(userData) {
    let requiredFields = ["name", "email", "age"];
    let errors = [];
    
    for (let field of requiredFields) {
        if (!(field in userData) || userData[field] === "") {
            errors.push(`${field} is required`);
        }
    }
    
    // Check all fields for type validation
    for (let key in userData) {
        if (key === "age" && typeof userData[key] !== "number") {
            errors.push("Age must be a number");
        }
        if (key === "email" && !userData[key].includes("@")) {
            errors.push("Invalid email format");
        }
    }
    
    return errors;
}
```

### Array Iteration (Note: for...in iterates over indices)

```javascript
let colors = ["red", "green", "blue"];

// for...in gives indices (not recommended for arrays)
for (let index in colors) {
    console.log(`Index ${index}: ${colors[index]}`);
}
// Output:
// Index 0: red
// Index 1: green
// Index 2: blue

// Practical example: Configuration processing
let config = {
    theme: "dark",
    language: "en",
    notifications: true,
    autoSave: false
};

function applyConfiguration(config) {
    for (let setting in config) {
        switch (setting) {
            case "theme":
                document.body.className = config[setting];
                break;
            case "language":
                setApplicationLanguage(config[setting]);
                break;
            case "notifications":
                toggleNotifications(config[setting]);
                break;
            case "autoSave":
                setAutoSave(config[setting]);
                break;
        }
    }
}
```

## 5. for...of Loop (ES6+)

Iterates over iterable objects (arrays, strings, sets, maps, etc.).

### Array Iteration

```javascript
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}
// Output: apple, banana, orange

// With index using entries()
for (let [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}

// Practical example: Shopping cart total
let cartItems = [
    { name: "Laptop", price: 999.99 },
    { name: "Mouse", price: 25.50 },
    { name: "Keyboard", price: 79.99 }
];

let total = 0;
for (let item of cartItems) {
    total += item.price;
    console.log(`${item.name}: $${item.price.toFixed(2)}`);
}
console.log(`Total: $${total.toFixed(2)}`);
```

### String Iteration

```javascript
let message = "Hello";

for (let char of message) {
    console.log(char);
}
// Output: H, e, l, l, o

// Practical example: Character counting
function countCharacters(text) {
    let charCount = {};
    
    for (let char of text.toLowerCase()) {
        if (char !== ' ') {
            charCount[char] = (charCount[char] || 0) + 1;
        }
    }
    
    return charCount;
}

console.log(countCharacters("Hello World"));
// Output: {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}
```

### Set and Map Iteration

```javascript
// Set iteration
let uniqueNumbers = new Set([1, 2, 3, 2, 1, 4]);

for (let number of uniqueNumbers) {
    console.log(number);
}
// Output: 1, 2, 3, 4

// Map iteration
let userRoles = new Map([
    ["john", "admin"],
    ["jane", "editor"],
    ["bob", "viewer"]
]);

for (let [username, role] of userRoles) {
    console.log(`${username}: ${role}`);
}
```

## 6. Loop Control Statements

### break Statement

Exits the loop immediately.

```javascript
// Finding first even number
let numbers = [1, 3, 7, 8, 11, 12];

for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(`First even number: ${number}`);
        break; // Exit the loop
    }
}

// Nested loop break
function findCoordinate(matrix, target) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === target) {
                console.log(`Found ${target} at [${row}, ${col}]`);
                return { row, col }; // Return exits both loops
            }
        }
    }
    return null; // Not found
}

// Using labels for nested breaks (rarely used)
outerLoop: for (let i = 0; i < 3; i++) {
    innerLoop: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Breaks outer loop
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
```

### continue Statement

Skips the current iteration and continues with the next.

```javascript
// Skip even numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i); // Only prints odd numbers
}

// Processing valid data only
let dataArray = [1, null, 3, undefined, 5, "", 7];

for (let data of dataArray) {
    if (data == null || data === "") {
        continue; // Skip invalid data
    }
    
    console.log(`Processing: ${data}`);
    // Process valid data here
}

// Form validation with continue
function validateFormFields(formData) {
    let validFields = [];
    
    for (let field in formData) {
        if (formData[field] === "" || formData[field] == null) {
            console.log(`Skipping empty field: ${field}`);
            continue;
        }
        
        // Validate field
        if (isValidField(field, formData[field])) {
            validFields.push(field);
        }
    }
    
    return validFields;
}
```

## 7. Practical Examples

### Array Processing

```javascript
// Filter and transform array
function processStudentGrades(students) {
    let results = [];
    
    for (let student of students) {
        // Skip students with incomplete data
        if (!student.name || !student.grades || student.grades.length === 0) {
            continue;
        }
        
        // Calculate average grade
        let sum = 0;
        for (let grade of student.grades) {
            sum += grade;
        }
        let average = sum / student.grades.length;
        
        // Determine letter grade
        let letterGrade;
        if (average >= 90) letterGrade = 'A';
        else if (average >= 80) letterGrade = 'B';
        else if (average >= 70) letterGrade = 'C';
        else if (average >= 60) letterGrade = 'D';
        else letterGrade = 'F';
        
        results.push({
            name: student.name,
            average: Math.round(average),
            letterGrade: letterGrade
        });
    }
    
    return results;
}

// Usage
let students = [
    { name: "Alice", grades: [85, 92, 78, 96] },
    { name: "Bob", grades: [76, 81, 72] },
    { name: "Charlie", grades: [] }, // Will be skipped
    { name: "Diana", grades: [95, 98, 92, 89, 94] }
];

console.log(processStudentGrades(students));
```

### DOM Manipulation Example

```javascript
// Highlight search results
function highlightSearchResults(searchTerm) {
    let elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    
    for (let element of elements) {
        let text = element.textContent;
        
        if (!text.toLowerCase().includes(searchTerm.toLowerCase())) {
            continue; // Skip elements that don't contain search term
        }
        
        // Highlight the search term
        let regex = new RegExp(`(${searchTerm})`, 'gi');
        element.innerHTML = text.replace(regex, '<mark>$1</mark>');
    }
}

// Table row processing
function calculateTableTotals(tableId) {
    let table = document.getElementById(tableId);
    let rows = table.querySelectorAll('tbody tr');
    let totals = { quantity: 0, price: 0 };
    
    for (let row of rows) {
        let cells = row.querySelectorAll('td');
        
        if (cells.length < 3) {
            continue; // Skip incomplete rows
        }
        
        let quantity = parseInt(cells[1].textContent) || 0;
        let price = parseFloat(cells[2].textContent.replace('$', '')) || 0;
        
        totals.quantity += quantity;
        totals.price += price;
    }
    
    return totals;
}
```

### Game Development Loop

```javascript
class GameEngine {
    constructor() {
        this.entities = [];
        this.isRunning = false;
    }
    
    gameLoop() {
        this.isRunning = true;
        
        while (this.isRunning) {
            // Update all entities
            for (let entity of this.entities) {
                if (!entity.isActive) {
                    continue; // Skip inactive entities
                }
                
                entity.update();
                
                // Check for collisions with other entities
                for (let other of this.entities) {
                    if (other === entity || !other.isActive) {
                        continue;
                    }
                    
                    if (entity.checkCollision(other)) {
                        entity.handleCollision(other);
                        
                        if (entity.isDestroyed) {
                            break; // Exit inner loop if entity is destroyed
                        }
                    }
                }
            }
            
            // Remove destroyed entities
            this.entities = this.entities.filter(entity => !entity.isDestroyed);
            
            // Render frame
            this.render();
            
            // Check win/lose conditions
            if (this.checkGameOver()) {
                break;
            }
            
            // Frame rate control (simplified)
            this.sleep(16); // ~60 FPS
        }
    }
    
    stop() {
        this.isRunning = false;
    }
}
```

### Data Processing Pipeline

```javascript
function processLogFiles(logFiles) {
    let processedEntries = [];
    let errorCount = 0;
    
    for (let file of logFiles) {
        console.log(`Processing ${file.name}...`);
        
        if (!file.content || file.content.length === 0) {
            console.log(`Skipping empty file: ${file.name}`);
            continue;
        }
        
        let lines = file.content.split('\n');
        
        for (let line of lines) {
            line = line.trim();
            
            if (line === '' || line.startsWith('#')) {
                continue; // Skip empty lines and comments
            }
            
            try {
                let entry = parseLogEntry(line);
                
                if (entry.severity === 'ERROR') {
                    errorCount++;
                }
                
                processedEntries.push(entry);
                
            } catch (error) {
                console.warn(`Failed to parse line: ${line}`);
                continue;
            }
        }
    }
    
    return {
        entries: processedEntries,
        errorCount: errorCount,
        totalProcessed: processedEntries.length
    };
}

function parseLogEntry(line) {
    let parts = line.split(' | ');
    
    if (parts.length < 3) {
        throw new Error('Invalid log format');
    }
    
    return {
        timestamp: new Date(parts[0]),
        severity: parts[1],
        message: parts[2]
    };
}
```

## Performance Considerations

### Loop Performance Tips

```javascript
// Cache array length for better performance
let items = [/* large array */];

// Less efficient (length calculated each iteration)
for (let i = 0; i < items.length; i++) {
    // Process items[i]
}

// More efficient (length cached)
for (let i = 0, len = items.length; i < len; i++) {
    // Process items[i]
}

// Modern browsers optimize this, but caching doesn't hurt
let cachedLength = items.length;
for (let i = 0; i < cachedLength; i++) {
    // Process items[i]
}

// for...of is generally well-optimized and readable
for (let item of items) {
    // Process item
}
```

### Avoid Infinite Loops

```javascript
// Common mistake: forgetting to update loop variable
let count = 0;
while (count < 10) {
    console.log(count);
    // count++; // Don't forget this!
}

// Safety mechanism for potentially infinite loops
let iterations = 0;
const MAX_ITERATIONS = 10000;

while (someComplexCondition() && iterations < MAX_ITERATIONS) {
    // Loop body
    iterations++;
}

if (iterations >= MAX_ITERATIONS) {
    console.warn("Loop exceeded maximum iterations");
}
```

## Common Mistakes to Avoid

1. **Infinite loops** - Always ensure the loop condition will eventually become false
2. **Off-by-one errors** - Be careful with `<` vs `<=` and array indices
3. **Modifying arrays while iterating** - Can cause unexpected behavior
4. **Using for...in with arrays** - Use for...of or traditional for loop instead
5. **Not handling empty arrays or null values**
6. **Forgetting break/continue logic** - Can lead to unnecessary processing

## Best Practices

1. **Use the right loop for the job**:
   - `for` - when you know the number of iterations
   - `while` - when condition-based iteration
   - `do...while` - when you need at least one execution
   - `for...of` - for iterating over arrays and iterables
   - `for...in` - for iterating over object properties

2. **Keep loop bodies simple** - Extract complex logic into functions

3. **Use meaningful variable names** - `i`, `j`, `k` are fine for simple counters, but use descriptive names when appropriate

4. **Handle edge cases** - empty arrays, null values, etc.

5. **Consider using array methods** - `map()`, `filter()`, `reduce()` for functional programming approach

## Summary

| Loop Type | Best For | Example Use Case |
|-----------|----------|------------------|
| `for` | Known iterations, array processing | Counting, array manipulation |
| `while` | Unknown iterations, condition-based | User input, searching |
| `do...while` | At least one execution needed | Menu systems, validation |
| `for...in` | Object property iteration | Configuration processing |
| `for...of` | Array/iterable iteration | Modern array processing |

Choose the appropriate loop based on your specific needs, and always consider readability and performance!