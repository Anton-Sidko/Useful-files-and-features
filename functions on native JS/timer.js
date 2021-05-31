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