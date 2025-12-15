# JavaScript Interview Questions - Complete Guide

## 📚 Table of Contents
- [Fundamental Questions](#fundamental-questions)
- [Product-Based Company Questions](#product-based-company-questions)
- [DSA Questions](#dsa-questions-data-structures--algorithms)
- [Coding Challenges](#coding-challenges)

---

## 🎯 Fundamental Questions

### Q1: What is JavaScript and what are its key features?
**Answer**: JavaScript is a high-level, interpreted programming language used primarily for web development.

**Key Features:**
- **Dynamic typing**: Variables don't need type declarations
- **Prototype-based**: Uses prototypal inheritance
- **First-class functions**: Functions are treated as objects
- **Single-threaded**: Executes one command at a time
- **Event-driven**: Responds to user interactions
- **Asynchronous**: Handles async operations with callbacks, promises, async/await

**Example:**
```javascript
// Dynamic typing
let x = 5;        // Number
x = "hello";      // Now string

// First-class functions
const greet = function() { return "Hello"; };
const sayHi = greet;
```

---

### Q2: Explain the difference between `var`, `let`, and `const`
**Answer**:

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | No (TDZ) | No (TDZ) |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |

**Example:**
```javascript
// var - function scoped
function test() {
    var x = 1;
    if (true) {
        var x = 2;  // Same variable!
        console.log(x);  // 2
    }
    console.log(x);  // 2
}

// let - block scoped
function test2() {
    let x = 1;
    if (true) {
        let x = 2;  // Different variable
        console.log(x);  // 2
    }
    console.log(x);  // 1
}

// const - cannot reassign
const PI = 3.14;
// PI = 3.15;  // Error!

// But can modify object properties
const obj = { name: "John" };
obj.name = "Jane";  // OK
```

---

### Q3: What is hoisting in JavaScript?
**Answer**: Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation phase.

**Example:**
```javascript
// Function hoisting
sayHello();  // Works!
function sayHello() {
    console.log("Hello");
}

// Variable hoisting (var only)
console.log(x);  // undefined (not error)
var x = 5;

// Interpreted as:
var x;
console.log(x);  // undefined
x = 5;

// let and const are NOT hoisted (Temporal Dead Zone)
console.log(y);  // ReferenceError
let y = 10;
```

---

### Q4: Explain closures with an example
**Answer**: A closure is a function that has access to variables from its outer (enclosing) function's scope, even after the outer function has returned.

**Example:**
```javascript
function createCounter() {
    let count = 0;  // Private variable
    
    return {
        increment: function() {
            return ++count;
        },
        decrement: function() {
            return --count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.getCount());   // 2
// console.log(count);  // Error: count is not accessible
```

**Real-world use case:**
```javascript
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

---

### Q5: What is the event loop?
**Answer**: The event loop is JavaScript's mechanism for handling asynchronous operations in a single-threaded environment.

**How it works:**
1. **Call Stack**: Executes synchronous code
2. **Web APIs**: Handles async operations (setTimeout, fetch, etc.)
3. **Callback Queue**: Stores callbacks from completed async operations
4. **Microtask Queue**: Stores promises (higher priority)
5. **Event Loop**: Moves tasks from queues to call stack when empty

**Example:**
```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

// Output: 1, 4, 3, 2
// Explanation:
// - "1" and "4" are synchronous (call stack)
// - Promise (microtask) executes before setTimeout (macrotask)
// - "3" runs before "2" even though both are async
```

---

### Q6: Explain `this` keyword in JavaScript
**Answer**: `this` refers to the object that is executing the current function. Its value depends on how the function is called.

**Different contexts:**
```javascript
// 1. Global context
console.log(this);  // Window (browser) or global (Node.js)

// 2. Object method
const person = {
    name: "John",
    greet: function() {
        console.log(this.name);  // "John"
    }
};
person.greet();

// 3. Arrow functions (inherit from parent)
const obj = {
    name: "Jane",
    greet: function() {
        const inner = () => {
            console.log(this.name);  // "Jane" (inherits from greet)
        };
        inner();
    }
};

// 4. Event handlers
button.addEventListener('click', function() {
    console.log(this);  // button element
});

// 5. Explicit binding (call, apply, bind)
function greet() {
    console.log(this.name);
}

const user = { name: "Bob" };
greet.call(user);  // "Bob"
greet.apply(user); // "Bob"
const boundGreet = greet.bind(user);
boundGreet();  // "Bob"
```

---

### Q7: What is the difference between `==` and `===`?
**Answer**:
- `==` (loose equality): Compares values after type coercion
- `===` (strict equality): Compares both value and type without coercion

**Examples:**
```javascript
// Type coercion with ==
console.log(5 == "5");        // true (string converted to number)
console.log(null == undefined); // true
console.log(0 == false);      // true
console.log("" == false);     // true

// Strict comparison with ===
console.log(5 === "5");       // false (different types)
console.log(null === undefined); // false
console.log(0 === false);     // false

// Always use === to avoid surprises
const value = "0";
if (value === 0) {  // false (correct)
    console.log("Number");
}
```

---

### Q8: What are Promises? Explain with examples
**Answer**: Promises represent the eventual completion or failure of an asynchronous operation.

**Promise States:**
- **Pending**: Initial state
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

**Example:**
```javascript
// Creating a promise
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve({ data: "User data" });
        } else {
            reject("Error fetching data");
        }
    }, 1000);
});

// Consuming promise
fetchData
    .then(result => {
        console.log(result.data);
        return result.data.toUpperCase();
    })
    .then(upperData => {
        console.log(upperData);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Cleanup");
    });

// Real-world example
function fetchUser(id) {
    return fetch(`https://api.example.com/users/${id}`)
        .then(response => {
            if (!response.ok) throw new Error('User not found');
            return response.json();
        });
}

