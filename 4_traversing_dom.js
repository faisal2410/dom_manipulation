// The Document Object Model(DOM) is a programming interface for HTML and XML documents.It represents the document as a tree of objects, where each object represents a node in the tree.Nodes can be elements, text, comments, or other types.

// Traversing the DOM means navigating through this tree of nodes to find specific elements or manipulate them in some way.There are several methods and properties that you can use to traverse the DOM, including:

// 👀getElementById() - This method returns the element with the specified ID.
//     Example:
// const element = document.getElementById("myId");


// 👀querySelector() - This method returns the first element that matches the specified CSS selector.
//     Example:
// const element = document.querySelector("#myId .myClass");

// 👀childNodes - This property returns a collection of a node's child nodes, as a NodeList object.
// Example:

// const parent = document.getElementById("myParent");
// const children = parent.childNodes;

// 👀parentNode - This property returns the parent node of a specified node.
//     Example:


// const child = document.getElementById("myChild");
// const parent = child.parentNode;

// 👀nextSibling and previousSibling - These properties return the next and previous sibling nodes of a specified node.
//     Example:


// const firstChild = parent.firstChild;
// const secondChild = firstChild.nextSibling;
// const thirdChild = secondChild.nextSibling;

// 👀firstChild and lastChild - These properties return the first and last child nodes of a specified node.
//     Example:


// const parent = document.getElementById("myParent");
// const firstChild = parent.firstChild;
// const lastChild = parent.lastChild;



// 👀getElementsByClassName() - This method returns a collection of elements that have the specified class name.
// Example:

// const elements = document.getElementsByClassName("myClass");

// 👀querySelectorAll() - This method returns a collection of elements that match the specified CSS selector.
//     Example:

// const elements = document.querySelectorAll(".myClass li");

// 👀parentNode - This property returns the parent node of a specified node.
//     Example:
// const child = document.getElementById("myChild");
// const parent = child.parentNode;

// 👀closest() - This method returns the closest ancestor element that matches the specified selector.
//     Example:


// const closestElement = document.getElementById("myElement").closest(".myClass");
// 👀children - This property returns a collection of a node's child elements, as an HTMLCollection object.
// Example:

// const parent = document.getElementById("myParent");
// const children = parent.children;

// 👀nextElementSibling and previousElementSibling - These properties return the next and previous sibling elements of a specified element.
//     Example:

// const firstElement = parent.firstElementChild;
// const secondElement = firstElement.nextElementSibling;
// const thirdElement = secondElement.nextElementSibling;

// 👀firstElementChild and lastElementChild - These properties return the first and last child elements of a specified element.
//     Example:

// const parent = document.getElementById("myParent");
// const firstElement = parent.firstElementChild;
// const lastElement = parent.lastElementChild;


// 👀matches() - This method returns true if an element matches a specified selector, otherwise it returns false.
//     Example:

// const element = document.getElementById("myElement");
// const isMatching = element.matches(".myClass");

// 👀getElementsByTagName() - This method returns a collection of elements that have the specified tag name.
//     Example:

// const elements = document.getElementsByTagName("p");

// 👀getElementsByClassName() - This method returns a collection of elements that have the specified class name.
// Example:


// const elements = document.getElementsByClassName("myClass");

// 👀getElementById() - This method returns the element with the specified ID.
//     Example:


// const element = document.getElementById("myId");

// 👀hasChildNodes() - This method returns true if a node has any child nodes, otherwise it returns false.
//     Example:


// const parent = document.getElementById("myParent");
// const hasChildren = parent.hasChildNodes();

// 👀innerHTML - This property sets or returns the HTML content of an element.
//     Example:


// const element = document.getElementById("myElement");
// element.innerHTML = "<p>This is some new content</p>";

// 👀textContent - This property sets or returns the text content of an element.
//     Example:

// const element = document.getElementById("myElement");
// element.textContent = "This is some new text";


// 👀documentElement - This property returns the root element of the document.
//     Example:


// const root = document.documentElement;

//👀 previousElementSibling and nextElementSibling - These properties return the previous and next sibling elements of a specified element.
//     Example:


// const element = document.getElementById("myElement");
// const previousSibling = element.previousElementSibling;
// const nextSibling = element.nextElementSibling;

// 👀parentElement - This property returns the parent element of a specified element.
//     Example:


// const child = document.getElementById("myChild");
// const parent = child.parentElement;

//👀 getAttribute() - This method returns the value of the specified attribute of an element.
//     Example:


// const element = document.getElementById("myElement");
// const attributeValue = element.getAttribute("data-attribute");

//👀 setAttribute() - This method sets the value of the specified attribute of an element.
//     Example:


// const element = document.getElementById("myElement");
// element.setAttribute("data-attribute", "new value");

//👀 removeAttribute() - This method removes the specified attribute from an element.
//     Example:


// const element = document.getElementById("myElement");
// element.removeAttribute("data-attribute");

// 👀closest() - This method returns the closest ancestor element that matches a specified selector.
//     Example:

// const element = document.getElementById("myElement");
// const closestAncestor = element.closest(".myClass");