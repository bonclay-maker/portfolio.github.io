const figmaWrapper = document.querySelector('.figma__wrapper');
const prevArrow = document.querySelector('.figma__arrow--prev');
const nextArrow = document.querySelector('.figma__arrow--next');

let currentIndex = 0;
let cardsPerView = 1; // Default to 1, will be updated based on screen size

function updateCardsPerView() {
    if (window.innerWidth >= 1024) {
        cardsPerView = 3;
    } else if (window.innerWidth >= 768) {
        cardsPerView = 2;
    } else {
        cardsPerView = 1;
    }
}

function updatePosition() {
    const totalCards = figmaWrapper.children.length;
    figmaWrapper.style.transform = `translateX(-${(currentIndex * 100) / cardsPerView}%)`;
}

function nextSlide() {
    const totalCards = figmaWrapper.children.length;
    currentIndex = (currentIndex + cardsPerView) % totalCards;
    if (currentIndex + cardsPerView > totalCards) {
        currentIndex = 0;
    }
    updatePosition();
}

function prevSlide() {
    const totalCards = figmaWrapper.children.length;
    currentIndex = (currentIndex - cardsPerView + totalCards) % totalCards;
    updatePosition();
}

nextArrow.addEventListener('click', nextSlide);
prevArrow.addEventListener('click', prevSlide);

// Update layout on window resize
window.addEventListener('resize', () => {
    updateCardsPerView();
    currentIndex = 0; // Reset to first slide on resize to avoid layout issues
    updatePosition();
});

// Initial setup
updateCardsPerView();
updatePosition();