// Using async/await (modern approach)
async function getUser(id) {
    try {
        const response = await fetch(`https://api.example.com/users/${id}`);
        if (!response.ok) throw new Error('User not found');
        const user = await response.json();
        return user;
    } catch (error) {
        console.error(error);
    }
}
```

---

## 🏢 Product-Based Company Questions

### Google Interview Questions

#### Q1: Implement debounce function
**Answer**: Debounce delays function execution until after a pause in events.

```javascript
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        // Clear previous timeout
        clearTimeout(timeoutId);
        
        // Set new timeout
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage
const searchInput = document.querySelector('#search');

const handleSearch = debounce(function(event) {
    console.log('Searching for:', event.target.value);
    // Make API call here
}, 300);

searchInput.addEventListener('input', handleSearch);

// Test
function log(message) {
    console.log(message);
}

const debouncedLog = debounce(log, 1000);
debouncedLog("First");   // Cancelled
debouncedLog("Second");  // Cancelled
debouncedLog("Third");   // Executes after 1s
```

---

#### Q2: Implement throttle function
**Answer**: Throttle ensures function executes at most once per time interval.

```javascript
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Usage
const handleScroll = throttle(function() {
    console.log('Scroll position:', window.scrollY);
}, 1000);

window.addEventListener('scroll', handleScroll);

// Advanced: With leading and trailing options
function throttleAdvanced(func, limit, options = {}) {
    let timeout;
    let previous = 0;
    
    return function(...args) {
        const now = Date.now();
        const remaining = limit - (now - previous);
        
        if (remaining <= 0 || remaining > limit) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(this, args);
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(() => {
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                func.apply(this, args);
            }, remaining);
        }
    };
}
```

---

#### Q3: Deep clone an object
**Answer**:

```javascript
function deepClone(obj, hash = new WeakMap()) {
    // Handle null or non-object
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj);
    }
    
    // Handle Array
    if (obj instanceof Array) {
        return obj.map(item => deepClone(item, hash));
    }
    
    // Handle circular reference
    if (hash.has(obj)) {
        return hash.get(obj);
    }
    
    // Handle Object
    const cloned = {};
    hash.set(obj, cloned);
    
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key], hash);
        }
    }
    
    return cloned;
}

// Test with circular reference
const original = {
    name: "John",
    age: 30,
    hobbies: ["reading", "gaming"],
    address: {
        city: "NYC",
        country: "USA"
    }
};
original.self = original;  // Circular reference

const cloned = deepClone(original);
console.log(cloned.name);  // "John"
console.log(cloned === original);  // false
console.log(cloned.self === cloned);  // true (circular maintained)
```

---

### Amazon Interview Questions

#### Q1: Implement Promise.all
**Answer**:

```javascript
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('Argument must be an array'));
        }
        
        const results = [];
        let completedPromises = 0;
        
        if (promises.length === 0) {
            return resolve(results);
        }
        
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completedPromises++;
                    
                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    });
}

// Test
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 1000));

promiseAll([p1, p2, p3])
    .then(results => console.log(results))  // [1, 2, 3]
    .catch(error => console.error(error));
```

---

#### Q2: Flatten nested array
**Answer**:

```javascript
// Method 1: Recursive
function flattenArray(arr) {
    const result = [];
    
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    });
    
    return result;
}

// Method 2: Using reduce
function flattenReduce(arr) {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flattenReduce(item) : item);
    }, []);
}

// Method 3: Iterative with stack
function flattenIterative(arr) {
    const stack = [...arr];
    const result = [];
    
    while (stack.length) {
        const item = stack.pop();
        
        if (Array.isArray(item)) {
            stack.push(...item);
        } else {
            result.unshift(item);
        }
    }
    
    return result;
}

// Test
const nested = [1, [2, [3, [4]], 5], 6];
console.log(flattenArray(nested));  // [1, 2, 3, 4, 5, 6]

// ES2019 native method
console.log(nested.flat(Infinity));  // [1, 2, 3, 4, 5, 6]
```

---

### Microsoft Interview Questions

#### Q1: Implement function currying
**Answer**:

```javascript
// Manual currying
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
}

// Test
function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));     // 6
console.log(curriedSum(1, 2)(3));     // 6
console.log(curriedSum(1)(2, 3));     // 6
console.log(curriedSum(1, 2, 3));     // 6

// Practical example
function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply);
const double = curriedMultiply(2);
const doubleAndTriple = double(3);

console.log(doubleAndTriple(4));  // 24 (2 * 3 * 4)
```

---

#### Q2: Implement Event Emitter
**Answer**:

```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    // Subscribe to event
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
        
        // Return unsubscribe function
        return () => this.off(event, listener);
    }
    
    // Subscribe once
    once(event, listener) {
        const onceWrapper = (...args) => {
            listener.apply(this, args);
            this.off(event, onceWrapper);
        };
        this.on(event, onceWrapper);
    }
    
    // Emit event
    emit(event, ...args) {
        if (!this.events[event]) return;
        
        this.events[event].forEach(listener => {
            listener.apply(this, args);
        });
    }
    
    // Unsubscribe
    off(event, listenerToRemove) {
        if (!this.events[event]) return;
        
        this.events[event] = this.events[event].filter(
            listener => listener !== listenerToRemove
        );
    }
    
    // Remove all listeners
    removeAllListeners(event) {
        if (event) {
            delete this.events[event];
        } else {
            this.events = {};
        }
    }
}

// Usage
const emitter = new EventEmitter();

function handleLogin(user) {
    console.log(`${user} logged in`);
}

emitter.on('login', handleLogin);
emitter.on('login', (user) => console.log(`Welcome ${user}!`));

emitter.emit('login', 'John');
// Output:
// John logged in
// Welcome John!

emitter.off('login', handleLogin);
emitter.emit('login', 'Jane');
// Output:
// Welcome Jane!
```

---

### Meta (Facebook) Interview Questions

#### Q1: Implement memoization
**Answer**:

```javascript
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log('Returning from cache');
            return cache.get(key);
        }
        
        console.log('Computing result');
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Test with expensive function
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFib = memoize(fibonacci);

console.log(memoizedFib(40));  // Computing result: 102334155
console.log(memoizedFib(40));  // Returning from cache: 102334155

