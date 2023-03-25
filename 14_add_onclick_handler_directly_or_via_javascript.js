// In HTML, you can add an onclick handler directly to an element using the onclick attribute, like this:

// 👀
//     < button onclick = "alert('Hello, world!')" > Click me</ >

//         This will create a button element with a click event handler that displays an alert when the button is clicked.However, it's generally considered better practice to attach event listeners using JavaScript rather than inline event handlers.

// To attach an event listener using JavaScript, you can use the addEventListener method, like this:

// 👀
//     < button id = "my-button" > Click me</ >
//         <script>
//             const button = document.getElementById('my-button');
//             button.addEventListener('click', function() {
//                 alert('Hello, world!');
//   });
//         </script>


// This code creates a button element with an id attribute of my - button, then uses JavaScript to attach a click event listener to the button.When the button is clicked, the event listener function displays an alert.

// Attaching event listeners using JavaScript has several benefits over using inline event handlers.It separates your JavaScript code from your HTML markup, making it easier to maintain and update.It also allows you to attach multiple event listeners to the same element, which is not possible with inline event handlers.Finally, it makes your code more readable and easier to understand by keeping your event handling code separate from your HTML.