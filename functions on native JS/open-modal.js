// Вызов модального окна

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

more.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    // Запретить scroll документа
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    // Разрешить scroll после закрытия модального окна
    document.body.style.overflow = '';
});





//Лучший способ
// Пишем модуль функций, которые потом экспортируем в основной файл скрипта

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        //Задание переменных-селекторов. Для триггера querySelectorAll потому что таких ссылок две
        const trigger = document.querySelectorAll(triggerSelector),
                modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector);

        //Назначаем обработчик. forEach так как триггера два (псевдомассив)
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                // Проверяем наличие таргета и сбрасываем дефолтное поведение если таргет ссылка
                if (e.target) {
                    e.preventDefault();
                }

                //Отображение самого окна и запрет прокрутка остального сайта. Лучше сделать через классы
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                // document.body.classList.add('modal-open');
            });
        });

        //Закрытие окна
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            // document.body.classList.remove('modal-open');
        })

        //Закрытие по подложке. Работает потому что клик на подложке считается кликом на самом modal, а при клике на элементы окна таргет другой
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
                // document.body.classList.remove('modal-open');
            }
        })
    }

    //Отображение окна через заданное время после захода на сайт
    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    //Вызов функций с правильными переменными-селекторами
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);
};

//Нужно прописывать, чтоы иметь возможность потом импортировать модуль в основной файл (import modals from './modules/modals';)
export default modals;
//END
