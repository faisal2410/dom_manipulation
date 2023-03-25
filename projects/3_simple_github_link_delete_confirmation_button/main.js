const deleteLink = document.getElementById('delete-link');

deleteLink.addEventListener('click', function (event) {
    event.preventDefault();

    const confirmDelete = confirm('Are you sure you want to delete this repository?');

    if (confirmDelete) {
        window.location.href = this.href;
    }
});



// Explanation:


// In JavaScript, window.location.href is a property that represents the URL of the current page.In the context of an event handler function, this refers to the element that triggered the event.

// When you set window.location.href = this.href; inside an event handler function, it means that when the user interacts with the element that triggered the event, such as a link or a button, the browser will navigate to the URL specified in the href attribute of that element.

// For example, let's say you have a link with an ID of my-link and an href attribute that points to another page:


//     < a href = "https://www.example.com/page2" id = "my-link" > Go to Page 2</ >
//         You can add an event listener to this link using JavaScript and set window.location.href to the value of this.href inside the event handler function, like this:


// const myLink = document.getElementById("my-link");

// myLink.addEventListener("click", function (event) {
//     event.preventDefault();
//     window.location.href = this.href;
// });


// In this example, when the user clicks on the link, the event listener function will prevent the default behavior of the link using event.preventDefault(), which is to navigate to the URL specified in the href attribute.Instead, the function sets window.location.href to the value of this.href, which in this case is "https://www.example.com/page2".This causes the browser to navigate to that URL instead of the original URL specified in the href attribute.




// In JavaScript, window.location.href is a property that returns the URL(Uniform Resource Locator) of the current page or allows you to navigate to a new URL.

// When used as a getter, window.location.href returns the complete URL of the current page, including the protocol, domain, path, query parameters, and fragment identifier.For example:


// console.log(window.location.href);
// Output: "https://www.example.com/path/to/page?query=value#fragment"
// When used as a setter, window.location.href allows you to navigate to a new URL.Simply assign a new URL to window.location.href and the browser will redirect the user to the new URL.For example:

// js
// Copy code
// window.location.href = "https://www.example.com/new/path";
// This will immediately redirect the user to the new URL.

// Note that when you use window.location.href to navigate to a new page, the current page will be replaced by the new page in the browser history.If you want to navigate to a new page while preserving the current page in the history, you can use window.location.assign() instead:

// js
// Copy code
// window.location.assign("https://www.example.com/new/path");
// This will add the new page to the browser history and allow the user to navigate back to the previous page.
