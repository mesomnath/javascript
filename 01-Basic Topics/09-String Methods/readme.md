# String Methods in JavaScript

## Overview

Strings are primitive data types in JavaScript used for storing and manipulating text. JavaScript provides a rich set of built-in methods to work with strings.

## 1. Creating and Accessing Strings

### String Literals

```javascript
let singleQuotes = 'Hello';
let doubleQuotes = "World";
let templateLiteral = `Hello, World!`; // ES6+

// Accessing characters
let str = "JavaScript";
console.log(str[0]); // "J"
console.log(str.charAt(4)); // "S"
console.log(str.length); // 10

// Strings are immutable
str[0] = "j";
console.log(str); // "JavaScript" (unchanged)
```

## 2. Searching and Finding

### `indexOf()` and `lastIndexOf()`

```javascript
let text = "hello world, hello universe";

// indexOf: finds the first occurrence
console.log(text.indexOf("hello")); // 0
console.log(text.indexOf("world")); // 6
console.log(text.indexOf("l")); // 2
console.log(text.indexOf("l", 3)); // 3 (starts searching from index 3)
console.log(text.indexOf("goodbye")); // -1 (not found)

// lastIndexOf: finds the last occurrence
console.log(text.lastIndexOf("hello")); // 13
console.log(text.lastIndexOf("l")); // 15
```

### `includes()`, `startsWith()`, `endsWith()` (ES6+)

```javascript
let sentence = "The quick brown fox jumps over the lazy dog.";

// includes: checks if a string contains another string
console.log(sentence.includes("fox")); // true
console.log(sentence.includes("cat")); // false

// startsWith: checks if a string starts with another string
console.log(sentence.startsWith("The")); // true
console.log(sentence.startsWith("the")); // false (case-sensitive)
console.log(sentence.startsWith("quick", 4)); // true (starts search at index 4)

// endsWith: checks if a string ends with another string
console.log(sentence.endsWith("dog.")); // true
console.log(sentence.endsWith("lazy", 39)); // true (considers first 39 chars)
```

### `search()`

```javascript
// search: searches for a match using a regular expression
let str = "Visit W3Schools!";
console.log(str.search("W3Schools")); // 6
console.log(str.search(/w3schools/i)); // 6 (case-insensitive regex)
```

## 3. Extracting Substrings

### `slice(start, end)`

```javascript
let text = "apple, banana, kiwi";

// Extracts from start to end (end not included)
let part1 = text.slice(7, 13); // "banana"
let part2 = text.slice(7); // "banana, kiwi" (from start to end)
let part3 = text.slice(-4); // "kiwi" (from the end)
```

### `substring(start, end)`

```javascript
// Similar to slice, but cannot accept negative indices
let part4 = text.substring(7, 13); // "banana"
// If start > end, it swaps them
let part5 = text.substring(13, 7); // "banana"
```

### `substr(start, length)` (Legacy - Avoid)

```javascript
// Deprecated, but you might see it in older code
let part6 = text.substr(7, 6); // "banana" (from index 7, get 6 chars)
```

## 4. Modifying and Transforming Strings

### `toUpperCase()` and `toLowerCase()`

```javascript
let message = "Hello World";
console.log(message.toUpperCase()); // "HELLO WORLD"
console.log(message.toLowerCase()); // "hello world"
```

### `concat()`

```javascript
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2, "!"); // "Hello World!"
// The + operator is usually more convenient: text1 + " " + text2 + "!"
```

### `trim()`, `trimStart()`, `trimEnd()`

```javascript
let padded = "   Hello World   ";
console.log(padded.trim()); // "Hello World"
console.log(padded.trimStart()); // "Hello World   "
console.log(padded.trimEnd()); // "   Hello World"
```

### `replace(searchValue, newValue)`

```javascript
let text = "Please visit Microsoft and Microsoft!";

// Replaces only the first match
let newText1 = text.replace("Microsoft", "W3Schools");
console.log(newText1); // "Please visit W3Schools and Microsoft!"

// Use a regular expression with the 'g' flag for global replace
let newText2 = text.replace(/Microsoft/g, "W3Schools");
console.log(newText2); // "Please visit W3Schools and W3Schools!"

// Case-insensitive replace
let newText3 = text.replace(/microsoft/i, "W3Schools");
console.log(newText3); // "Please visit W3Schools and Microsoft!"
```

### `replaceAll(searchValue, newValue)` (ES2021)

```javascript
// A simpler way for global replacement
let newText4 = text.replaceAll("Microsoft", "W3Schools");
console.log(newText4); // "Please visit W3Schools and W3Schools!"
```

## 5. Splitting and Joining

### `split(separator)`

```javascript
let csv = "apple,banana,orange,grape";
let fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "orange", "grape"]

let sentence = "The quick brown fox";
let words = sentence.split(" ");
console.log(words); // ["The", "quick", "brown", "fox"]

let chars = "hello".split("");
console.log(chars); // ["h", "e", "l", "l", "o"]
```

### `join(separator)` (Array method, but related)

