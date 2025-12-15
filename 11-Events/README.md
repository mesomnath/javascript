# Events in JavaScript

## 📌 Handling User Interactions

Events are actions that happen in the browser that JavaScript can respond to.

## Event Listeners
- `addEventListener()`
- `removeEventListener()`
- Event types: click, mouseover, keydown, submit, etc.

## Common Events
- **Mouse**: click, dblclick, mouseenter, mouseleave
- **Keyboard**: keydown, keyup, keypress
- **Form**: submit, change, focus, blur
- **Window**: load, resize, scroll

## Event Object
- `event.target` - element that triggered event
- `event.preventDefault()` - prevent default behavior
- `event.stopPropagation()` - stop bubbling

## Event Propagation
- **Bubbling**: event travels from target to root
- **Capturing**: event travels from root to target
- Event delegation pattern

## Event Delegation
- Attach listener to parent
- Handle events from multiple children
- Efficient for dynamic elements

## Practical Examples
```javascript
// Click event
button.addEventListener('click', () => {
    console.log('Clicked!');
});

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form data
});

// Event delegation
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
```

## Interview Questions

**Q: What is event bubbling?**
A: When an event propagates from target element up through its ancestors.

**Q: What is event.preventDefault()?**
A: Prevents the default action associated with the event.

**Q: What is event delegation?**
A: Technique of using a single event listener on a parent to handle events from children.

[See DOM](../04-DOM/README.md) | [Continue to Error Handling](../06-Error-Handling/README.md)
