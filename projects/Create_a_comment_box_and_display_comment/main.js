const form = document.querySelector('form');
const commentsContainer = document.getElementById('comments-container');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.innerHTML = `
    <h3>${name}</h3>
    <p>${comment}</p>
  `;
    commentsContainer.appendChild(commentDiv);

    form.reset();
});
