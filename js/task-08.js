const refs = {
    form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    ////заборона перезавантаження сторінки
    event.preventDefault();

    //////Варіант 1 (через elements)
    //додаткова змінна для зручності
    const formElements = event.currentTarget.elements;
    ///доступ до значень окремо кожного елемента
    const email = formElements.email.value;
    const password = formElements.password.value;
    ///попередження про пусте поле
    if (email === '' || password === '') {
        return alert('всі поля повинні бути заповнені');
    }
    ///об'єкт зі всім інпутом
    const formData = {
        email,
        password,
    }
    console.log(formData);



    // ///Варіант 2 через клас FormData
    // /// одномоментний доступ до всього інпуту форми
    // const formDataRaw = new FormData(event.currentTarget);///посилання на сам DOM елемент

    //  //створення об'єкту для додавання інпуту
    // const formData = {};

    // //////перебір масиву всього інпуту
    // formDataRaw.forEach((value, key) => {
    //     if (value ==='') {
    //        return alert('всі поля повинні бути заповнені');
    //     };

    //     formData[key] = value;
    // }
    // );
    // /////логування об'єкту інпуту
    // console.log(formData);


    ///очистка полів
    refs.form.reset();
}

///////NB: метод .forEach не дозволяє передчасно перервати перебір масиву, для цього підійде for of/for/for in
////тому коли два пусті поля отримуємо два alert