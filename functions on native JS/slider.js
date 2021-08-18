// Слайдер

let slideIndex = 1, //слайд который показывается в текущий момент
slides = document.querySelectorAll('.slider-item'),
prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
dotsWrap = document.querySelector('.slider-dots'),
dots = document.querySelectorAll('.dot');

showSLides(slideIndex)
// Функция показа слайдов
function showSLides(n) { //одни аргумент - номер слайда

// Проверка которая реализует цикличность слайдера при нажатии на кнопки перемотки
if (n > slides.length) {
    slideIndex = 1;
} else if (n<1) {
    slideIndex = slides.length;
}

//скрываем все слайды на странице
slides.forEach((item) => item.style.display = "none");
//Можно записать циклом, но стрелочная функция удобнее
// for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
// }

// Удаляем со всех точек класс актив
dots.forEach((item) => item.classList.remove("dot-active"));

// Показываем нужный слайд
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].classList.add("dot-active");
}

// Функция которая увеличивает параметр slideIndex
function plusSlides(n) {
showSLides(slideIndex += n);
}

// Функция которая определяет текущий слайд
function currentSlide(n) {
showSLides(slideIndex = n);
}

// навешиваем обработчики событий на элементы страницы
prev.addEventListener('click', function() {
plusSlides(-1);
});

next.addEventListener('click', function() {
plusSlides(1);
});

// Переключения слайдов по точкам
dotsWrap.addEventListener('click', function(event) {
for (let i = 0; i < dots.length + 1; i++) {
    if (event.target.classList.contains("dot") && event.target == dots[i-1]) {
        currentSlide(i);
    }
}
});



//Модуль слайдера
const sliders = (slides, direction, prev, next) => {
	let slideIndex = 1, //Отображает текущий слайд
		paused = false; //Для паузы автопереключения при hover

	const items = document.querySelectorAll(slides);


	function showSlides(n) {
		if (n > items.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = items.length;
		}

		items.forEach(item => {
			item.classList.add('animated');
			item.style.display = 'none';
		});

		items[slideIndex - 1].style.display = 'block';
	}

	showSlides(slideIndex);

	function changeSlides(n) {
		showSlides(slideIndex += n);
	}

	// Кнопки не всегда есть на странице, поэтому нужен обработчик ошибок
	try {
		const prevBtn = document.querySelector(prev),
			  nextBtn = document.querySelector(next);

		prevBtn.addEventListener('click', () => {
			changeSlides(-1);
			items[slideIndex - 1].classList.remove('slideInLeft');
			items[slideIndex - 1].classList.add('slideInRight');
		});

		nextBtn.addEventListener('click', () => {
			changeSlides(1);
			items[slideIndex - 1].classList.remove('slideInRight');
			items[slideIndex - 1].classList.add('slideInLeft');
		});
	} catch(e) {}


	// Пауза авто переключения
	function activateAnimation() {
		//Направление переключения слайдов
		if (direction === 'vertical') {
			paused = setInterval(function() {
				changeSlides(1);
				items[slideIndex - 1].classList.add('slideInDown');
			}, 3000);
		} else {
			paused = setInterval(function() {
				changeSlides(1);
				items[slideIndex - 1].classList.remove('slideInRight');
				items[slideIndex - 1].classList.add('slideInLeft');
			}, 5000);
		}
	}

	//Навешиваем обработчик событий на родителя слайда, чтобы ставить авто переключение на паузу
	items[0].parentNode.addEventListener('mouseenter', () => {
		clearInterval(paused);
	});
	items[0].parentNode.addEventListener('mouseleave', () => {
		activateAnimation();
	});

	activateAnimation();

};

export default sliders;

//END
