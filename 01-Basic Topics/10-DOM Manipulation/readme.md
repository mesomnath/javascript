# DOM Manipulation Basics

## Overview

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. JavaScript is the primary language used to manipulate the DOM.

## 1. What is the DOM?

The DOM represents an HTML document as a tree-like structure of nodes. Each HTML element, attribute, and piece of text is a node.

**Example HTML:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1 id="main-title">Welcome</h1>
  <p class="content">This is a paragraph.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</body>
</html>
```

**Simplified DOM Tree:**
```
- document
  - html
    - head
      - title
        - "My Page" (text node)
    - body
      - h1 (id="main-title")
        - "Welcome" (text node)
      - p (class="content")
        - "This is a paragraph." (text node)
      - ul
        - li
          - "Item 1" (text node)
        - li
          - "Item 2" (text node)
```

## 2. Selecting Elements

To manipulate an element, you first need to select it.

### `getElementById()`

Selects a single element by its unique ID.
```javascript
const mainTitle = document.getElementById('main-title');
console.log(mainTitle); // <h1 id="main-title">...</h1>
```

### `getElementsByClassName()`

Selects a collection of elements by their class name. Returns an `HTMLCollection`.
```javascript
const contentParagraphs = document.getElementsByClassName('content');
console.log(contentParagraphs); // HTMLCollection [p.content]

// You must loop through the collection to access individual elements
for (let i = 0; i < contentParagraphs.length; i++) {
    console.log(contentParagraphs[i]);
}
```

### `getElementsByTagName()`

Selects a collection of elements by their tag name. Returns an `HTMLCollection`.
```javascript
const listItems = document.getElementsByTagName('li');
console.log(listItems); // HTMLCollection [li, li]
```

### `querySelector()`

Selects the **first** element that matches a CSS selector. Very powerful and flexible.
```javascript
const firstListItem = document.querySelector('ul li');
const titleById = document.querySelector('#main-title');
const contentByClass = document.querySelector('.content');
```

### `querySelectorAll()`

Selects **all** elements that match a CSS selector. Returns a `NodeList`.
```javascript
const allListItems = document.querySelectorAll('ul li');
console.log(allListItems); // NodeList [li, li]

// NodeLists can be iterated with forEach
allListItems.forEach(item => {
    console.log(item);
});
```

**`HTMLCollection` vs `NodeList`**
- **`HTMLCollection`**: "Live" collection. If you add or remove elements from the DOM, the collection updates automatically. Does not have `forEach`.
- **`NodeList`**: "Static" collection (usually). It's a snapshot. Has a `forEach` method.

## 3. Modifying Element Properties

Once you have an element, you can change its content, style, and attributes.

### Changing Content

#### `textContent`
Gets or sets the text content of an element, ignoring HTML tags.
```javascript
const title = document.getElementById('main-title');
console.log(title.textContent); // "Welcome"
title.textContent = 'Hello, World!'; // Changes the text
```

#### `innerHTML`
Gets or sets the HTML content within an element. **Use with caution**, as it can lead to security risks (XSS) if you insert untrusted user input.
```javascript
const content = document.querySelector('.content');
content.innerHTML = 'This is <strong>important</strong> text.';
```

### Changing Styles

#### `style` property
Allows you to set individual CSS properties.
```javascript
const title = document.getElementById('main-title');
title.style.color = 'blue';
title.style.backgroundColor = 'lightgray'; // Note: CSS properties with hyphens become camelCase (background-color -> backgroundColor)
title.style.fontSize = '24px';
```

#### `className` and `classList`
A better way to manage styles is by adding or removing CSS classes.

**`className`**: Overwrites all existing classes.
```javascript
const content = document.querySelector('.content');
content.className = 'new-class another-class'; // Replaces 'content'
```

**`classList`**: Provides methods to manage classes without overwriting. (Recommended)
```javascript
const content = document.querySelector('.content');
content.classList.add('highlight'); // Adds a class
content.classList.remove('content'); // Removes a class
content.classList.toggle('active'); // Adds 'active' if not present, removes if present
console.log(content.classList.contains('highlight')); // true
```

### Changing Attributes

#### `setAttribute()`, `getAttribute()`, `removeAttribute()`
```javascript
const link = document.createElement('a'); // Create a new link element
link.textContent = 'Go to Google';

// Set attribute
link.setAttribute('href', 'https://www.google.com');
link.setAttribute('target', '_blank');

// Get attribute
const href = link.getAttribute('href');
console.log(href); // "https://www.google.com"

// Remove attribute
link.removeAttribute('target');

// Direct property access for common attributes
link.href = 'https://www.bing.com'; // Also works
```

## 4. Creating and Adding Elements

You can create new elements from scratch and add them to the DOM.

### `createElement()`
Creates a new element node.
```javascript
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a brand new paragraph.';
```

### `appendChild()`
Adds a node as the **last child** of a parent element.
```javascript
const body = document.querySelector('body');
body.appendChild(newParagraph);
```

### `insertBefore(newNode, referenceNode)`
Inserts a new node before a specified existing child node.
```javascript
const ul = document.querySelector('ul');
const firstLi = document.querySelector('li');
const newLi = document.createElement('li');
newLi.textContent = 'Item 0';

ul.insertBefore(newLi, firstLi);
```

### `removeChild()`
Removes a child node from a parent.
```javascript
const ul = document.querySelector('ul');
const secondLi = ul.children[1]; // Select the second li
ul.removeChild(secondLi);
```

### `replaceChild(newChild, oldChild)`
Replaces a child node with a new one.
```javascript
const ul = document.querySelector('ul');
const firstLi = ul.children[0];
const replacementLi = document.createElement('li');
replacementLi.textContent = 'Replaced Item';