// Advanced memoization with custom key
function memoizeWithKey(fn, keyGenerator) {
    const cache = new Map();
    
    return function(...args) {
        const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}
```

---

#### Q2: Implement function composition
**Answer**:

```javascript
// Right to left composition
function compose(...fns) {
    return function(input) {
        return fns.reduceRight((acc, fn) => fn(acc), input);
    };
}

// Left to right composition (pipe)
function pipe(...fns) {
    return function(input) {
        return fns.reduce((acc, fn) => fn(acc), input);
    };
}

// Test
const add2 = x => x + 2;
const multiply3 = x => x * 3;
const subtract5 = x => x - 5;

const composed = compose(subtract5, multiply3, add2);
console.log(composed(10));  // (10 + 2) * 3 - 5 = 31

const piped = pipe(add2, multiply3, subtract5);
console.log(piped(10));  // (10 + 2) * 3 - 5 = 31

// Advanced: Async composition
function composeAsync(...fns) {
    return function(input) {
        return fns.reduceRight(
            (acc, fn) => acc.then(fn),
            Promise.resolve(input)
        );
    };
}

// Test async
const asyncAdd = x => Promise.resolve(x + 1);
const asyncMultiply = x => Promise.resolve(x * 2);

const asyncComposed = composeAsync(asyncMultiply, asyncAdd);
asyncComposed(5).then(result => console.log(result));  // 12
```

---

## 💻 DSA Questions (Data Structures & Algorithms)

### Array Problems

#### Q1: Two Sum Problem
**Problem**: Find two numbers that add up to a target.

```javascript
// Brute Force: O(n²)
function twoSumBrute(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// Optimized with Hash Map: O(n)
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}

// Test
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
```

---

#### Q2: Maximum Subarray Sum (Kadane's Algorithm)
**Problem**: Find contiguous subarray with largest sum.

```javascript
function maxSubarraySum(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}

// Test
console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));  // 6
// Subarray [4,-1,2,1] has largest sum = 6

// Return subarray itself
function maxSubarrayWithIndices(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    let start = 0, end = 0, tempStart = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > currentSum + nums[i]) {
            currentSum = nums[i];
            tempStart = i;
        } else {
            currentSum += nums[i];
        }
        
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }
    
    return {
        sum: maxSum,
        subarray: nums.slice(start, end + 1)
    };
}
```

---

#### Q3: Remove Duplicates from Sorted Array
**Problem**: Remove duplicates in-place, return new length.

```javascript
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0;
    
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
}

// Test
const arr = [1, 1, 2, 2, 3, 4, 4, 5];
const length = removeDuplicates(arr);
console.log(length);  // 5
console.log(arr.slice(0, length));  // [1, 2, 3, 4, 5]
```

---

### String Problems

#### Q4: Check if strings are anagrams
**Answer**:

```javascript
// Method 1: Sorting - O(n log n)
function isAnagram1(s1, s2) {
    if (s1.length !== s2.length) return false;
    
    const sorted1 = s1.split('').sort().join('');
    const sorted2 = s2.split('').sort().join('');
    
    return sorted1 === sorted2;
}

// Method 2: Character count - O(n)
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    
    const charCount = {};
    
    for (let char of s1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of s2) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }
    
    return true;
}

// Test
console.log(isAnagram("listen", "silent"));  // true
console.log(isAnagram("hello", "world"));    // false
```

---

#### Q5: Longest Substring Without Repeating Characters
**Answer**:

```javascript
function lengthOfLongestSubstring(s) {
    const seen = new Map();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        if (seen.has(char) && seen.get(char) >= left) {
            left = seen.get(char) + 1;
        }
        
        seen.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

// Test
console.log(lengthOfLongestSubstring("abcabcbb"));  // 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));     // 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew"));    // 3 ("wke")

// Return the substring itself
function longestSubstring(s) {
    const seen = new Map();
    let left = 0;
    let maxLength = 0;
    let result = "";
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        
        if (seen.has(char) && seen.get(char) >= left) {
            left = seen.get(char) + 1;
        }
        
        seen.set(char, right);
        
        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            result = s.substring(left, right + 1);
        }
    }
    
    return result;
}
```

---

### Object/Hash Map Problems

#### Q6: Group Anagrams
**Answer**:

```javascript
function groupAnagrams(words) {
    const map = new Map();
    
    for (let word of words) {
        // Use sorted string as key
        const key = word.split('').sort().join('');
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        
        map.get(key).push(word);
    }
    
    return Array.from(map.values());
}

// Test
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));
// [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// Optimized: Character count as key
function groupAnagramsOptimized(words) {
    const map = new Map();
    
    for (let word of words) {
        // Create character count array
        const count = new Array(26).fill(0);
        for (let char of word) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        const key = count.join('#');
        
        if (!map.has(key)) {
            map.set(key, []);
        }
        
        map.get(key).push(word);
    }
    
    return Array.from(map.values());
}
```

---

#### Q7: First Non-Repeating Character
**Answer**:

```javascript
function firstNonRepeatingChar(str) {
    const charCount = {};
    
    // Count occurrences
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Find first non-repeating
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null;
}

// Test
console.log(firstNonRepeatingChar("leetcode"));   // "l"
console.log(firstNonRepeatingChar("loveleetcode")); // "v"
console.log(firstNonRepeatingChar("aabb"));       // null

// Return index instead
function firstUniqChar(s) {
    const charCount = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    for (let i = 0; i < s.length; i++) {
        if (charCount.get(s[i]) === 1) {
            return i;
        }
    }
    
    return -1;
}
```

---

### Recursion Problems

#### Q8: Generate all permutations
**Answer**:

```javascript
function permutations(arr) {
    const result = [];
    
    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            current.push(remaining[i]);
            
            const newRemaining = [
                ...remaining.slice(0, i),
                ...remaining.slice(i + 1)
            ];
            
            backtrack(current, newRemaining);
            current.pop();
        }
    }
    
    backtrack([], arr);
    return result;
}

// Test
console.log(permutations([1, 2, 3]));
// [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]

