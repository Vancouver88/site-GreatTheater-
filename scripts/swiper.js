'use strict';

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 0,
    centeredSlides: false,
    breakpoints: {
        1700: {
            slidesPerView: 4,
        },
        1460: {
            slidesPerView: 3.5,
        },
        1295: {
            slidesPerView: 3,
        },
        1120: {
            slidesPerView: 2.6,
        },
        1060: {
            slidesPerView: 2.2,
        },
        968: {
            slidesPerView: 2,
        },
        598: {
            slidesPerView: 1.6,
        },
        300: {
            slidesPerView: 1.2,
        }
    }
});