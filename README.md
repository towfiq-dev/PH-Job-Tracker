### Answers to Questions

**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
* **getElementById:** This method finds a single element using its unique ID. It is the fastest way to access an element.
* **getElementsByClassName:** This method finds all elements that have a specific class name and returns them in an HTMLCollection (list).
* **querySelector:** This is a flexible method that uses CSS selectors to find the first matching element.
* **querySelectorAll:** This works like querySelector but finds all matching elements and returns them in a NodeList.

**2. How do you create and insert a new element into the DOM?**
To add a new element, you first create it using `document.createElement('tagName')`. After creating it, you insert it into the webpage using methods like `appendChild()` to add it at the end of a parent, or `prepend()` to add it at the beginning.

**3. What is Event Bubbling? And how does it work?**
Event Bubbling is a process where an event starts from the specific element that was clicked (the child) and then propagates or "bubbles up" to its parent and higher-level elements. For example, if you click a button inside a div, the click event triggers on the button first, then on the div.



**4. What is Event Delegation in JavaScript? Why is it useful?**
Event Delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to multiple child elements. It is useful because it saves memory and allows the parent to handle events for children that are added to the DOM dynamically later.

**5. What is the difference between preventDefault() and stopPropagation() methods?**
* **preventDefault():** This method stops the default behavior of an element, such as stopping a link from opening or a form from submitting.
* **stopPropagation():** This method stops the event from bubbling up to parent elements, ensuring the event stays only on the element where it was triggered.