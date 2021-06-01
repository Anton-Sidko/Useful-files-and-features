// Перевод в строгий режим
'use stirct';

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