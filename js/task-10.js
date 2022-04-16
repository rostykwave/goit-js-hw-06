function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls > input'),
  output:document.querySelector('#boxes'),
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
}

function createBoxes(amount) { 
  const divAmount = refs.input.valueAsNumber;

  let increment = 10;
  let elWidth = 30 - increment;
  let elHeight = 30 - increment;
  

  for (let i = 0; i < divAmount; i++) {
    /////збільшення розміру при кожній ітерації
    elWidth += increment;
    elHeight += increment;

    ///створення елементу
    const newElement = document.createElement('div');

    ////дії над елементом
    newElement.style.width = `${elWidth}px`;
    newElement.style.height = `${elHeight}px`;
    newElement.style.backgroundColor = getRandomHexColor();
  
    /////додавання елементу
    refs.output.append(newElement);
    
  }

  
}

//////зробити одним кроком через масив чи об'єкт - деструктуризацією

function destroyBoxes() {
  refs.output.innerHTML = '';
  refs.input.valueAsNumber = 0;
}


refs.create.addEventListener('click', createBoxes);

refs.destroy.addEventListener('click', destroyBoxes);


// console.log(refs.create);
// console.log(refs.destroy);
// console.log(refs.output);


/////how to use amount createBoxes(amount) with callbacks