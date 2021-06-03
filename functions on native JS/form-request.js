// Отправка данных из формы
    // Создаем обьект в котором будут хранится состояние запроса

    let message = {
        loading: 'Загпузка...',
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