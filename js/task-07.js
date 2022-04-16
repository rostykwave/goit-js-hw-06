const refs = {
    input: document.querySelector('#font-size-control'),
    output:document.querySelector('#text'),
};

refs.input.addEventListener('input', changeTextSize);

function changeTextSize(event) {
    console.log(event.currentTarget.value);
    refs.output.style.fontSize = `${event.currentTarget.value}px`;
};