// String permutations
function stringPermutations(str) {
    const result = [];
    
    function backtrack(current, remaining) {
        if (remaining.length === 0) {
            result.push(current);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            backtrack(
                current + remaining[i],
                remaining.slice(0, i) + remaining.slice(i + 1)
            );
        }
    }
    
    backtrack('', str);
    return result;
}
```

---

#### Q9: Fibonacci with Memoization
**Answer**:

```javascript
// Without memoization - O(2^n)
function fibSlow(n) {
    if (n <= 1) return n;
    return fibSlow(n - 1) + fibSlow(n - 2);
}

// With memoization - O(n)
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// Iterative - O(n)
function fibIterative(n) {
    if (n <= 1) return n;
    
    let prev = 0, curr = 1;
    
    for (let i = 2; i <= n; i++) {
        [prev, curr] = [curr, prev + curr];
    }
    
    return curr;
}

// Test
console.log(fibonacci(10));  // 55
console.log(fibonacci(40));  // 102334155 (fast with memo)

// Generate Fibonacci sequence
function fibSequence(n) {
    const result = [0, 1];
    
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    
    return result;
}

console.log(fibSequence(10));
// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

---

### Linked List Problems

#### Q10: Reverse a Linked List
**Answer**:

```javascript
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Iterative approach - O(n) time, O(1) space
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        const nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    
    return prev;
}

// Recursive approach - O(n) time, O(n) space
function reverseListRecursive(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    const newHead = reverseListRecursive(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
}

// Test
const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const reversed = reverseList(head);

// Print list
function printList(head) {
    const values = [];
    while (head) {
        values.push(head.val);
        head = head.next;
    }
    console.log(values.join(' -> '));
}

printList(reversed);  // 4 -> 3 -> 2 -> 1
```

---

#### Q11: Detect Cycle in Linked List
**Answer**:

```javascript
// Floyd's Cycle Detection (Tortoise and Hare)
function hasCycle(head) {
    if (!head || !head.next) return false;
    
    let slow = head;
    let fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            return true;
        }
    }
    
    return false;
}

// Find the start of the cycle
function detectCycle(head) {
    if (!head || !head.next) return null;
    
    let slow = head;
    let fast = head;
    let hasCycle = false;
    
    // Detect cycle
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            hasCycle = true;
            break;
        }
    }
    
    if (!hasCycle) return null;
    
    // Find cycle start
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
}

// Test
const node1 = new ListNode(3);
const node2 = new ListNode(2);
const node3 = new ListNode(0);
const node4 = new ListNode(-4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;  // Cycle

console.log(hasCycle(node1));  // true
console.log(detectCycle(node1).val);  // 2
```

---

#### Q12: Merge Two Sorted Lists
**Answer**:

```javascript
function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    // Attach remaining nodes
    current.next = l1 || l2;
    
    return dummy.next;
}

// Recursive approach
function mergeTwoListsRecursive(l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    
    if (l1.val <= l2.val) {
        l1.next = mergeTwoListsRecursive(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoListsRecursive(l1, l2.next);
        return l2;
    }
}

// Test
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

const merged = mergeTwoLists(list1, list2);
printList(merged);  // 1 -> 2 -> 3 -> 4 -> 5 -> 6
```

---

### Tree Problems

#### Q13: Binary Tree Traversals
**Answer**:

```javascript
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Inorder: Left -> Root -> Right
function inorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (!node) return;
        
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    
    traverse(root);
    return result;
}

// Preorder: Root -> Left -> Right
function preorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (!node) return;
        
        result.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }
    
    traverse(root);
    return result;
}

// Postorder: Left -> Right -> Root
function postorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (!node) return;
        
        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    }
    
    traverse(root);
    return result;
}

// Level Order (BFS)
function levelOrder(root) {
    if (!root) return [];
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}

// Test
const root = new TreeNode(1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3, new TreeNode(6), new TreeNode(7))
);

console.log(inorderTraversal(root));   // [4,2,5,1,6,3,7]
console.log(preorderTraversal(root));  // [1,2,4,5,3,6,7]
console.log(postorderTraversal(root)); // [4,5,2,6,7,3,1]
console.log(levelOrder(root));         // [[1],[2,3],[4,5,6,7]]
```

---

#### Q14: Maximum Depth of Binary Tree
**Answer**:

```javascript
// Recursive approach
function maxDepth(root) {
    if (!root) return 0;
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
}

// Iterative (BFS)
function maxDepthIterative(root) {
    if (!root) return 0;
    
    const queue = [root];
    let depth = 0;
    
    while (queue.length > 0) {
        const levelSize = queue.length;
        depth++;
        
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return depth;
}

// Test
const tree = new TreeNode(3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(maxDepth(tree));  // 3
```

---

#### Q15: Validate Binary Search Tree
**Answer**:

```javascript
function isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    
    // Current node must be within min and max range
    if (root.val <= min || root.val >= max) {
        return false;
    }
    
    // Left subtree: all values must be less than root
    // Right subtree: all values must be greater than root
    return isValidBST(root.left, min, root.val) &&
           isValidBST(root.right, root.val, max);
}

// Inorder traversal approach
function isValidBSTInorder(root) {
    let prev = -Infinity;
    
    function inorder(node) {
        if (!node) return true;
        
        if (!inorder(node.left)) return false;
        
        if (node.val <= prev) return false;
        prev = node.val;
        
        return inorder(node.right);
    }
    
    return inorder(root);
}

// Test
const validBST = new TreeNode(5,
    new TreeNode(3, new TreeNode(1), new TreeNode(4)),
    new TreeNode(7, new TreeNode(6), new TreeNode(9))
);

const invalidBST = new TreeNode(5,
    new TreeNode(3),
    new TreeNode(7, new TreeNode(6), new TreeNode(4))  // Invalid!
);

console.log(isValidBST(validBST));    // true
console.log(isValidBST(invalidBST));  // false
```

---

### Sorting & Searching

#### Q16: Quick Sort Implementation
**Answer**:

```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// In-place version
function quickSortInPlace(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSortInPlace(arr, low, pivotIndex - 1);
        quickSortInPlace(arr, pivotIndex + 1, high);
    }
    return arr;
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

// Test
console.log(quickSort([64, 34, 25, 12, 22, 11, 90]));
// [11, 12, 22, 25, 34, 64, 90]
```

