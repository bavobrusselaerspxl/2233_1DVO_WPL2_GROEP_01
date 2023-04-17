const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page refresh on form submission
    const searchTerm = input.value.trim();
    // perform search with searchTerm
});