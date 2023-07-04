import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
let slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	slidesPerView: 'auto',
	spaceBetween:   30,
})

let slider2 = document.querySelector('.swiper-container2');
let mySwiper2 = new Swiper(slider2, {
	slidesPerView: 'auto',
	// spaceBetween:   30,
})