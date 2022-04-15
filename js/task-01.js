
const listItems = document.querySelector('#categories').querySelectorAll('.item');

console.log('Number of categories:', listItems.length);


const itemsLogging = listItems.forEach((option) => {
    console.log('Category:',option.firstElementChild.textContent);
    console.log('Elements:', option.querySelectorAll('li').length);
});