// Задаем конечную дату
let deadline = '2021-06-02';

// Найдем промежуток между сейчас и дедлайном

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60), //округляем с помощью Math.floor()
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

    return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

// Превращает статичную верстку в динамическую, подставляет значения в таймер на сайте

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);

        function addZero(num) { //Добавляем 0 перед однозначными значениями
            if (num <=9) {
                return '0' + num;
            } else {
                return num;
            }
        }

        if (t.total <= 0) {
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        } else {
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
        }

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('timer', deadline);



//Модуль таймера
const timer = (id, deadline) => {

    //Добавляем 0 для чисел меньше 10, для правильногоотобрадения (03, 02...)
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else{
            return num;
        }
    };

    //Создаем обьект в котором хранится разница между дедлайном и текущим моментом Date.parse(new Date())
    const getTimeRemaining = (endtime) => {
        const t       = Date.parse(endtime) - Date.parse(new Date()),
              seconds = Math.floor((t / 1000) % 60),
              minutes = Math.floor((t /(1000 * 60)) % 60),
              hours   = Math.floor((t /(1000 * 60 * 60)) % 24),
              days    = Math.floor((t /(1000 * 60 * 60 * 24)));

        return {
            'total'   : t,
            'days'    : days,
            'hours'   : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

    //Запускаем таймер
    const setClock = (selector, endtime) => {
        const timer        = document.querySelector(selector),
              days         = timer.querySelector('#days'),
              hours        = timer.querySelector('#hours'),
              minutes      = timer.querySelector('#minutes'),
              seconds      = timer.querySelector('#seconds'),
              //Интервал каждую секунду
              timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const time = getTimeRemaining(endtime);

            //Отображаем таймер на странице
            days.textContent = addZero(time.days);
            hours.textContent = addZero(time.hours);
            minutes.textContent = addZero(time.minutes);
            seconds.textContent = addZero(time.seconds);

            //Отображаем 00 если дедлайн прошел
            if (time.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timeInterval);
            }
        }

        //Запускаем вручную, так как через интервал вызоветься только через 1 секунуд и при обновлении страницы это будет заметно
        updateClock();
    };

    //Вызываем функцию запуска таймера
    setClock(id, deadline);
};

export default timer;
//END
