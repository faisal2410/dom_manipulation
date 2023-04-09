// Example 1: Changing text content

// <!-- HTML -->
// <div id="myDiv">Hello, world!</div>

// const myDiv = document.getElementById('myDiv');
// myDiv.textContent = 'Goodbye, world!';
// Explanation: This example demonstrates how to change the text content of an HTML element using JavaScript. We first select the element using its ID using document.getElementById(), and then set its textContent property to the new value.

// Example 2: Changing CSS styles
// html
// Copy code
// <!-- HTML -->
// <div id="myDiv" style="background-color: red; width: 100px; height: 100px;"></div>
// javascript
// Copy code
// // JavaScript
// const myDiv = document.getElementById('myDiv');
// myDiv.style.backgroundColor = 'blue';
// myDiv.style.width = '200px';
// myDiv.style.height = '200px';
// Explanation: This example demonstrates how to change CSS styles of an HTML element using JavaScript. We first select the element using its ID using document.getElementById(), and then set its style property to modify its CSS properties.

// Example 3: Adding and removing classes
// html
// Copy code
// <!-- HTML -->
// <div id="myDiv" class="box"></div>
// css
// Copy code
// /* CSS */
// .box {
//   background-color: red;
//   width: 100px;
//   height: 100px;
// }
// javascript
// Copy code
// // JavaScript
// const myDiv = document.getElementById('myDiv');
// myDiv.classList.add('big-box');
// myDiv.classList.remove('box');
// Explanation: This example demonstrates how to add and remove classes to an HTML element using JavaScript. We first select the element using its ID using document.getElementById(), and then use the classList property to add or remove classes.

// I hope these examples help illustrate the concepts you're teaching in your tutorial. Good luck with your writing!



// Example 4: Creating and Appending Elements
// html
// Copy code
// <!-- HTML -->
// <div id="parent">
// </div>
// javascript
// Copy code
// // JavaScript
// const parent = document.getElementById('parent');
// const child = document.createElement('div');
// child.textContent = 'This is a child element';
// parent.appendChild(child);
// Explanation: This example demonstrates how to create and append elements to an existing HTML element using JavaScript. We first select the parent element using its ID using document.getElementById(), then create a new child element using document.createElement(). Finally, we add text content to the child element using textContent and append it to the parent element using appendChild().

// Example 5: Removing Elements
// html
// Copy code
// <!-- HTML -->
// <div id="parent">
//   <div id="child">This is a child element</div>
// </div>
// javascript
// Copy code
// // JavaScript
// const child = document.getElementById('child');
// child.parentNode.removeChild(child);
// Explanation: This example demonstrates how to remove an existing HTML element using JavaScript. We first select the child element using its ID using document.getElementById(), then access its parent element using parentNode. Finally, we remove the child element from the parent element using removeChild().

// Example 6: Event Listeners
// html
// Copy code
// <!-- HTML -->
// <button id="myButton">Click me!</button>
// javascript
// Copy code
// // JavaScript
// const button = document.getElementById('myButton');
// button.addEventListener('click', () => {
//   alert('Button clicked!');
// });
// Explanation: This example demonstrates how to add an event listener to an HTML element using JavaScript. We first select the button element using its ID using document.getElementById(), then add an event listener to it using addEventListener(). In this case, we listen for the click event and display an alert when the button is clicked.

// I hope these additional examples are helpful in illustrating the concepts of DOM manipulation using JavaScript. Let me know if you have any questions or need more help!




