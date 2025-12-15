# JavaScript Best Practices

## 📌 Professional JavaScript Development

Write clean, maintainable, and professional code.

## Code Organization

### File Structure
```
project/
├── src/
│   ├── components/
│   ├── utils/
│   ├── services/
│   ├── config/
│   └── index.js
├── tests/
├── docs/
└── package.json
```

### Module Organization
```javascript
// ✅ One responsibility per module
// user-service.js
export class UserService {
    getUser(id) { }
    createUser(data) { }
    updateUser(id, data) { }
}

// ✅ Clear exports
export { UserService };
export { validateUser } from './validators';
```

## Naming Conventions

```javascript
// Variables and functions: camelCase
const userName = "John";
function getUserData() { }

// Constants: UPPER_SNAKE_CASE
const API_KEY = "abc123";
const MAX_RETRY_COUNT = 3;

// Classes: PascalCase
class UserProfile { }
class PaymentService { }

// Private (convention): _prefix
class User {
    _privateMethod() { }
}

// Boolean variables: is/has/can prefix
const isActive = true;
const hasPermission = false;
const canEdit = true;

// Functions: verb + noun
function fetchUser() { }
function calculateTotal() { }
function validateEmail() { }
```

## Code Quality

### Use Strict Mode
```javascript
'use strict';

// Catches common errors
x = 10; // Error: x is not defined
```

### Avoid Global Variables
```javascript
// ❌ Avoid
var globalVar = "bad";

// ✅ Use modules or IIFE
(function() {
    const localVar = "good";
})();
```

### Use const by Default
```javascript
// ❌ Unnecessary let
let name = "John";
// ... name never changes

// ✅ Use const
const name = "John";
```

### Avoid Magic Numbers
```javascript
// ❌ Magic numbers
if (user.age > 18) { }
setTimeout(callback, 3000);

// ✅ Named constants
const ADULT_AGE = 18;
const TIMEOUT_MS = 3000;

if (user.age > ADULT_AGE) { }
setTimeout(callback, TIMEOUT_MS);
```

## Error Handling

```javascript
// ✅ Validate input
function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Arguments must be numbers');
    }
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

// ✅ Use try-catch for async operations
async function fetchData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch failed:', error);
        throw error;
    }
}
```

## Documentation

### JSDoc Comments
```javascript
/**
 * Calculates the total price including tax
 * @param {number} price - The base price
 * @param {number} taxRate - Tax rate as decimal (e.g., 0.1 for 10%)
 * @returns {number} Total price with tax
 * @throws {TypeError} If arguments are not numbers
 * @example
 * calculateTotal(100, 0.1); // Returns 110
 */
function calculateTotal(price, taxRate) {
    if (typeof price !== 'number' || typeof taxRate !== 'number') {
        throw new TypeError('Arguments must be numbers');
    }
    return price * (1 + taxRate);
}
```

### Inline Comments
```javascript
// ✅ Explain WHY, not WHAT
// Using setTimeout to defer execution until next event loop
// This prevents blocking the UI thread
setTimeout(() => heavyOperation(), 0);

// ❌ Don't state the obvious
// Increment i by 1
i++;
```

## Security Best Practices

### Avoid eval()
```javascript
// ❌ Never use eval
eval('alert("Dangerous!")');

// ✅ Use safe alternatives
const result = JSON.parse(jsonString);
```

### Sanitize Input
```javascript
// ✅ Validate and sanitize
function sanitizeInput(input) {
    return input.replace(/[<>]/g, '');
}

// ✅ Use textContent instead of innerHTML
element.textContent = userInput; // Safe
// element.innerHTML = userInput; // Dangerous!
```

### Use HTTPS
```javascript
// ✅ Always use HTTPS for API calls
const API_URL = 'https://api.example.com';
```

### Protect Sensitive Data
```javascript
// ❌ Don't store sensitive data in localStorage
localStorage.setItem('password', password);

// ✅ Use secure methods
// - HttpOnly cookies
// - Server-side sessions
// - Environment variables for API keys
```

## Performance Best Practices

### Minimize DOM Access
```javascript
// ❌ Multiple DOM queries
document.getElementById('title').textContent = "Title";
document.getElementById('title').style.color = "red";

// ✅ Cache DOM reference
const title = document.getElementById('title');
title.textContent = "Title";
title.style.color = "red";
```

### Use Event Delegation
```javascript
// ❌ Multiple listeners
items.forEach(item => {
    item.addEventListener('click', handler);
});

// ✅ Single listener
container.addEventListener('click', (e) => {
    if (e.target.matches('.item')) {
        handler(e);
    }
});
```

### Debounce/Throttle Events
```javascript
// ✅ Debounce search input
const debouncedSearch = debounce(search, 300);
input.addEventListener('input', debouncedSearch);

// ✅ Throttle scroll handler
const throttledScroll = throttle(handleScroll, 100);
window.addEventListener('scroll', throttledScroll);
```

## Testing

```javascript
// ✅ Write testable code
// Bad: hard to test
function process() {
    const data = fetch(url);
    const result = transform(data);
    saveToDb(result);
}

// Good: dependency injection
function process(fetcher, transformer, saver) {
    const data = fetcher();
    const result = transformer(data);
    saver(result);
}

// ✅ Pure functions are easier to test
function add(a, b) {
    return a + b; // No side effects
}
```

## Accessibility

```javascript
// ✅ Keyboard navigation
button.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        handleClick();
    }
});

// ✅ ARIA attributes
const button = document.createElement('button');
button.setAttribute('aria-label', 'Close dialog');
button.setAttribute('aria-pressed', 'false');

// ✅ Focus management
dialog.addEventListener('open', () => {
    firstInput.focus();
});
```

## Code Review Checklist

- [ ] Code follows style guide
- [ ] Functions are small and focused
- [ ] Variables have descriptive names
- [ ] No magic numbers
- [ ] Error handling implemented
- [ ] Code is documented
- [ ] Security concerns addressed
- [ ] Performance optimized
- [ ] Tests written
- [ ] Accessibility considered

## Interview Questions

**Q: What is 'use strict'?**
A: Directive that enables strict mode, catching common errors and making code more secure.

**Q: Why avoid global variables?**
A: They pollute global namespace, can be accidentally overwritten, and make code hard to maintain.

**Q: What are magic numbers?**
A: Unexplained numeric literals. Use named constants instead for clarity.

**Q: Why use const by default?**
A: Prevents accidental reassignment, makes code more predictable and easier to understand.

**Q: What is code smell?**
A: Code that works but indicates deeper problems (long functions, duplicate code, etc.).

[See Design Patterns](../02-Design-Patterns/README.md) | [Continue to Testing](../04-Testing/README.md)
