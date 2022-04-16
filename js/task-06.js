const inputRef = document.querySelector('#validation-input');

function validInput(element) {
    element.classList.add('valid');

     if (element.classList.contains('invalid')) {
         element.classList.remove('invalid');
    }
}
function inValidInput(element) {
    element.classList.add('invalid');
    
    if (element.classList.contains('valid')) {
        element.classList.remove('valid');
    }
}

function inputCheck() {
    console.log(`Введено ${this.value.length} символів`);

    if (this.value.length > this.dataset.length || this.value.length ===0) {
        return inValidInput(this);
    } 
    return validInput(this);
};



inputRef.addEventListener('blur', inputCheck);


///find how to use 'this' in 3 functions

