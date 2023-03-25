// There are several common ways to set event handlers in JavaScript:

// Using addEventListener: This method is the recommended way to set event handlers in JavaScript.It allows you to attach multiple event listeners to the same element and to remove them later if needed.Here is an example:
// 👀
//     < button id = "my-button" > Click me</ >
//         <script>
//             const button = document.getElementById('my-button');
//             button.addEventListener('click', function() {
//                 alert('Button clicked!');
//   });
//         </script>


// Using inline event handlers: This method involves adding the event handler directly to the HTML element using the on attribute.It's not recommended as it can make your HTML code less readable and harder to maintain. Here is an example:
// 👀
//     < button id = "my-button" onclick = "alert('Button clicked!')" > Click me</ >

//         Using the onclick property: This method involves setting the event handler as a property of the HTML element.It's not recommended as it can overwrite any existing event handlers and make your code less modular. Here is an example:
// 👀
//     < button id = "my-button" > Click me</ >
//         <script>
//             const button = document.getElementById('my-button');
//             button.onclick = function() {
//                 alert('Button clicked!');
//   };
//         </script>

// Using the on[event] syntax: This method involves setting the event handler as a property of the HTML element using the on syntax followed by the event name.It's similar to the onclick property but allows you to set handlers for other events such as onmouseover or onsubmit. Here is an example:

// 👀
//     < button id = "my-button" > Click me</ >
//         <script>
//             const button = document.getElementById('my-button');
//             button.onmouseover = function() {
//                 alert('Mouse over!');
//   };
//         </script>

// These are the most common ways to set event handlers in JavaScript.The recommended approach is to use addEventListener as it offers greater flexibility and modularity.