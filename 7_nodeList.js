// In JavaScript, a NodeList is a type of object that represents a collection of nodes in the DOM.Like an HTMLCollection, a NodeList is an ordered list of elements, but it has some key differences.

// One of the main differences is that a NodeList is not a live collection, meaning that it does not automatically update itself when the DOM changes.This means that if you add or remove elements from the DOM, the NodeList will not automatically update itself to reflect those changes.

// You can access the elements in a NodeList by their index, using bracket notation, just like you would with an array.For example:


// const list = document.querySelectorAll('p');
// const firstParagraph = list[0];
// You can also use a for loop to iterate over all the elements in a NodeList.For example:


// const list = document.querySelectorAll('p');
// for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
// }

// It's important to note that not all methods that return a collection of elements return a NodeList. For example, getElementsByClassName() returns an HTMLCollection, which is similar to a NodeList, but has some subtle differences. However, both NodeList and HTMLCollection are used to represent collections of elements in the DOM, and can be manipulated using similar techniques.