ul.replaceChild(replacementLi, firstLi);
```

## 5. Event Handling

Events are actions that happen in the browser, like a user clicking a button or a page finishing loading.

### `addEventListener()`
The modern and recommended way to handle events.

```javascript
const button = document.createElement('button');
button.textContent = 'Click Me';
document.body.appendChild(button);

// Add an event listener
button.addEventListener('click', function() {
    alert('Button was clicked!');
});

// You can add multiple listeners for the same event
button.addEventListener('click', () => {
    console.log('This also runs on click.');
});

// Using a named function
function handleClick() {
    console.log('Handling the click event.');
}
button.addEventListener('click', handleClick);

// To remove a listener, you must use a named function
// button.removeEventListener('click', handleClick);
```

### The `event` Object
When an event occurs, an `event` object is passed to the event handler function. It contains information about the event.
```javascript
button.addEventListener('click', function(event) {
    console.log(event); // The event object
    console.log(event.target); // The element that triggered the event (the button)
    console.log(event.type); // The type of event ('click')
    
    // Prevent default action (e.g., a form submitting)
    // event.preventDefault(); 
});
```

### Common Events
- `click`: User clicks an element.
- `mouseover` / `mouseout`: Mouse pointer enters/leaves an element.
- `keydown` / `keyup`: User presses/releases a key.
- `submit`: A form is submitted.
- `load`: The page and its resources have finished loading.
- `DOMContentLoaded`: The HTML has been loaded and parsed, without waiting for stylesheets, images, etc. (Often a better choice than `load`).

## 6. Practical Examples

### Example 1: Simple To-Do List

**HTML:**
```html
<input id="todo-input" type="text" placeholder="Add a new task">
<button id="add-btn">Add</button>
<ul id="todo-list"></ul>
```

**JavaScript:**
```javascript
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const list = document.getElementById('todo-list');

    addButton.addEventListener('click', () => {
        const taskText = input.value.trim();

        if (taskText !== '') {
            // 1. Create a new list item
            const newLi = document.createElement('li');
            newLi.textContent = taskText;

            // 2. Create a delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.style.marginLeft = '10px';
            
            deleteBtn.addEventListener('click', () => {
                list.removeChild(newLi);
            });

            // 3. Add the delete button to the list item
            newLi.appendChild(deleteBtn);

            // 4. Add the new list item to the list
            list.appendChild(newLi);

            // 5. Clear the input field
            input.value = '';
        }
    });
});
```

### Example 2: Dark Mode Toggle

**HTML:**
```html
<button id="theme-toggle">Toggle Dark Mode</button>
<p>Some content on the page.</p>
```

**CSS:**
```css
body.dark-mode {
    background-color: #333;
    color: #fff;
}
```

**JavaScript:**
```javascript
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
```

### Example 3: Simple Form Validation

**HTML:**
```html
<form id="signup-form">
  <input id="username" type="text" placeholder="Username">
  <p id="username-error" style="color: red; display: none;"></p>
  <button type="submit">Sign Up</button>
</form>
```

**JavaScript:**
```javascript
const form = document.getElementById('signup-form');
const usernameInput = document.getElementById('username');
const errorDisplay = document.getElementById('username-error');

form.addEventListener('submit', (event) => {
    // Prevent the form from actually submitting
    event.preventDefault();

    const username = usernameInput.value;

    if (username.length < 5) {
        errorDisplay.textContent = 'Username must be at least 5 characters long.';
        errorDisplay.style.display = 'block';
    } else {
        errorDisplay.style.display = 'none';
        console.log('Form submitted with username:', username);
        // Here you would typically send the data to a server
    }
});
```

## Common Mistakes to Avoid

1. **Running JS before the DOM is ready**: Always wrap your code in a `DOMContentLoaded` listener or place your `<script>` tag at the end of the `<body>`.
2. **Modifying a live `HTMLCollection` while looping**: This can lead to infinite loops or skipped elements. Convert it to a static array first if needed (`Array.from(collection)`).
3. **Using `innerHTML` with user input**: This is a major security risk (XSS). Use `textContent` whenever you're inserting text.
4. **Forgetting `event.preventDefault()`**: Especially in form submissions, this can cause the page to reload unexpectedly.
5. **Not handling empty states**: Forgetting to check if an element was actually found (`getElementById` can return `null`).

## Summary

| Action | Method/Property | Description |
|--------|-----------------|-------------|
| Select One | `getElementById`, `querySelector` | Finds a single element. |
| Select Many | `getElementsByClassName`, `getElementsByTagName`, `querySelectorAll` | Finds a collection of elements. |
| Change Content | `textContent`, `innerHTML` | Modifies the text or HTML inside an element. |
| Change Style | `element.style`, `element.classList` | Modifies CSS styles or classes. |
| Change Attributes | `setAttribute`, `getAttribute` | Manages HTML attributes. |
| Create Element | `createElement` | Creates a new element node. |
| Add Element | `appendChild`, `insertBefore` | Inserts an element into the DOM. |
| Remove Element | `removeChild` | Removes an element from the DOM. |
| Handle Events | `addEventListener` | Responds to user actions or browser events. |

DOM manipulation is the bridge between your JavaScript logic and what the user sees and interacts with on the web page.