// DOM stands for Document Object Model.It is a programming interface for web documents that provides a way for programs to interact with the content and structure of a web page.

// In simpler terms, the DOM is a tree - like structure that represents the HTML or XML elements of a webpage.Each element of the webpage is represented as a node in the tree.The nodes can have child nodes and parent nodes, and can be accessed and manipulated using programming languages like JavaScript.

// One common use of the DOM is to dynamically update the content of a webpage without having to reload the entire page.For example, you can use JavaScript to change the text of a paragraph element or add a new element to the page.

// To access and manipulate the DOM using JavaScript, you can use the Document object which represents the entire webpage.You can access specific elements on the webpage by using their ID or class names, or by navigating through the tree structure of the DOM.



//     Here's an example of how to access an element by its ID and change its text using JavaScript:


//     < !--HTML code-- >
//         <p id="my-paragraph">Hello, world!</p>

// JavaScript code

// var myParagraph = document.getElementById("my-paragraph");
// myParagraph.innerHTML = "Hello, DOM!";



// In this example, we use the getElementById method to access the paragraph element with the ID "my-paragraph".Then we use the innerHTML property to change the text inside the element to "Hello, DOM!".


//👀 For details study


// The DOM is not limited to just HTML elements - it can also represent other parts of a webpage, such as scripts, stylesheets, and even the browser window itself.In fact, the DOM can be thought of as a hierarchy of objects that represent every aspect of a web page that can be interacted with.

// There are many different ways to interact with the DOM using JavaScript.Here are a few examples:

// Changing element styles: You can change the CSS styles of an element by accessing its style object.For example, to change the background color of a div element to red, you could use the following code:



// var myDiv = document.getElementById("my-div");
// myDiv.style.backgroundColor = "red";


// Creating new elements: You can create new elements and add them to the DOM using the createElement and appendChild methods.For example, to add a new paragraph element to a div element, you could use the following code:

// var myDiv = document.getElementById("my-div");
// var newParagraph = document.createElement("p");
// newParagraph.innerHTML = "This is a new paragraph.";
// myDiv.appendChild(newParagraph);


// Responding to user input: You can use event listeners to respond to user input, such as clicks or key presses.For example, to change the text of a button element when it is clicked, you could use the following code:

// var myButton = document.getElementById("my-button");
// myButton.addEventListener("click", function () {
//     myButton.innerHTML = "Button clicked!";
// });

// The DOM is a hierarchical structure, which means that each element on a webpage has a parent element and can also have child elements.This tree - like structure makes it easy to navigate and manipulate the elements on a webpage.

// One important concept in the DOM is the concept of node types.There are several different types of nodes in the DOM, including:

// Element nodes: These represent the HTML or XML elements on a webpage, such as <p>, <div>, and <img>.

//     Text nodes: These represent the text content of an element, such as the text inside a paragraph or header tag.

//     Attribute nodes: These represent the attributes of an HTML element, such as the src attribute of an image tag.

//     Comment nodes: These represent comments in the HTML code, which are ignored by the browser.

//     You can access and manipulate these nodes using JavaScript. For example, to access the text content of a paragraph element, you could use the following code:


//     var myParagraph = document.getElementById("my-paragraph");
//     var paragraphText = myParagraph.textContent;


//     In this example, we use the getElementById method to access the paragraph element with the ID "my-paragraph". Then we use the textContent property to access the text content of the element.

//     Another important concept in the DOM is the concept of the "document object". This represents the entire webpage, and can be used to access and manipulate any element on the page. For example, to change the title of the webpage, you could use the following code:

//     document.title = "New Title";
//     In this example, we simply set the title property of the document object to the new title text.



// In addition to accessing and manipulating elements and their properties, the DOM also allows you to add and remove elements dynamically.This can be useful for creating interactive web pages that respond to user input.

// To add a new element to the DOM, you can use the createElement method to create a new element object, and the appendChild method to add it as a child of an existing element.For example, to add a new paragraph element to a div element, you could use the following code:


// var myDiv = document.getElementById("my-div");
// var newParagraph = document.createElement("p");
// newParagraph.innerHTML = "This is a new paragraph.";
// myDiv.appendChild(newParagraph);


// In this example, we use the getElementById method to access the div element with the ID "my-div".Then we use the createElement method to create a new paragraph element, set its content using the innerHTML property, and add it to the div element using the appendChild method.

// To remove an element from the DOM, you can use the removeChild method of the parent element.For example, to remove a paragraph element from a div element, you could use the following code:


// var myDiv = document.getElementById("my-div");
// var myParagraph = document.getElementById("my-paragraph");
// myDiv.removeChild(myParagraph);


// In this example, we use the getElementById method to access both the div element and the paragraph element we want to remove.Then we use the removeChild method of the div element to remove the paragraph element from the DOM.



// The DOM is also useful for handling events, such as user clicks or keyboard input.You can use JavaScript to register event listeners on elements, which will then trigger a function when the event occurs.

// To register an event listener, you can use the addEventListener method of an element object.This method takes two arguments: the type of the event(such as "click" or "keydown"), and the function to be called when the event occurs.For example, to register a click event listener on a button element, you could use the following code:


// var myButton = document.getElementById("my-button");
// myButton.addEventListener("click", function () {
//     alert("Button clicked!");
// });


// In this example, we use the getElementById method to access the button element with the ID "my-button".Then we use the addEventListener method to register a click event listener, which triggers an anonymous function that displays an alert message.

// You can also use the removeEventListener method to remove an event listener that has been registered.This method takes the same arguments as addEventListener: the type of the event and the function to be removed.For example, to remove a click event listener on a button element, you could use the following code:


// var myButton = document.getElementById("my-button");
// var myFunction = function () {
//     alert("Button clicked!");
// };
// myButton.addEventListener("click", myFunction);

// Later on...
// myButton.removeEventListener("click", myFunction);


// In this example, we register a click event listener on the button element using a named function. Later on, we use the removeEventListener method to remove the same function from the button element's event listeners.


// The DOM is not just limited to accessing and manipulating elements in the current web page, it can also be used to interact with other resources, such as external files or APIs.

// For example, you can use the DOM to load external JavaScript files into your web page by creating a new script element, setting its src attribute to the URL of the external file, and adding it to the head or body element of your page.For example:


// var script = document.createElement("script");
// script.src = "https://example.com/my-script.js";
// document.head.appendChild(script);

// In this example, we create a new script element and set its src attribute to the URL of an external JavaScript file.Then we use the appendChild method to add the script element to the head element of our web page.

// You can also use the DOM to make HTTP requests to external APIs using the XMLHttpRequest object or the fetch API.For example:


// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://example.com/my-api");
// xhr.onload = function () {
//     console.log(xhr.responseText);
// };
// xhr.send();


// In this example, we create a new XMLHttpRequest object and use its open method to specify the HTTP method and URL of an external API.We then set the onload property of the object to a function that will be called when the API response is received.Finally, we use the send method to send the HTTP request.

//     Alternatively, you can use the fetch API, which returns a Promise that resolves to the API response.For example:


// fetch("https://example.com/my-api")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data);
//     });
// In this example, we use the fetch function to make an HTTP request to an external API.We then chain two then methods: the first one converts the API response to JSON format, and the second one logs the resulting data to the console.