---

#### Q17: Binary Search
**Answer**:

```javascript
// Iterative
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Recursive
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Find first occurrence
function findFirst(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1;  // Continue searching left
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}

// Test
const sorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(sorted, 5));  // 4
console.log(binarySearch(sorted, 10)); // -1

const duplicates = [1, 2, 2, 2, 3, 4, 5];
console.log(findFirst(duplicates, 2)); // 1
```

---

### Netflix Interview Questions

#### Q18: Implement LRU Cache
**Answer**:

```javascript
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        
        // Move to end (most recently used)
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        
        return value;
    }
    
    put(key, value) {
        // Delete if exists
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        
        // Add to end
        this.cache.set(key, value);
        
        // Remove least recently used if over capacity
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}

// Test
const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));  // 1
cache.put(3, 3);  // Evicts key 2
console.log(cache.get(2));  // -1 (not found)
cache.put(4, 4);  // Evicts key 1
console.log(cache.get(1));  // -1 (not found)
console.log(cache.get(3));  // 3
console.log(cache.get(4));  // 4
```

---

#### Q19: Rate Limiter Implementation
**Answer**:

```javascript
class RateLimiter {
    constructor(maxRequests, windowMs) {
        this.maxRequests = maxRequests;
        this.windowMs = windowMs;
        this.requests = new Map();
    }
    
    isAllowed(userId) {
        const now = Date.now();
        
        if (!this.requests.has(userId)) {
            this.requests.set(userId, []);
        }
        
        const userRequests = this.requests.get(userId);
        
        // Remove old requests outside the time window
        const validRequests = userRequests.filter(
            timestamp => now - timestamp < this.windowMs
        );
        
        this.requests.set(userId, validRequests);
        
        // Check if user exceeded limit
        if (validRequests.length >= this.maxRequests) {
            return false;
        }
        
        // Add current request
        validRequests.push(now);
        return true;
    }
}

// Test
const limiter = new RateLimiter(3, 1000);  // 3 requests per second

console.log(limiter.isAllowed('user1'));  // true
console.log(limiter.isAllowed('user1'));  // true
console.log(limiter.isAllowed('user1'));  // true
console.log(limiter.isAllowed('user1'));  // false (exceeded limit)

setTimeout(() => {
    console.log(limiter.isAllowed('user1'));  // true (new window)
}, 1100);

// Token Bucket Algorithm
class TokenBucket {
    constructor(capacity, refillRate) {
        this.capacity = capacity;
        this.tokens = capacity;
        this.refillRate = refillRate;  // tokens per second
        this.lastRefill = Date.now();
    }
    
    consume(tokens = 1) {
        this.refill();
        
        if (this.tokens >= tokens) {
            this.tokens -= tokens;
            return true;
        }
        
        return false;
    }
    
    refill() {
        const now = Date.now();
        const timePassed = (now - this.lastRefill) / 1000;
        const tokensToAdd = timePassed * this.refillRate;
        
        this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
        this.lastRefill = now;
    }
}
```

---

### Uber Interview Questions

#### Q20: Find Longest Palindromic Substring
**Answer**:

```javascript
function longestPalindrome(s) {
    if (s.length < 2) return s;
    
    let start = 0;
    let maxLength = 1;
    
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                start = left;
                maxLength = currentLength;
            }
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes
        expandAroundCenter(i, i);
        // Even length palindromes
        expandAroundCenter(i, i + 1);
    }
    
    return s.substring(start, start + maxLength);
}

// Test
console.log(longestPalindrome("babad"));  // "bab" or "aba"
console.log(longestPalindrome("cbbd"));   // "bb"

// Dynamic Programming approach
function longestPalindromeDP(s) {
    const n = s.length;
    const dp = Array(n).fill(null).map(() => Array(n).fill(false));
    let start = 0;
    let maxLength = 1;
    
    // Single characters are palindromes
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }
    
    // Check for two-character palindromes
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }
    
    // Check for palindromes of length 3+
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            const j = i + len - 1;
            
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                start = i;
                maxLength = len;
            }
        }
    }
    
    return s.substring(start, start + maxLength);
}
```

---

#### Q21: Design URL Shortener
**Answer**:

```javascript
class URLShortener {
    constructor() {
        this.urlMap = new Map();
        this.shortToLong = new Map();
        this.counter = 0;
        this.baseUrl = 'http://short.ly/';
        this.chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    }
    
    // Encode URL to short URL
    encode(longUrl) {
        if (this.urlMap.has(longUrl)) {
            return this.urlMap.get(longUrl);
        }
        
        const shortCode = this.toBase62(this.counter++);
        const shortUrl = this.baseUrl + shortCode;
        
        this.urlMap.set(longUrl, shortUrl);
        this.shortToLong.set(shortUrl, longUrl);
        
        return shortUrl;
    }
    
    // Decode short URL to original URL
    decode(shortUrl) {
        return this.shortToLong.get(shortUrl) || null;
    }
    
    // Convert number to base62
    toBase62(num) {
        if (num === 0) return this.chars[0];
        
        let result = '';
        while (num > 0) {
            result = this.chars[num % 62] + result;
            num = Math.floor(num / 62);
        }
        
        return result;
    }
}

// Test
const shortener = new URLShortener();

const long1 = 'https://www.example.com/very/long/url/path';
const short1 = shortener.encode(long1);
console.log(short1);  // http://short.ly/a

const long2 = 'https://www.another-example.com/another/long/path';
const short2 = shortener.encode(long2);
console.log(short2);  // http://short.ly/b

console.log(shortener.decode(short1));  // Original URL
console.log(shortener.decode(short2));  // Another original URL

// Advanced: With custom short codes and expiration
class AdvancedURLShortener extends URLShortener {
    constructor() {
        super();
        this.expirations = new Map();
    }
    
    encode(longUrl, customCode = null, expirationMs = null) {
        const shortCode = customCode || this.toBase62(this.counter++);
        const shortUrl = this.baseUrl + shortCode;
        
        this.urlMap.set(longUrl, shortUrl);
        this.shortToLong.set(shortUrl, longUrl);
        
        if (expirationMs) {
            this.expirations.set(shortUrl, Date.now() + expirationMs);
        }
        
        return shortUrl;
    }
    
    decode(shortUrl) {
        // Check expiration
        if (this.expirations.has(shortUrl)) {
            if (Date.now() > this.expirations.get(shortUrl)) {
                this.shortToLong.delete(shortUrl);
                this.expirations.delete(shortUrl);
                return null;  // Expired
            }
        }
        
        return this.shortToLong.get(shortUrl) || null;
    }
}
```

