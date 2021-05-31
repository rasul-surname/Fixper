// Бургер меню + появляющийся header при скролле
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__nav').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__link').click(function (event) {
		$('.header__link, .header__burger, .header__nav').removeClass('active');
		$('body').removeClass('lock');
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$('.header').addClass('fixed');
			$('.header__contacts').addClass('del');
		}
		else if ($(this).scrollTop() < 150) {
			$('.header').removeClass('fixed');
		}
	});
});

// Исчезающий offer
let offer = document.querySelector('.intro__offer');
let close = document.querySelector('.intro__offer-close');

close.addEventListener('click', function () {
	offer.classList.add('remove');
});

// Вывод решения проблемы
let decisionOpens = document.querySelectorAll('.problems__list-button');
let problemsOpen = document.querySelector('.decision__subtitle');
let problemsBody = document.querySelector('.problems__body');
let decisionBody = document.querySelector('.decision__body');

// SLider Swiper
new Swiper('.swiper-team', {
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	spaceBetween: 30,
	speed: 800,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		780: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3,
		}
	},
});
new Swiper('.swiper-reviews', {
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	spaceBetween: 30,
	speed: 800,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		1000: {
			slidesPerView: 2,
		}
	},
});



for (let i = 0; i < decisionOpens.length; i++) {
	decisionOpens[i].addEventListener('click', function () {
		decisionBody.classList.add('block');
	});
};
for (let i = 0; i < decisionOpens.length; i++) {
	decisionOpens[i].addEventListener('click', function () {
		problemsBody.classList.add('block');
	});
};

problemsOpen.addEventListener('click', function () {
	decisionBody.classList.remove('block');
	problemsBody.classList.remove('block');
});

// Выпадающий ответ
let questions = document.getElementsByClassName('questions__click');
let questionsImg = document.getElementsByClassName('questions__img');

for (let i = 0; i < questions.length; i++) {
	questions[i].addEventListener('click', function () {
		for (let j = 0; j < questionsImg.length; j++) {
			questionsImg[i].classList.toggle('active');
		}
		this.classList.toggle('active');
		let answer = this.nextElementSibling;
		if (answer.style.maxHeight) {
			answer.style.maxHeight = null;
		} else {
			answer.style.maxHeight = answer.scrollHeight + 'px';
		}
	})
}

// Анимация при скролле
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {

	window.addEventListener('scroll', animonScroll);

	function animonScroll(params) {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animonScroll();
	}, 300);
};




