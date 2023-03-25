// There are several ways to use addEventListener to attach event listeners to a button in JavaScript:

// Using an anonymous function:
// 👀
//     < button id = "my-button" > Click me</ >
//         <script>
//             const button = document.getElementById('my-button');
//             button.addEventListener('click', function() {
//                 alert('Button clicked!');
//   });
//         </script>

// This code attaches a click event listener to the button with the id attribute of my - button.When the button is clicked, an anonymous function is executed that displays an alert.

// Using a named function:
// 👀

//     < button id = "my-button" > Click me</ >
//         <script>
//             const button = document.getElementById('my-button');

//             function handleClick() {
//                 alert('Button clicked!');
//   }

//             button.addEventListener('click', handleClick);
//         </script>


// This code defines a named function called handleClick that displays an alert.It then attaches a click event listener to the button that calls the handleClick function when the button is clicked.

// Using the bind method:

// 👀

//     < button id = "my-button" > Click me</ >
//         <script>
//             const button = document.getElementById('my-button');

//             function handleClick(message) {
//                 alert(message);
//   }

//             button.addEventListener('click', handleClick.bind(null, 'Button clicked!'));
//         </script>


// This code defines a named function called handleClick that displays a message passed as an argument.It then attaches a click event listener to the button that calls the handleClick function with the message "Button clicked!" using the bind method.

// Using an arrow function:

// 👀
//     < button id = "my-button" > Click me</ >
//         <script>
//             const button = document.getElementById('my-button');
//   button.addEventListener('click', () => {
//                 alert('Button clicked!');
//   });
//         </script>

// This code attaches a click event listener to the button using an arrow function that displays an alert when the button is clicked.

// These are just a few examples of the different ways you can use addEventListener to attach event listeners to a button.The method you choose will depend on your specific use case and coding style.