const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

////функція для приготування інградієнтів
const makeList = options => {
  return options.map(option => {
    const nextItem = document.createElement('li');
    nextItem.classList.add('item');
    nextItem.textContent = option;

    return nextItem;
  });
}
////

const list = document.querySelector('#ingredients');
const elements = makeList(ingredients);
list.append(...elements);



////////////Без функції//////////////////
// const elements = ingredients.map(option => {
//   const nextItem = document.createElement('li');
//   nextItem.classList.add('item');
//   nextItem.textContent = option;

//   return nextItem;
// })
// console.log(elements);

// const list = document.querySelector('#ingredients');
// list.append(...elements);
///////////////////////////////////////////




//////OldSchool////////////
// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const nextItem = document.createElement('li');
//   nextItem.classList.add('item');
//   nextItem.textContent = ingredients[i];

//   elements.push(nextItem);
  
// }
// console.log(elements);
// const list = document.querySelector('#ingredients');
// list.append(...elements);
//////////////////////////
