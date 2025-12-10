# Modules in JavaScript

## Overview

As applications grow larger, it becomes essential to organize code into smaller, reusable, and manageable pieces. **Modules** allow you to split your code across multiple files. Each file is a module, and you can explicitly choose which variables, functions, or classes to expose to other modules (**export**) and which modules to use in the current file (**import**).

Using modules provides several key benefits:
-   **Organization**: Keeps related code together.
-   **Reusability**: Write code once and reuse it in multiple places.
-   **Maintainability**: Makes it easier to find and fix bugs.
-   **Encapsulation**: Prevents polluting the global scope. Variables declared in a module are local to that module by default.

JavaScript has evolved its module systems over time, but the modern standard is **ES Modules (ESM)**, introduced in ES6.

---

## 1. ES Modules (ESM)

ES Modules are the built-in, standardized module system in JavaScript. They are supported by all modern browsers and Node.js. To use ES Modules in a browser, you must add `type="module"` to your `<script>` tag.

```html
<!-- The main entry point for your application -->
<script type="module" src="main.js"></script>
```

### a) `export` - Making Code Available

There are two types of exports: **named exports** and **default exports**. A module can have multiple named exports but only one default export.

#### Named Exports

Used to export multiple values from a module.

```javascript
// 📁 lib/math.js

// Exporting as you declare
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

// Exporting separately at the end
function subtract(a, b) {
    return a - b;
}
const E = 2.718;

export { subtract, E };
```

#### Default Export

Used to export a single primary value from a module. This is often a class or a main function.

```javascript
// 📁 lib/User.js

export default class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
```

You can also combine default and named exports in the same module.

```javascript
// 📁 lib/utils.js

export function log(message) {
    console.log(message);
}

export const version = "1.0";

export default function mainFunction() {
    console.log("This is the default function.");
}
```

### b) `import` - Using Exported Code

You use the `import` statement to bring exported code into another module.

#### Importing Named Exports

You import named exports using curly braces `{}`. The names inside the braces must match the exported names.

```javascript
// 📁 main.js

// Import specific named exports
import { PI, add } from './lib/math.js';

console.log(PI); // 3.14159
console.log(add(5, 10)); // 15

// You can rename imports using the `as` keyword
import { subtract as minus } from './lib/math.js';
console.log(minus(10, 3)); // 7

// Import everything from a module as a single object
import * as math from './lib/math.js';
console.log(math.PI);
console.log(math.add(2, 3));
```

#### Importing a Default Export

You import a default export without curly braces. You can give it any name you want.

```javascript
// 📁 main.js

// Import the default export and name it `User`
import User from './lib/User.js';

const user = new User("Alice");
user.greet(); // "Hello, my name is Alice."
```

#### Importing Both Default and Named Exports

```javascript
// 📁 main.js

import main, { log, version } from './lib/utils.js';

log("Starting app...");
console.log(`Version: ${version}`);
main();
```

### Important Characteristics of ES Modules

-   **Strict Mode**: Code in ES modules automatically runs in strict mode.
-   **Scoped**: Variables and functions are scoped to the module and are not added to the global scope.
-   **Loaded Once**: Modules are fetched and executed only once, even if they are imported multiple times.
-   **Static**: `import` and `export` statements must be at the top level of the module. You cannot have them inside loops or conditional statements. This allows JavaScript engines to analyze the module structure before execution.

---

## 2. CommonJS (CJS) - The Legacy System in Node.js

Before ES Modules were standardized, Node.js developed its own module system called **CommonJS**. It is still widely used in the Node.js ecosystem.

-   **`require()`**: The function used to import a module.
-   **`module.exports`**: An object that contains everything to be exported from the module.

### CommonJS Example

```javascript
// 📁 lib/math-cjs.js

const PI = 3.14159;

function add(a, b) {
    return a + b;
}

// Exporting values by attaching them to the `module.exports` object
module.exports.PI = PI;
module.exports.add = add;

// Or, you can overwrite the entire `module.exports` object
// module.exports = {
//     PI: PI,
//     add: add
// };
```

```javascript
// 📁 main-cjs.js

// Import the module using require()
const math = require('./lib/math-cjs.js');

console.log(math.PI);
console.log(math.add(5, 10));
```

### Interoperability between ESM and CJS

Modern versions of Node.js support both ES Modules and CommonJS.
-   You can `import` a CommonJS module from an ES Module.
-   You generally cannot `require()` an ES Module from a CommonJS module (though there are workarounds with dynamic `import()`).

To enable ES Modules in a Node.js project, you can either:
1.  Name your files with the `.mjs` extension.
2.  Add `"type": "module"` to your `package.json` file.

---

## 3. Dynamic `import()`

While static `import` is preferred for its performance benefits, there are cases where you might need to load a module conditionally or on-demand. The dynamic `import()` function allows you to do this.

It returns a **Promise** that resolves with the module object.

```javascript
// 📁 main.js

const themeSwitcher = document.getElementById('theme-switcher');

themeSwitcher.addEventListener('click', async () => {
    // Load the theme module only when the button is clicked
    try {
        const { applyTheme } = await import('./themes.js');
        applyTheme('dark');
        console.log("Dark theme applied!");
    } catch (error) {
        console.error("Failed to load the theme module:", error);
    }
});
```

This is useful for:
-   **Code Splitting**: Loading code only when it's needed, which can improve initial page load times.
-   Loading modules based on user actions or other conditions.

## Summary

| Feature | ES Modules (ESM) | CommonJS (CJS) |
| :--- | :--- | :--- |
| **Syntax** | `import` / `export` | `require()` / `module.exports` |
| **Loading** | Asynchronous (non-blocking) | Synchronous (blocking) |
| **Environment** | Modern browsers, Node.js | Primarily Node.js (legacy) |
| **Binding** | Live, read-only views of exported values | Copies of exported values |
| **Analysis** | Static (analyzed before execution) | Dynamic (analyzed at runtime) |

**Best Practice**: Use **ES Modules (ESM)** for all new JavaScript projects, both for the browser and for Node.js. It is the modern standard and offers better performance and tooling support.