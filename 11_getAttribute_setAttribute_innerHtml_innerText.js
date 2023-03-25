// getAttribute, setAttribute, innerText, and innerHTML are all methods in JavaScript that allow you to manipulate elements in the DOM.

// getAttribute is a method that allows you to retrieve the value of a specific attribute on an element.For example, if you want to get the value of the src attribute on an img element, you can use the following code:


// const imgElement = document.getElementById('myImage');
// const srcValue = imgElement.getAttribute('src');


// setAttribute is a method that allows you to set the value of a specific attribute on an element.For example, if you want to set the src attribute on an img element, you can use the following code:


// const imgElement = document.getElementById('myImage');
// imgElement.setAttribute('src', 'new_image.png');


// innerText is a property that allows you to get or set the text content of an element.For example, if you want to get the text content of a div element, you can use the following code:


// const divElement = document.getElementById('myDiv');
// const textContent = divElement.innerText;

// And if you want to set the text content of the same div element, you can use the following code:


// const divElement = document.getElementById('myDiv');
// divElement.innerText = 'New text content';

// innerHTML is a property that allows you to get or set the HTML content of an element.This property is very powerful, as it allows you to manipulate the structure and content of an element's children. For example, if you want to get the HTML content of a div element, you can use the following code:


// const divElement = document.getElementById('myDiv');
// const htmlContent = divElement.innerHTML;

// And if you want to set the HTML content of the same div element, you can use the following code:


// const divElement = document.getElementById('myDiv');
// divElement.innerHTML = '<p>New HTML content</p>';

// These methods are very useful for dynamically manipulating elements in the DOM using JavaScript.They can help you create dynamic and interactive web pages.