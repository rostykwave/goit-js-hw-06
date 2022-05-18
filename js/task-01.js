
const listItems = document.querySelectorAll('#categories >.item');
// const listItems = document.querySelector('#categories').querySelectorAll('.item');

console.log('Number of categories:', listItems.length);


const itemsLogging = listItems.forEach((option) => {
    console.log('Category:', option.querySelector('h2').textContent);
    // console.log('Category:',option.firstElementChild.textContent);
    console.log('Elements:', option.querySelectorAll('li').length);
});