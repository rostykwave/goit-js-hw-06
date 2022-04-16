const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.output.textContent = 'Anonymous';
    refs.output.insertAdjacentHTML('beforeend', event.currentTarget.value);
};