---

### Apple Interview Questions

#### Q22: Implement Auto-complete System
**Answer**:

```javascript
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
        this.frequency = 0;
    }
}

class AutocompleteSystem {
    constructor() {
        this.root = new TrieNode();
    }
    
    // Add word to trie
    addWord(word, frequency = 1) {
        let node = this.root;
        
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        
        node.isEndOfWord = true;
        node.frequency += frequency;
    }
    
    // Get all words with prefix
    search(prefix) {
        let node = this.root;
        
        // Navigate to prefix
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];
            }
            node = node.children[char];
        }
        
        // Collect all words from this point
        const results = [];
        this.collectWords(node, prefix, results);
        
        // Sort by frequency
        results.sort((a, b) => b.frequency - a.frequency);
        
        return results.slice(0, 10);  // Top 10
    }
    
    collectWords(node, prefix, results) {
        if (node.isEndOfWord) {
            results.push({ word: prefix, frequency: node.frequency });
        }
        
        for (let char in node.children) {
            this.collectWords(node.children[char], prefix + char, results);
        }
    }
}

// Test
const autocomplete = new AutocompleteSystem();

// Add words with frequencies
autocomplete.addWord('apple', 5);
autocomplete.addWord('application', 3);
autocomplete.addWord('apply', 2);
autocomplete.addWord('ape', 1);
autocomplete.addWord('banana', 4);

console.log(autocomplete.search('app'));
// [
//   { word: 'apple', frequency: 5 },
//   { word: 'application', frequency: 3 },
//   { word: 'apply', frequency: 2 }
// ]

console.log(autocomplete.search('ban'));
// [{ word: 'banana', frequency: 4 }]
```

---

#### Q23: Merge Intervals
**Answer**:

```javascript
function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;
    
    // Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = merged[merged.length - 1];
        
        if (current[0] <= last[1]) {
            // Overlapping - merge
            last[1] = Math.max(last[1], current[1]);
        } else {
            // Non-overlapping - add new interval
            merged.push(current);
        }
    }
    
    return merged;
}

// Test
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
// [[1,6],[8,10],[15,18]]

console.log(mergeIntervals([[1,4],[4,5]]));
// [[1,5]]

// Insert interval
function insertInterval(intervals, newInterval) {
    const result = [];
    let i = 0;
    
    // Add all intervals before newInterval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    // Merge overlapping intervals
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);
    
    // Add remaining intervals
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
}

console.log(insertInterval([[1,3],[6,9]], [2,5]));
// [[1,5],[6,9]]
```

---

## 🎯 Coding Challenges

### Challenge 1: Implement Array.prototype.map
```javascript
Array.prototype.myMap = function(callback) {
    const result = [];
    
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    
    return result;
};

// Test
const nums = [1, 2, 3, 4];
const doubled = nums.myMap(x => x * 2);
console.log(doubled);  // [2, 4, 6, 8]
```

### Challenge 2: Implement Array.prototype.filter
```javascript
Array.prototype.myFilter = function(callback) {
    const result = [];
    
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    
    return result;
};

// Test
const nums = [1, 2, 3, 4, 5];
const evens = nums.myFilter(x => x % 2 === 0);
console.log(evens);  // [2, 4]
```

### Challenge 3: Implement Array.prototype.reduce
```javascript
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    
    return accumulator;
};

// Test
const nums = [1, 2, 3, 4];
const sum = nums.myReduce((acc, num) => acc + num, 0);
console.log(sum);  // 10
```

---

### Challenge 4: Implement bind() method
```javascript
Function.prototype.myBind = function(context, ...args) {
    const fn = this;
    
    return function(...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    };
};

// Test
const person = { name: 'John' };

function greet(greeting, punctuation) {
    return `${greeting}, ${this.name}${punctuation}`;
}

const boundGreet = greet.myBind(person, 'Hello');
console.log(boundGreet('!'));  // "Hello, John!"
```

---

### Challenge 5: Implement call() and apply()
```javascript
Function.prototype.myCall = function(context, ...args) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    
    return result;
};

Function.prototype.myApply = function(context, args = []) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    
    return result;
};

// Test
function introduce(age, city) {
    return `${this.name} is ${age} years old and lives in ${city}`;
}

const user = { name: 'Alice' };

console.log(introduce.myCall(user, 25, 'NYC'));
// "Alice is 25 years old and lives in NYC"

console.log(introduce.myApply(user, [25, 'NYC']));
// "Alice is 25 years old and lives in NYC"
```

---

### Challenge 6: Implement Promise.race
```javascript
function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError('Argument must be an array'));
        }
        
        if (promises.length === 0) {
            return;
        }
        
        promises.forEach(promise => {
            Promise.resolve(promise)
                .then(resolve)
                .catch(reject);
        });
    });
}

// Test
const p1 = new Promise(resolve => setTimeout(() => resolve('First'), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve('Second'), 500));
const p3 = new Promise(resolve => setTimeout(() => resolve('Third'), 2000));

promiseRace([p1, p2, p3])
    .then(result => console.log(result));  // "Second" (fastest)
```

---

### Challenge 7: Implement Promise.allSettled
```javascript
function promiseAllSettled(promises) {
    return Promise.all(
        promises.map(promise =>
            Promise.resolve(promise)
                .then(value => ({ status: 'fulfilled', value }))
                .catch(reason => ({ status: 'rejected', reason }))
        )
    );
}

// Test
const p1 = Promise.resolve(1);
const p2 = Promise.reject('Error');
const p3 = Promise.resolve(3);

promiseAllSettled([p1, p2, p3])
    .then(results => console.log(results));
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'rejected', reason: 'Error' },
//   { status: 'fulfilled', value: 3 }
// ]
```

