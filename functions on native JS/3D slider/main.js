// Перевод в строгий режим
'use strict';

window.addEventListener('DOMContentLoaded', function() {

// Slider

	let slideIndex = 2, // n=2 это второй слайд, так как массив начинается с 0
		slides = document.querySelectorAll('.slide-wrap > li'),
		prev = document.querySelector('.prev-arr'),
		next = document.querySelector('.next-arr');

	// changeClassSlides(slideIndex);

	// Функция показа слайдов
	function changeClassSlides(n) { //аргумент - номер слайда

		// Проверка которая реализует цикличность слайдера при нажатии на кнопки перемотки
		if (n > slides.length-1) {
			slideIndex = 0;
		} else if (n<1) {
			slideIndex = slides.length;
		}

		console.log(n);

		//Очищаем классы всех слайдов
		slides.forEach((item) => item.className = "");


		slides[slideIndex-2].classList.add('pos1');
		slides[slideIndex-1].classList.add('pos2');
		slides[slideIndex].classList.add('pos3');
		slides[slideIndex+1].classList.add('pos4');
		slides[slideIndex+2].classList.add('pos5');
		// if (n+1 > slides.length -1) {
		// 	slides[0].classList.add('pos4');
		// } else {
		// 	slides[slideIndex+1].classList.add('pos4');
		// }
		// if (n+2 > slides.length -1) {
		// 	slides[0].classList.add('pos5');
		// } else {
		// 	slides[slideIndex+2].classList.add('pos5');
		// }
		
	

		// console.log(slides);
	}

	// Функция которая увеличивает параметр slideIndex
	function plusSlides(n) {
		changeClassSlides(slideIndex += n);
	}

	// навешиваем обработчики событий на элементы страницы
	prev.addEventListener('click', function(event) {
		if (event.target.classList.contains('prev-arr')) {
			plusSlides(-1);
		}
		console.log(event.target);
	});

	next.addEventListener('click', function(event) {
		if (event.target.classList.contains('next-arr')) {
			plusSlides(1);
		}
		console.log(event.target);
	});

		});