```javascript
let fruitsArray = ["apple", "banana", "orange"];
let joinedString = fruitsArray.join(" | ");
console.log(joinedString); // "apple | banana | orange"
```

## 6. Padding Strings

### `padStart(targetLength, padString)` and `padEnd(targetLength, padString)`

```javascript
let num = 5;
let text = "abc";

// Pad start
let paddedNum = String(num).padStart(4, "0"); // "0005"
let paddedText = text.padStart(5, "."); // "..abc"

// Pad end
let paddedEnd = String(num).padEnd(3, "x"); // "5xx"

// Practical example: formatting currency
function formatCurrency(amount) {
    let [dollars, cents = "00"] = String(amount).split(".");
    return `$${dollars.padStart(3, ' ')}.${cents.padEnd(2, '0')}`;
}
console.log(formatCurrency(5.5)); // "$  5.50"
```

## 7. Template Literals (ES6+)

A powerful way to create and format strings.

```javascript
let name = "Alice";
let age = 25;

// Basic interpolation
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Expressions in template literals
let price = 19.99;
let tax = 0.08;
let total = `Total: $${(price * (1 + tax)).toFixed(2)}`;
console.log(total); // "Total: $21.59"

// Multi-line strings
let html = `
  <div>
    <h2>${name}</h2>
    <p>Age: ${age}</p>
  </div>
`;
console.log(html);
```

## 8. Practical Examples

### Data Validation

```javascript
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    email = email.trim();
    return email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.');
}

function isStrongPassword(password) {
    return password.length >= 8 &&
           /[A-Z]/.test(password) &&
           /[a-z]/.test(password) &&
           /\d/.test(password);
}

console.log(isValidEmail(" test@example.com ")); // true
console.log(isStrongPassword("Password123")); // true
```

### URL Slug Generation

```javascript
function createSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove non-word chars
        .replace(/[\s_-]+/g, '-') // Replace spaces and hyphens with a single hyphen
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

let postTitle = "  My First Blog Post!! (with details)  ";
console.log(createSlug(postTitle)); // "my-first-blog-post-with-details"
```

### Parsing Data from Strings

```javascript
function parseQueryString(url) {
    const queryString = url.split('?')[1];
    if (!queryString) return {};
    
    const params = {};
    queryString.split('&').forEach(pair => {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value || '');
    });
    return params;
}

let url = "https://example.com/search?q=javascript&page=2";
console.log(parseQueryString(url)); // { q: "javascript", page: "2" }
```

### Masking Sensitive Information

```javascript
function maskCreditCard(cardNumber) {
    if (typeof cardNumber !== 'string' || cardNumber.length < 12) {
        return "Invalid Card Number";
    }
    const lastFour = cardNumber.slice(-4);
    return lastFour.padStart(cardNumber.length, '*');
}

console.log(maskCreditCard("1234567890123456")); // "************3456"
```

## Common Mistakes to Avoid

1. **Forgetting Immutability**: String methods do not change the original string; they return a new one.
2. **Case Sensitivity**: Most methods are case-sensitive by default. Convert to a common case (`toLowerCase` or `toUpperCase`) before comparing if needed.
3. **`replace()` vs `replaceAll()`**: Forgetting that `replace()` with a string only replaces the first occurrence.
4. **`slice()` vs `substring()`**: Mixing them up, especially with negative indices. `slice` is generally more versatile.
5. **`split()` on an empty string**: `"".split('')` returns `[]`, not `['']`.

## Summary of Common String Methods

| Method | Description | Example |
|--------|-------------|---------|
| `length` | Returns the length of the string. | `'hello'.length` -> `5` |
| `indexOf()` | Returns the index of the first occurrence. | `'hello'.indexOf('l')` -> `2` |
| `slice()` | Extracts a part of a string. | `'hello'.slice(1, 3)` -> `'el'` |
| `split()` | Splits a string into an array of substrings. | `'a,b,c'.split(',')` -> `['a', 'b', 'c']` |
| `replace()` | Replaces a specified value with another. | `'hi'.replace('i', 'o')` -> `'ho'` |
| `toUpperCase()` | Converts a string to uppercase. | `'hello'.toUpperCase()` -> `'HELLO'` |
| `toLowerCase()` | Converts a string to lowercase. | `'HELLO'.toLowerCase()` -> `'hello'` |
| `trim()` | Removes whitespace from both ends. | `'  hi  '.trim()` -> `'hi'` |
| `includes()` | Checks if a string contains another string. | `'hello'.includes('ell')` -> `true` |
| `startsWith()` | Checks if a string begins with specified characters. | `'hello'.startsWith('he')` -> `true` |
| `endsWith()` | Checks if a string ends with specified characters. | `'hello'.endsWith('lo')` -> `true` |
| `padStart()` | Pads the start of a string. | `'5'.padStart(2, '0')` -> `'05'` |
| `padEnd()` | Pads the end of a string. | `'5'.padEnd(2, '0')` -> `'50'` |

Mastering these methods is key to effective text manipulation in JavaScript.