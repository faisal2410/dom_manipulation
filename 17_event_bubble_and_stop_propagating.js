// Event bubbling is a mechanism in which an event that occurs on a particular element will also trigger any corresponding event handlers on its parent elements in the DOM hierarchy.When an event occurs on an element, it "bubbles up" the DOM tree, triggering any event listeners that have been attached to its parent elements along the way.

// For example, if you have a button inside a div, and both the button and the div have click event listeners, clicking the button will trigger both the button's event listener and the div's event listener.This is because the button's click event "bubbles up" to the div, triggering its event listener as well.

// On the other hand, event.stopPropagation() is a method that can be called on an event object in JavaScript to prevent the event from propagating further up the DOM tree.When this method is called inside an event listener function, it stops the event from triggering any event listeners on parent elements.

// For example, consider the same button inside a div scenario mentioned earlier.If you want to prevent the click event on the button from triggering the click event on the div, you can use event.stopPropagation() inside the button's event listener function:


// const button = document.querySelector('button');
// const div = document.querySelector('div');

// button.addEventListener('click', function (event) {
//     console.log('Button clicked!');
//     event.stopPropagation();
// });

// div.addEventListener('click', function (event) {
//     console.log('Div clicked!');
// });

// In this example, clicking the button will trigger only its own event listener and not the div's event listener, because we called event.stopPropagation() inside the button's event listener function to prevent the event from propagating further up the DOM tree.

//     It's important to use event.stopPropagation() with caution, as it can potentially interfere with other parts of your application that rely on event bubbling to function properly.