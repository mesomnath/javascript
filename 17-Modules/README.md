# JavaScript Modules

## 📌 Code Organization with Modules

Modules help organize code into separate files, improving maintainability and reusability.

## Export

### Named Exports
```javascript
// math.js
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}

// Or export all at once
const PI = 3.14159;
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }

export { PI, add, subtract };
```

### Default Export
```javascript
// calculator.js
export default class Calculator {
    add(a, b) {
        return a + b;
    }
}

// Or
class Calculator { }
export default Calculator;

// Or anonymous
export default function(a, b) {
    return a + b;
}
```

## Import

### Named Imports
```javascript
// Import specific exports
import { add, subtract } from './math.js';

// Import with alias
import { add as addition } from './math.js';

// Import all as namespace
import * as math from './math.js';
console.log(math.add(5, 3));
```

### Default Import
```javascript
// Import default export (any name)
import Calculator from './calculator.js';
import Calc from './calculator.js'; // Same thing

// Mix default and named
import Calculator, { PI, add } from './module.js';
```

## Dynamic Imports
```javascript
// Load module on demand
async function loadModule() {
    const module = await import('./module.js');
    module.doSomething();
}

// Conditional loading
if (condition) {
    import('./moduleA.js').then(module => {
        module.init();
    });
} else {
    import('./moduleB.js').then(module => {
        module.init();
    });
}
```

## Module Patterns (Pre-ES6)

### Revealing Module Pattern
```javascript
const myModule = (function() {
    // Private
    let privateVar = "secret";
    
    function privateMethod() {
        console.log(privateVar);
    }
    
    // Public
    return {
        publicMethod() {
            privateMethod();
        },
        getPrivateVar() {
            return privateVar;
        }
    };
})();

myModule.publicMethod();
```

### Module Pattern
```javascript
const Calculator = (function() {
    // Private state
    let result = 0;
    
    // Public API
    return {
        add(x) {
            result += x;
            return this;
        },
        subtract(x) {
            result -= x;
            return this;
        },
        getResult() {
            return result;
        }
    };
})();

Calculator.add(5).subtract(2).getResult(); // 3
```

## Best Practices

```javascript
// 1. One module per file
// user.js
export class User { }

// 2. Clear exports at the end
const func1 = () => {};
const func2 = () => {};
export { func1, func2 };

// 3. Use default for main export
// logger.js
export default class Logger { }
export { LogLevel, formatMessage }; // Named for utilities

// 4. Avoid wildcard imports
// ❌ Avoid
import * as utils from './utils.js';

// ✅ Better
import { specific, functions } from './utils.js';

// 5. Group imports
// External libraries first
import React from 'react';
import axios from 'axios';

// Internal modules second
import { API } from './api';
import { utils } from './utils';
```

## Module Resolution

```javascript
// Relative imports
import { func } from './module.js';      // Same directory
import { func } from '../module.js';     // Parent directory
import { func } from './sub/module.js';  // Subdirectory

// Absolute imports (with bundler config)
import { Component } from '@/components/Button';

// npm packages
import React from 'react';
```

## Interview Questions

**Q: What are modules?**
A: Separate files that export/import code, improving organization and reusability.

**Q: Difference between named and default export?**
A: Named: specific names, can have multiple. Default: one per module, any import name.

**Q: Can you have both default and named exports?**
A: Yes. `export default Class` + `export { func1, func2 }`

**Q: What is dynamic import?**
A: Loading modules on-demand using `import()` function (returns Promise).

**Q: What is tree shaking?**
A: Removing unused code from final bundle (works with ES6 modules).

**Q: How did we do modules before ES6?**
A: CommonJS (Node.js), AMD, or module patterns (IIFE).

[See ES6+](../04-ES6-Plus/README.md) | [Continue to Advanced Functions](../06-Advanced-Functions/README.md)
