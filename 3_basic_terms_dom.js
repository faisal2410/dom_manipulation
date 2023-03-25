// Some basic terms related to DOM manipulation:

// DOM: The Document Object Model is a tree - like structure that represents the HTML or XML document.It provides a way to access, manipulate and modify the elements and content of a web page using JavaScript.

// Element: An element is a fundamental part of a web page, represented in the DOM as a node in the tree.Elements can contain text and other elements, and have properties like ID, class, and style that can be manipulated.

// Node: A node is a basic unit of the DOM tree, representing an element, attribute, or text.Nodes have properties like parentNode, childNodes, and nodeType that can be accessed and manipulated.

// Selector: A selector is a string used to identify one or more elements in the DOM.Selectors can use various syntaxes and combinations of HTML tags, IDs, classes, attributes, and pseudo - classes to match elements.

// Attribute: An attribute is a property of an element that provides additional information or behavior.Attributes can be manipulated using JavaScript to change the appearance or functionality of an element.

// Method: A method is a function that is part of an object, used to perform a specific action or behavior.DOM methods are used to manipulate elements and their attributes, and can be called using JavaScript.

// Event: An event is a user interaction or system notification that can trigger JavaScript code to execute.DOM events include mouse clicks, keyboard presses, form submissions, and more, and can be used to add interactivity to a web page.

// Property: A property is a value or attribute associated with an object or element.DOM properties include attributes like ID and class, as well as other properties like style, innerHTML, and textContent.

// CSS: Cascading Style Sheets are a way to add style and formatting to web pages, including colors, fonts, layouts, and more.CSS can be manipulated using JavaScript to change the appearance and layout of elements on a web page.

// Query Selector: A method used to find and select elements in the DOM based on a specific selector string.Query selectors use a syntax similar to CSS selectors to match elements.

// InnerHTML: A property of an element that represents the HTML content within that element.InnerHTML can be manipulated using JavaScript to add or remove content from an element.

// Class: A property of an element that represents a set of CSS styles that can be applied to that element.Class names can be manipulated using JavaScript to change the appearance of elements on a web page.

// Style: A property of an element that represents a set of inline CSS styles that can be applied to that element.Style properties can be manipulated using JavaScript to change the appearance of elements on a web page.

// Attribute Selector: A type of selector that matches elements based on the value of a specific attribute.Attribute selectors use syntax like[attribute = value] to match elements with a specific attribute and value.

// Parent Node: A node in the DOM tree that is the direct parent of another node.Parent nodes can be accessed and manipulated using JavaScript to add, remove, or modify child nodes.

// Child Node: A node in the DOM tree that is a direct descendant of another node.Child nodes can be accessed and manipulated using JavaScript to add, remove, or modify content within an element.

// Event Listener: A method used to register a function to be executed when a specific event occurs on an element.Event listeners can be added using JavaScript to add interactivity to a web page.

// Event Handler: A function that is executed in response to an event occurring on an element.Event handlers can be added using JavaScript to add interactivity to a web page.

// Event Object: An object that contains information about an event that has occurred on an element.The event object can be accessed and manipulated using JavaScript to control the behavior of an event handler.

// Document Object: The document object represents the web page that is currently loaded in the browser.The document object can be accessed and manipulated using JavaScript to modify the content and behavior of the web page.

// Node List: A collection of nodes in the DOM tree that can be accessed and manipulated using JavaScript.Node lists can be used to find and modify multiple elements on a web page at once.

// DOM Traversal: The process of navigating through the DOM tree to access and manipulate specific nodes and elements.DOM traversal can be accomplished using various methods in JavaScript, such as parentNode, nextSibling, previousSibling, etc.

// Attribute Manipulation: The process of changing or modifying the attributes of an HTML element using JavaScript.Attributes can be added, removed, or modified to change the appearance or behavior of an element.

// Node Creation: The process of creating a new node in the DOM tree using JavaScript.New nodes can be created using various methods, such as createElement, createTextNode, etc.

