// fixed header
const header = document.querySelector('#header'),
    introH = document.querySelector('#intro').clientHeight;

function fixedHeader() {
    if (window.pageYOffset > introH) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}

window.addEventListener('scroll', fixedHeader);


// slider
slider({
    slidesSelector: '.reviews__item',
    container: '.reviews__slider',
    wrapper: '.reviews__slider-wrapper',
    field: '.reviews__slider-inner'
});

function slider({
    slidesSelector,
    container,
    wrapper,
    field
}) {

    const slides = document.querySelectorAll(slidesSelector),
        offerSlider = document.querySelector(container),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1,
        offset = 0;


    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '.5s all';
    slidesWrapper.style.overflow = 'hidden';
    slides.forEach(slide => {
        slide.style.width = width;
    });
    offerSlider.style.position = 'relative';

    const dotsIndicators = document.createElement('ol'),
        dots = [];

    dotsIndicators.classList.add('carousel-indicators');
    offerSlider.append(dotsIndicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-total', i + 1);
        if (i == 0) {
            dot.style.opacity = 1;
        }
        dotsIndicators.append(dot);
        dots.push(dot);
    }

    function changeOpacityDots() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = '1';
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-total');

            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            changeOpacityDots();
        });
    });
}


// navToggle
const nav = document.querySelector('#nav'),
    navToggle = document.querySelector('#navToggle');

function showNav() {
    nav.classList.toggle('show');
    navToggle.classList.toggle('active');
}

navToggle.addEventListener('click', (e) => {
    e.preventDefault();
    showNav();
});


// smooth scroll
const triger = document.querySelectorAll('.nav__link');

triger.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        let elementId = item.getAttribute('data-scroll');
        let elementOffset = document.querySelector(elementId).offsetTop;

        nav.classList.remove('show');
        navToggle.classList.remove('active');

        window.scroll({
            top: elementOffset - 60,
            behavior: 'smooth'
        });
    });
});


// $(function () {

//     // smooth scroll
//     $("[data-scroll]").on("click", function (event) {
//         event.preventDefault();

//         let elementId = $(this).data('scroll');
//         let elementOffset = $(elementId).offset().top;

//         nav.removeClass("show");

//         $("html, body").animate({
//             scrollTop: elementOffset - 60
//         }, 700);
//     });

// });