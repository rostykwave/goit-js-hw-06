const refs = {
    decrementButton: document.querySelector('button[data-action="decrement"'),
    valueOutput: document.querySelector('#value'),incrementButton: document.querySelector('button[data-action="increment"'),
};



let counterValue = 0;


const subtractValue = () => {
    counterValue -= 1;
    refs.valueOutput.textContent = counterValue;
};

const addValue = () => {
    counterValue += 1;
    refs.valueOutput.textContent = counterValue;
};


refs.decrementButton.addEventListener('click', subtractValue);

refs.incrementButton.addEventListener('click', addValue);
