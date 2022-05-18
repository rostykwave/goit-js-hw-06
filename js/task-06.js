const inputRef = document.querySelector('#validation-input');

// function validInput(element) {
//     element.classList.add('valid');

//      if (element.classList.contains('invalid')) {
//          element.classList.remove('invalid');
//     }
// }
// function inValidInput(element) {
//     element.classList.add('invalid');
    
//     if (element.classList.contains('valid')) {
//         element.classList.remove('valid');
//     }
// }

function inputValidation(element,add,remove) {
    element.classList.add(add);
    
    if (element.classList.contains(remove)) {
        element.classList.remove(remove);
    }
}

function inputCheck() {
    console.log(`Введено ${this.value.length} символів`);

    if (this.value.length > this.dataset.length || this.value.length === 0) {
        return inputValidation(this,'invalid','valid');
    } 
    return inputValidation(this,'valid','invalid');
};



inputRef.addEventListener('blur', inputCheck);


///find how to use 'this' in 3 functions