---

### Challenge 8: Implement Array.prototype.flat
```javascript
Array.prototype.myFlat = function(depth = 1) {
    const result = [];
    
    const flatten = (arr, currentDepth) => {
        for (let item of arr) {
            if (Array.isArray(item) && currentDepth < depth) {
                flatten(item, currentDepth + 1);
            } else {
                result.push(item);
            }
        }
    };
    
    flatten(this, 0);
    return result;
};

// Test
const nested = [1, [2, [3, [4, 5]]]];
console.log(nested.myFlat(1));  // [1, 2, [3, [4, 5]]]
console.log(nested.myFlat(2));  // [1, 2, 3, [4, 5]]
console.log(nested.myFlat(Infinity));  // [1, 2, 3, 4, 5]
```

---

### Challenge 9: Implement Object.create
```javascript
function objectCreate(proto) {
    function F() {}
    F.prototype = proto;
    return new F();
}

// Test
const parent = {
    greet: function() {
        return `Hello, ${this.name}`;
    }
};

const child = objectCreate(parent);
child.name = 'John';

console.log(child.greet());  // "Hello, John"
console.log(Object.getPrototypeOf(child) === parent);  // true
```

---

### Challenge 10: Implement Array.prototype.groupBy
```javascript
Array.prototype.myGroupBy = function(callback) {
    const result = {};
    
    for (let i = 0; i < this.length; i++) {
        const key = callback(this[i], i, this);
        
        if (!result[key]) {
            result[key] = [];
        }
        
        result[key].push(this[i]);
    }
    
    return result;
};

// Test
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 }
];

const grouped = people.myGroupBy(person => person.age);
console.log(grouped);
// {
//   '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   '30': [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]
// }
```

---

## 🔥 Advanced JavaScript Questions

### Q24: Explain Prototypal Inheritance
**Answer**:

```javascript
// Constructor function
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

function Dog(name, breed) {
    Animal.call(this, name);  // Call parent constructor
    this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    return `${this.name} barks`;
};

Dog.prototype.getBreed = function() {
    return this.breed;
};

// Test
const dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.speak());  // "Buddy barks"
console.log(dog.getBreed());  // "Golden Retriever"
console.log(dog instanceof Dog);  // true
console.log(dog instanceof Animal);  // true

// ES6 Class syntax (syntactic sugar)
class AnimalES6 {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
}

class DogES6 extends AnimalES6 {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks`;
    }
}
```

---

### Q25: Implement Private Variables
**Answer**:

```javascript
// Using Closures
function createBankAccount(initialBalance) {
    let balance = initialBalance;  // Private variable
    
    return {
        deposit(amount) {
            if (amount > 0) {
                balance += amount;
                return `Deposited ${amount}. New balance: ${balance}`;
            }
            return 'Invalid amount';
        },
        
        withdraw(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return `Withdrew ${amount}. New balance: ${balance}`;
            }
            return 'Invalid amount or insufficient funds';
        },
        
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);
console.log(account.deposit(500));  // "Deposited 500. New balance: 1500"
console.log(account.withdraw(200));  // "Withdrew 200. New balance: 1300"
console.log(account.getBalance());  // 1300
// console.log(account.balance);  // undefined (private)

// Using ES2022 Private Fields
class BankAccount {
    #balance;  // Private field
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return `Deposited ${amount}. New balance: ${this.#balance}`;
        }
        return 'Invalid amount';
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return `Withdrew ${amount}. New balance: ${this.#balance}`;
        }
        return 'Invalid amount or insufficient funds';
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account2 = new BankAccount(1000);
console.log(account2.getBalance());  // 1000
// console.log(account2.#balance);  // SyntaxError: Private field
```

---

### Q26: Implement Async Iterator
**Answer**:

```javascript
// Custom async iterator
const asyncIterable = {
    data: [1, 2, 3, 4, 5],
    
    [Symbol.asyncIterator]() {
        let index = 0;
        
        return {
            next: async () => {
                await new Promise(resolve => setTimeout(resolve, 100));
                
                if (index < this.data.length) {
                    return {
                        value: this.data[index++],
                        done: false
                    };
                }
                
                return { done: true };
            }
        };
    }
};

// Using for await...of
async function processData() {
    for await (const value of asyncIterable) {
        console.log(value);
    }
}

processData();

// Async generator function
async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

async function consumeGenerator() {
    for await (const value of asyncGenerator()) {
        console.log(value);  // 1, 2, 3
    }
}

// Practical example: Paginated API
async function* fetchPages(url, totalPages) {
    for (let page = 1; page <= totalPages; page++) {
        const response = await fetch(`${url}?page=${page}`);
        const data = await response.json();
        yield data;
    }
}

async function processAllPages() {
    for await (const pageData of fetchPages('https://api.example.com/data', 5)) {
        console.log('Processing page:', pageData);
    }
}
```

---

### Q27: Implement Proxy for Validation
**Answer**:

```javascript
function createValidatedObject(target, validators) {
    return new Proxy(target, {
        set(obj, prop, value) {
            if (validators[prop]) {
                if (!validators[prop](value)) {
                    throw new Error(`Invalid value for ${prop}`);
                }
            }
            obj[prop] = value;
            return true;
        }
    });
}

// Test
const user = createValidatedObject({}, {
    age: (value) => typeof value === 'number' && value > 0 && value < 150,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    name: (value) => typeof value === 'string' && value.length > 0
});

user.name = 'John';  // OK
user.age = 25;  // OK
user.email = 'john@example.com';  // OK

try {
    user.age = -5;  // Error: Invalid value for age
} catch (e) {
    console.error(e.message);
}

try {
    user.email = 'invalid-email';  // Error: Invalid value for email
} catch (e) {
    console.error(e.message);
}

