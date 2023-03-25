// Styling DOM properties and adding / removing CSS classes are common tasks when working with JavaScript and the DOM.

// To style DOM properties using JavaScript, you can use the style property of an element.This property allows you to directly access and manipulate the inline styles of an element.For example, to change the background color of an element, you can use the following code:


// const element = document.getElementById('myElement');
// element.style.backgroundColor = 'red';

// To add a CSS class to an element using JavaScript, you can use the classList property of an element.This property provides several methods for adding, removing, and toggling classes on an element.For example, to add a class called "active" to an element, you can use the following code:


// const element = document.getElementById('myElement');
// element.classList.add('active');

// To remove a class, you can use the remove method:


// const element = document.getElementById('myElement');
// element.classList.remove('active');

// You can also toggle a class on and off using the toggle method:


// const element = document.getElementById('myElement');
// element.classList.toggle('active');

// These methods are very useful for dynamically changing the styles and classes of elements in response to user interactions or other events.By using JavaScript to manipulate the DOM, you can create dynamic and interactive web pages.