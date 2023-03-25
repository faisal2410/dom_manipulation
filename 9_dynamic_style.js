// Dynamic style, getAttribute, setAttribute, innerText, and innerHTML are all JavaScript methods that allow you to manipulate elements in the DOM.

// Dynamic style allows you to change the CSS style of an element directly through JavaScript.You can do this by accessing the style property of an element and setting its CSS properties as key - value pairs.Here's an example:


// const element = document.getElementById('myElement');
// element.style.backgroundColor = 'red';
// This code selects an element with an ID of "myElement" and changes its background color to red.

// getAttribute and setAttribute are methods that allow you to get and set attributes of an element, respectively.You can use them to manipulate any HTML attribute of an element, including custom attributes.Here's an example:


// const element = document.getElementById('myElement');
// const value = element.getAttribute('data-myAttribute');
// element.setAttribute('data-myAttribute', 'newValue');

// This code selects an element with an ID of "myElement" and gets the value of its custom data - myAttribute attribute.It then sets the value of that attribute to "newValue".

// innerText and innerHTML are properties that allow you to get and set the text content and HTML content of an element, respectively.Here's an example:


// const element = document.getElementById('myElement');
// const text = element.innerText;
// element.innerHTML = '<h1>New heading</h1>';

// This code selects an element with an ID of "myElement" and gets its text content using innerText.It then sets the HTML content of that element to a new heading using innerHTML.

//     Overall, these methods are useful for dynamically manipulating elements in the DOM using JavaScript.They can help you create dynamic and interactive web pages.