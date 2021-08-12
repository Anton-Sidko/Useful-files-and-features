// Отправка данных из формы
    // Создаем обьект в котором будут хранится состояние запроса

    let message = {
        loading: 'Загрузка...',
        succes: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    // Получаем элементы формы со страницы

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status'); //Добавляем стилистику сообщению

    // Вешаем обработчик события на ФОРМУ!!! , а не на кнопку
    form.addEventListener('submit', function(event) {
        event.preventDefault(); //Сбрасываем дефолтную перезагрузку страницы при отправке формы
        form.appendChild(statusMessage); //добавляем в форму статус сообщение

        // Создаем сам запрос
        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // Получаем данные из формы
        let formData = new FormData(form);
        request.send(formData);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState == 4 && request.status == 200) {
                statusMessage.innerHTML = message.succes;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        // Очистка инпутов после отправки формы
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }

        // Отправка данных в формате JSON

        //Меняем заголовок запроса
        //request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        //Меняем обьект FormData в JSON
        //let formData = new FormData(form);
        // Напрямую поменять нельзя, используем промежуточный обьект
        //let obj = {};
        // formData.forEach(function(value, key) {
        //     obj[key] = value;
        // });
        // let json = JSON.stringify(obj);
        // request.send(json);
    });



//Модуль отправки формы через fetch с валидацией введения числа
const forms = () => {
    // Выбираем все формы и все инпуты на странице
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        // Выбираем инпуты для валидации
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    // Удаляем из инпута все не цифры
    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    // Создаем обьект-сообщение для пользователя, которое будет показываться после отправки. Можно не только текст, а и картинки, и т.д.
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    // Функция отправки сообщения
    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = message.loading;
        // Получаем результат отправки. fetch это promise, поэтому чтоы переменная была не пустая используем async/await чтобы код ждал пока выполниться запрос и только тогда присваивал ответ в переменную
        let result = await fetch(url, {
            // указываем метод отправки. По умолчанию GET
            method: 'POST',
            // что отправляем
            body: data
        });

        return await result.text();
    };

    // Очищаем все инпуты после отправки
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    // Назначаем обработчик события submit на каждую форму
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            // Отправка без перезагрузки
            e.preventDefault();

            // Вставляем статус-сообщение после отправки на страницу
            let statusMessage = document.createElement('div');
            // Стилизуем его
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            // Создаем новый обьект FormData который и будет отправляться
            const formData = new FormData(item);

            // Отправка сообщения на сервер
            postData('assets/server.php', formData)
                .then(result => {
                    console.log(result);
                    statusMessage.textContent = message.success;
                })
                // Ловим ошибку
                .catch(() => statusMessage.textContent = message.failure)
                // Код который выполняется всегда, независимо от того какой результат промиса
                .finally(() => {
                    //Очистка инпутов и удаления статус-сообщения через 5 секунд
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

// Экспорт модуля
export default forms;
//END


