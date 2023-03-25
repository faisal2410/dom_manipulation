// Event delegation is a technique in JavaScript where instead of attaching an event listener to each individual element, you attach a single event listener to a parent element that will handle events on behalf of its child elements.This is possible because of the event bubbling mechanism in the DOM, which means that events triggered on a child element will "bubble up" to the parent element and trigger its event listener as well.

// For example, suppose you have a list of items and you want to add a click event listener to each item.Instead of attaching the event listener to each individual item, you can attach a single event listener to the parent list element and use event delegation to handle clicks on its child items:


//     < ul id = "myList" >
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ >

// const list = document.querySelector('#myList');

// list.addEventListener('click', function (event) {
//     if (event.target.tagName === 'LI') {
//         console.log('Item clicked: ', event.target.textContent);
//     }
// });

// In this example, we attach a click event listener to the ul element, but we only handle clicks on li elements by checking the tagName property of the event target.This way, we can handle clicks on any number of list items without attaching a separate event listener to each one.

// The benefit of using event delegation is that it can improve performance and reduce memory usage, especially for large lists or dynamically generated content.Instead of attaching a separate event listener to each item, you attach a single event listener to the parent element and let it handle events on behalf of its child elements.This can also make your code simpler and more maintainable, as you don't have to worry about attaching and removing event listeners dynamically.