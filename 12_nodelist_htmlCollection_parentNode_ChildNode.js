// NodeList and HTMLCollection are both collection types in JavaScript that represent a list of nodes or elements in the DOM.

// A NodeList is a collection of nodes that match a specific selector or criteria.For example, if you want to get a list of all the p elements in a document, you can use the querySelectorAll method:


// const paragraphs = document.querySelectorAll('p');

// An HTMLCollection is a collection of elements that match a specific tag name.For example, if you want to get a list of all the div elements in a document, you can use the getElementsByTagName method:


// const divs = document.getElementsByTagName('div');

// Both NodeList and HTMLCollection are array - like objects, which means you can access individual nodes or elements using an index:


// const firstParagraph = paragraphs[0];
// const secondDiv = divs[1];

// parentNode is a property that allows you to get the parent node of an element.For example, if you have an img element and you want to get its parent div element, you can use the following code:


// const imgElement = document.getElementById('myImage');
// const parentElement = imgElement.parentNode;


// childNodes is a property that allows you to get a list of all the child nodes of an element.This includes both elements and text nodes.For example, if you have a div element and you want to get a list of all its child nodes, you can use the following code:


// const divElement = document.getElementById('myDiv');
// const childNodes = divElement.childNodes;

// createElement is a method that allows you to create a new element in the DOM.For example, if you want to create a new div element and append it to the document body, you can use the following code:


// const newDiv = document.createElement('div');
// document.body.appendChild(newDiv);

// These methods and properties are very useful for manipulating the structure and content of the DOM using JavaScript.By using these methods, you can create dynamic and interactive web pages.