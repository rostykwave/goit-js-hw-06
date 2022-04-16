function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('button.change-color'),
  colorValue: document.querySelector('span.color'),
};

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorValue.textContent  = getRandomHexColor();
};



refs.button.addEventListener('click', changeColor);