// Advanced: Observable pattern with Proxy
function createObservable(target, callback) {
    return new Proxy(target, {
        set(obj, prop, value) {
            const oldValue = obj[prop];
            obj[prop] = value;
            callback(prop, oldValue, value);
            return true;
        }
    });
}

const state = createObservable({ count: 0 }, (prop, oldValue, newValue) => {
    console.log(`${prop} changed from ${oldValue} to ${newValue}`);
});

state.count = 1;  // "count changed from 0 to 1"
state.count = 2;  // "count changed from 1 to 2"
```

---

### Q28: Implement Custom Promise
**Answer**:

```javascript
class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onFulfilledCallbacks.forEach(fn => fn());
            }
        };
        
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };
        
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
        
        const promise2 = new MyPromise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolve(x);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            }
            
            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolve(x);
                    } catch (error) {
                        reject(error);
                    }
                }, 0);
            }
            
            if (this.state === 'pending') {
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onFulfilled(this.value);
                            resolve(x);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0);
                });
                
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onRejected(this.reason);
                            resolve(x);
                        } catch (error) {
                            reject(error);
                        }
                    }, 0);
                });
            }
        });
        
        return promise2;
    }
    
    catch(onRejected) {
        return this.then(null, onRejected);
    }
    
    finally(callback) {
        return this.then(
            value => MyPromise.resolve(callback()).then(() => value),
            reason => MyPromise.resolve(callback()).then(() => { throw reason })
        );
    }
    
    static resolve(value) {
        return new MyPromise((resolve) => resolve(value));
    }
    
    static reject(reason) {
        return new MyPromise((resolve, reject) => reject(reason));
    }
}

// Test
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => resolve('Success!'), 1000);
});

promise
    .then(result => {
        console.log(result);  // "Success!"
        return result.toUpperCase();
    })
    .then(result => {
        console.log(result);  // "SUCCESS!"
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Q29: Implement Retry Logic for API Calls
**Answer**:

```javascript
async function retry(fn, maxAttempts = 3, delay = 1000) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxAttempts) {
                throw error;
            }
            
            console.log(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            
            // Exponential backoff
            delay *= 2;
        }
    }
}

// Test
async function unreliableAPI() {
    const random = Math.random();
    if (random < 0.7) {
        throw new Error('API Error');
    }
    return 'Success';
}

retry(() => unreliableAPI(), 5, 500)
    .then(result => console.log(result))
    .catch(error => console.error('All attempts failed:', error.message));

// Advanced: With abort controller
async function retryWithAbort(fn, options = {}) {
    const {
        maxAttempts = 3,
        delay = 1000,
        onRetry = () => {},
        shouldRetry = () => true
    } = options;
    
    let lastError;
    
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;
            
            if (attempt === maxAttempts || !shouldRetry(error)) {
                throw error;
            }
            
            onRetry(attempt, error);
            await new Promise(resolve => setTimeout(resolve, delay * attempt));
        }
    }
    
    throw lastError;
}

// Usage
retryWithAbort(
    () => fetch('https://api.example.com/data').then(r => r.json()),
    {
        maxAttempts: 5,
        delay: 1000,
        onRetry: (attempt, error) => {
            console.log(`Retry attempt ${attempt}: ${error.message}`);
        },
        shouldRetry: (error) => {
            // Only retry on network errors, not 404
            return !error.message.includes('404');
        }
    }
);
```

---

### Q30: Implement State Machine
**Answer**:

```javascript
class StateMachine {
    constructor(config) {
        this.states = config.states;
        this.currentState = config.initial;
        this.listeners = [];
    }
    
    transition(event) {
        const currentStateConfig = this.states[this.currentState];
        const nextState = currentStateConfig.on[event];
        
        if (!nextState) {
            console.warn(`No transition for event "${event}" in state "${this.currentState}"`);
            return;
        }
        
        // Call exit action
        if (currentStateConfig.exit) {
            currentStateConfig.exit();
        }
        
        const previousState = this.currentState;
        this.currentState = nextState;
        
        // Call entry action
        const nextStateConfig = this.states[nextState];
        if (nextStateConfig.entry) {
            nextStateConfig.entry();
        }
        
        // Notify listeners
        this.listeners.forEach(listener => {
            listener(previousState, this.currentState, event);
        });
    }
    
    getState() {
        return this.currentState;
    }
    
    subscribe(listener) {
        this.listeners.push(listener);
        
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }
}

// Example: Traffic Light
const trafficLight = new StateMachine({
    initial: 'red',
    states: {
        red: {
            on: { TIMER: 'green' },
            entry: () => console.log('🔴 Red light - STOP'),
            exit: () => console.log('Red light ending...')
        },
        yellow: {
            on: { TIMER: 'red' },
            entry: () => console.log('🟡 Yellow light - CAUTION'),
        },
        green: {
            on: { TIMER: 'yellow' },
            entry: () => console.log('🟢 Green light - GO'),
        }
    }
});

// Subscribe to state changes
trafficLight.subscribe((from, to, event) => {
    console.log(`Transition: ${from} -> ${to} (event: ${event})`);
});

// Simulate traffic light
trafficLight.transition('TIMER');  // red -> green
trafficLight.transition('TIMER');  // green -> yellow
trafficLight.transition('TIMER');  // yellow -> red
```

---

## 🎓 Interview Tips

### Before the Interview:
1. **Practice coding on whiteboard/paper** - Simulate interview environment
2. **Understand time/space complexity** - Always analyze your solutions
3. **Review fundamentals** - Closures, promises, prototypes, this
4. **Practice explaining your thought process** - Verbalize while coding
5. **Prepare questions to ask** - Show genuine interest

### During the Interview:
1. **Clarify requirements** - Ask questions before coding
2. **Think out loud** - Share your thought process
3. **Start with brute force** - Then optimize
4. **Test your code** - Walk through examples
5. **Handle edge cases** - Consider null, empty, negative values

### Common Mistakes to Avoid:
- ❌ Starting to code immediately without planning
- ❌ Not asking clarifying questions
- ❌ Ignoring edge cases
- ❌ Not testing the code
- ❌ Giving up too quickly

---

**Good luck with your interviews! 🚀**
