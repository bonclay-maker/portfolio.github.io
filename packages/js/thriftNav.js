document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');

    let currentIndex = 0;

    function updateSlider() {
        const slideWidth = slides[0].offsetWidth;
        slider.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Initialize slider
    updateSlider();

    // Add resize event listener
    window.addEventListener('resize', updateSlider);

    // For debugging
    console.log('Slider initialized');
    console.log('Number of slides:', slides.length);
    nextButton.addEventListener('click', () => console.log('Next button clicked'));
    prevButton.addEventListener('click', () => console.log('Prev button clicked'));
});