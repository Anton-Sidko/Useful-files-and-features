// Перевод в строгий режим
'use strict';

window.addEventListener('DOMContentLoaded', function() {

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hidetabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hidetabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hidetabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // Вызов модального окна на табах
    let tabBtn = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function showTabModal () {
        for(let i = 0; i < tab.length; i++) {
            tabBtn[i].addEventListener('click', function() {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                // Запретить scroll документа
                document.body.style.overflow = 'hidden';
            });
        }
    }

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        // Разрешить scroll после закрытия модального окна
        document.body.style.overflow = '';
    });

    showTabModal ();
});


//Лучший модульный способ
// Пишем модуль функций, которые потом экспортируем в основной файл скрипта
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);

    //Функция которая скрывает весь контент и убирает класс активности со всех табов
    function hideTabContent() {
        content.forEach(item => {
            //Лучше классами
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    //Функция которая показывает i-й контент и ставит класс на i-й таб. Прописан i = 0 по умолчанию, чтобы при первом вызове не передавать аргумент
    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    //Первоначальный вызов функций при загрузке страницы. showTabContent() без аргумента, так как i = 0 по умолчанию
    hideTabContent();
    showTabContent();

    //Назначаем обработчик событий на обертку табов
    header.addEventListener('click', (e) => {
        const target = e.target;
        //Проверка, что таргет есть
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || //Проверка, что у таргета нужный класс. tabSelector.replace(/\./, "") так как classList.contains нужен класс без точки, а у селектора точка
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {  //Проверка, что у родителя таргета нужный класс (если кликнули на элемент-ребенок таба). tabSelector.replace(/\./, "") так как classList.contains нужен класс без точки, а у селектора точка
            //Перебор псевдомассива всех табов и вызов функций только для таба с индексом целью
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

};

export default tabs;
//END
