// DOM manipulation is the process of using JavaScript to change the content, style, and structure of a web page by accessing and manipulating its DOM elements.

// Here are some common techniques for DOM manipulation:

// Accessing Elements:
// Before you can manipulate an element, you need to access it using a method like getElementById, getElementsByClassName, or querySelector.For example, to access an element with the ID my - element, you would use the following code:

// var myElement = document.getElementById("my-element");

// Changing Text Content:
// You can change the text content of an element using the textContent property.For example, to change the text content of an element with the ID my - element to "Hello, world!", you would use the following code:

// var myElement = document.getElementById("my-element");
// myElement.textContent = "Hello, world!";

// Changing HTML Content:
// You can change the HTML content of an element using the innerHTML property.For example, to change the HTML content of an element with the ID my - element to an unordered list with two items, you would use the following code:

// var myElement = document.getElementById("my-element");
// myElement.innerHTML = "<ul><li>Item 1</li><li>Item 2</li></ul>";

// Changing Attributes:
// You can change the attributes of an element using the setAttribute method.For example, to change the src attribute of an image element with the ID my - image to a new URL, you would use the following code:

// var myImage = document.getElementById("my-image");
// myImage.setAttribute("src", "new-url.jpg");

// Changing Styles:
// You can change the styles of an element using the style property.For example, to change the background color of an element with the ID my - element to blue, you would use the following code:

// var myElement = document.getElementById("my-element");
// myElement.style.backgroundColor = "blue";

// Adding and Removing Classes:
// You can add and remove classes from an element using the classList property.For example, to add the class my-class to an element with the ID my - element, you would use the following code:

// var myElement = document.getElementById("my-element");
// myElement.classList.add("my-class");

// To remove a class, you would use the remove method:

// var myElement = document.getElementById("my-element");
// myElement.classList.remove("my-class");


// Creating Elements:
// You can create new elements using the createElement method, and then add them to the DOM using methods like appendChild or insertBefore.For example, to create a new paragraph element with some text content and add it to the end of a div element with the ID my - div, you would use the following code:

// var myDiv = document.getElementById("my-div");
// var newParagraph = document.createElement("p");
// newParagraph.textContent = "This is a new paragraph!";
// myDiv.appendChild(newParagraph);


// Removing Elements:
// You can remove an element from the DOM using the removeChild method.For example, to remove an element with the ID my - element from its parent element, you would use the following code:

// var myElement = document.getElementById("my-element");
// myElement.parentNode.removeChild(myElement);

// Event Listeners:
// You can add event listeners to elements to execute JavaScript code in response to user interactions like clicks or key presses.For example, to execute some code when a button element with the ID my - button is clicked, you would use the following code:

// var myButton = document.getElementById("my-button");
// myButton.addEventListener("click", function () {
// Code to execute when the button is clicked
// });

// Traversing the DOM:
// You can traverse the DOM tree to access elements based on their relationship to other elements.For example, to access the first child element of an element with the ID my - element, you would use the following code:

// var myElement = document.getElementById("my-element");
// var firstChild = myElement.firstElementChild;

// Animations:
// You can use DOM manipulation techniques in conjunction with CSS transitions or JavaScript animation libraries to create animations on your web page.For example, to animate the opacity of an element with the ID my - element, you could use the following CSS:

// #my - element {
//     transition: opacity 1s ease -in -out;
// }
// And then use JavaScript to change the opacity of the element:


// var myElement = document.getElementById("my-element");
// myElement.style.opacity = 0.5;