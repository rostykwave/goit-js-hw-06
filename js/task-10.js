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
  ////визначення кількості боксів,які зробити
  const divAmount = refs.input.valueAsNumber;

  //////вихідні параметри боксів
  let increment = 10;
  let elWidth = 30 - increment;
  let elHeight = 30 - increment;
  

  /////ініціація пустого масиву
  const allElements = [];

  /////Цикл, який введену кількість раз створить елемент і додасть його в масив
  for (let i = 0; i < divAmount; i+=1) {
    /////збільшення розміру при кожній ітерації
    elWidth += increment;
    elHeight += increment;

    ///створення елементу
    const newElement = document.createElement('div');

    ////дії над елементом
    newElement.style.width = `${elWidth}px`;
    newElement.style.height = `${elHeight}px`;
    newElement.style.backgroundColor = getRandomHexColor();

    ////додавння при кожній ітерації в масив
    allElements.push(newElement);
    /////додавання елементу по одному(не використовувавти)
    // refs.output.append(newElement);
  }

  /////додавання елементів (дестр. масиву)
   refs.output.append(...allElements);
  
}

function destroyBoxes() {
  refs.output.innerHTML = '';
  refs.input.valueAsNumber = 0;
}


refs.create.addEventListener('click', createBoxes);

refs.destroy.addEventListener('click', destroyBoxes);



/////how to use amount createBoxes(amount) with callbacks
////why do we need (amount) parameter?
////Can we do this in differrent way? not using for?