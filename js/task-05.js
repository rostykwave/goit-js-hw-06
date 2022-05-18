const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    
    const inputText = event.currentTarget.value;

    if (inputText === '') {
        return refs.output.textContent = 'Anonymous';
    }
    
    refs.output.textContent = inputText;
};