// Node Insertion: The process of inserting a new node into the DOM tree at a specific location using JavaScript.Nodes can be inserted using various methods, such as appendChild, insertBefore, etc.

// Node Deletion: The process of removing a node from the DOM tree using JavaScript.Nodes can be deleted using various methods, such as removeChild, replaceChild, etc.

// Event Propagation: The process by which an event is handled by multiple elements in the DOM tree.Event propagation can occur in two ways: capturing(from the top of the tree to the target element) and bubbling(from the target element to the top of the tree).

// Event Delegation: The process of attaching an event listener to a parent element that will handle events triggered by its child elements.Event delegation can be used to reduce the number of event listeners attached to a web page and improve performance.

// InnerHTML: The property of an element that contains its HTML content.InnerHTML can be accessed and modified using JavaScript to change the content of an element.

// OuterHTML: The property of an element that contains its HTML content, including the element itself.OuterHTML can be accessed and modified using JavaScript to replace an element with new content.

// TextContent: The property of an element that contains its text content, excluding any HTML tags.TextContent can be accessed and modified using JavaScript to change the text content of an element.

// Style Object: An object that contains the CSS styles applied to an element.The Style object can be accessed and manipulated using JavaScript to change the appearance of an element.

// ClassList: A property of an element that contains a list of its CSS classes.ClassList can be accessed and manipulated using JavaScript to add or remove CSS classes from an element.

// Query Selector: A method used to select an element or group of elements in the DOM tree using a CSS selector.Query selector can be used in JavaScript to easily access and manipulate elements on a web page.

// Event Bubbling: The process by which an event triggered on a nested element is also triggered on its parent elements, up to the top of the DOM tree.Event bubbling can be controlled using JavaScript to prevent unwanted behavior or improve performance.

// Event Listener: A function that is executed when a specific event is triggered on an element.Event listeners can be added to elements using JavaScript to handle user interactions or other events on a web page.

// Event Object: An object that contains information about an event, such as its type, target element, and any data associated with it.The event object is passed to event handlers when an event is triggered.

// Event Propagation: The process by which an event is handled by multiple elements in the DOM tree.Event propagation can occur in two ways: capturing(from the top of the tree to the target element) and bubbling(from the target element to the top of the tree).

// Prevent Default: A method used to prevent the default behavior of an event, such as following a link or submitting a form.The preventDefault() method can be called on the event object within an event listener to stop the default behavior.

// Stop Propagation: A method used to stop event propagation from continuing beyond a specific element.The stopPropagation() method can be called on the event object within an event listener to prevent the event from being handled by parent elements.

// Data Attributes: Custom attributes added to HTML elements that can be used to store additional data or information.Data attributes can be accessed and manipulated using JavaScript to dynamically change the behavior or appearance of an element.

// DOM Events: A set of events that are triggered by user interactions or other actions on a web page, such as clicks, scrolls, or form submissions.DOM events can be used in JavaScript to create interactive and dynamic web pages.


// Attribute Manipulation: The process of accessing and modifying the attributes of an HTML element using JavaScript.This can include modifying the values of attributes such as "src", "href", "title", or "alt".

// Document Object: A representation of the HTML document that can be manipulated using JavaScript.The document object provides methods and properties for accessing and modifying the contents of the web page.

// Element Creation: The process of dynamically creating new HTML elements using JavaScript.This can be useful for adding new content to a web page or creating dynamic user interfaces.

// Element Removal: The process of removing an HTML element from the DOM tree using JavaScript.This can be useful for cleaning up a web page or dynamically updating the contents of a user interface.

// Element Selection: The process of selecting HTML elements from the DOM tree using JavaScript.This can be done using a variety of methods, including getElementById(), getElementsByTagName(), and querySelector().

// DOM Traversal: The process of moving through the DOM tree to access nested elements using JavaScript.This can be done using a variety of methods, including parentNode, childNodes, nextSibling, and previousSibling.

// Style Manipulation: The process of accessing and modifying the CSS styles applied to an HTML element using JavaScript.This can include modifying the values of style properties such as "color", "font-size", or "padding".