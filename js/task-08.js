const refs = {
    form: document.querySelector('.login-form'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
    ////заборона перезавантаження сторінки
    event.preventDefault();

    /////доступ до всього інпуту форми
    const formData = new FormData(event.currentTarget);


    ////створення об'єкту для додавання інпуту
    const elements = {};
    

    ////////перебір масиву всього інпуту
    formData.forEach((value, key) => {
        if (value ==='') {
           return alert('всі поля повинні бути заповнені');
        }; 

        elements[key] = value;
    }    
    );
    ///////логування об'єкту інпуту
    console.log(elements);

    ///очистка полів
    refs.form.reset();
}

///////NB: метод .forEach не дозволяє передчасно перервати перебір масиву, для цього підійде for of/for/for in
////тому коли два пусті поля отримуємо два alert





/////Elements для доступу до елементів форми????