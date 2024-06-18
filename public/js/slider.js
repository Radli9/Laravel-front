document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(initializeSlider);
});

function initializeSlider(slider) {
    const images = slider.querySelectorAll('.slider img');
    images.forEach(img => {
        const skeleton = img.previousElementSibling;
        if (skeleton) {
            skeleton.style.display = 'block'; 
        }
        img.style.display = 'none'; 

        img.addEventListener('load', function() {
            this.style.display = 'block';
            if (skeleton) {
                skeleton.style.display = 'none'; 
            }
        });

        if (img.complete) {
            img.style.display = 'block';
            if (skeleton) {
                skeleton.style.display = 'none';
            }
        }
    });

    const prevButton = slider.querySelector('.prev');
    const nextButton = slider.querySelector('.next');

    if (prevButton) {
        prevButton.addEventListener('click', () => moveSlides(-1, slider));
    }
    if (nextButton) {
        nextButton.addEventListener('click', () => moveSlides(1, slider));
    }

    // Initial setup
    moveSlides(0, slider); // To adjust slides positioning initially
}

function moveSlides(n, slider) {
    const slidesContainer = slider.querySelector('.slides');
    if (!slidesContainer) {
        console.error('Slides container not found in slider.');
        return;
    }

    const slides = slidesContainer.children;
    const totalSlides = slides.length;
    let activeSlide = slider.dataset.activeSlide ? parseInt(slider.dataset.activeSlide) : 0;

    activeSlide = (activeSlide + n + totalSlides) % totalSlides;
    slider.dataset.activeSlide = activeSlide;

    const offset = -activeSlide * 100; // Move X% of slide width
    slidesContainer.style.transform = `translateX(${offset}%)`;
}
