'use strict';

//!==========slider===============
let position = 0;
let slidesToShow = 1;
let slidesToScroll = 1;
let container = document.querySelector('.testimonials__slider');
let track = document.querySelector('.slider-track');
let items = document.querySelectorAll('.slider-item');
let btnPrev = document.querySelector('.btn-back');
let btnNext = document.querySelector('.btn-forward');
let itemsCount = items.length;
let itemWidth = container.clientWidth / slidesToShow;
let movePosition = (slidesToScroll * itemWidth) + 20;
let dot = document.querySelectorAll('.dot');

items.forEach((item) => {

    item.style.minWidth = `${itemWidth}px`;
});
btnPrev.addEventListener('click', function () {
    position += movePosition;
    setPosition();
});

btnNext.addEventListener('click', function () {
    position -= movePosition;
    setPosition();
});
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
    checkBtnPrev();
    checkbtnNext();
};

const checkBtnPrev = () => {

    if (position === 0) {
        btnPrev.disabled = true;
        btnPrev.classList.add('arrow-end');
        dot[0].classList.add('dots-active');
        dot[1].classList.remove('dots-active');


    } else {
        btnPrev.removeAttribute('disabled');
        btnPrev.classList.remove('arrow-end');
        dot[0].classList.remove('dots-active');
        dot[1].classList.add('dots-active');
    }
};
const checkbtnNext = () => {

    if (position <= -(itemsCount - slidesToShow) * itemWidth) {
        btnNext.disabled = true;
        btnNext.classList.add('arrow-end');
        dot[dot.length - 1].classList.add('dots-active');
        dot[1].classList.remove('dots-active');
    } else {
        btnNext.removeAttribute('disabled');
        btnNext.classList.remove('arrow-end');
        dot[dot.length - 1].classList.remove('dots-active');
    }

};
//!======/slider============
//!======scroll-up==========

const offset = 600;
const scrollUp = document.querySelector('.scroll-up');
const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
const pathLenght = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLenght} ${pathLenght}`;
scrollUpSvgPath.style.transition = `stroke-dashoffset 50ms`;

const getTop = () => window.pageYOffset || document.documentElement.scrollTop;
//updateDashoffset
const updateDsshoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashOffset = pathLenght - (getTop() * pathLenght / height);
    scrollUpSvgPath.style.strokeDashoffset = dashOffset;

};

//onScroll
window.addEventListener('scroll', function () {
    updateDsshoffset();
    if (getTop() > offset) {
        scrollUp.classList.add('scroll-up--active');
    } else {
        scrollUp.classList.remove('scroll-up--active');
    }
});


//click
scrollUp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});


//!======/scroll-up==========