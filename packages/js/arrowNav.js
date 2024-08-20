const slides = document.querySelectorAll('.figma__card');
const slider = document.querySelector('.figma__wrapper');
const prevButton = document.querySelector('.left-arrow2');
const nextButton = document.querySelector('.right-arrow2');

let currentIndex = 0;
let slidesPerView = getSlidesPerView();

function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
}

function updateSlider() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
}

function showNextSlide() {
    currentIndex = (currentIndex + slidesPerView) % slides.length;
    updateSlider();
}

function showPrevSlide() {
    currentIndex = (currentIndex - slidesPerView + slides.length) % slides.length;
    updateSlider();
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);

window.addEventListener('resize', () => {
    slidesPerView = getSlidesPerView();
    currentIndex = Math.min(currentIndex, slides.length - slidesPerView);
    updateSlider();
});

// Initialize slider
updateSlider();