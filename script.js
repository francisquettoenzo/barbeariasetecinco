const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let index = 0;
let imageWidth = getImageWidth();

function getImageWidth() {
    const width = window.innerWidth;

    if (width <= 600) {
        return width * 0.91; // mobile
    } else if (width <= 1024) {
        return 390; // tablet
    } else {
        return 210; // desktop
    }
}

function updateCarousel() {
    imageWidth = getImageWidth();
    track.style.transform = `translateX(-${index * imageWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    index++;
    if (index > track.children.length - 1) index = 0;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) index = track.children.length - 1;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);
