let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    const imageSize = document.querySelector('.carousel-images img').offsetWidth;

    // Обновляем индекс с учетом направления
    currentIndex = currentIndex + direction;

    if(currentIndex > totalSlides - 1) {
        currentIndex = 0;
    }
    if(currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Сдвигаем контейнер с изображениями
    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * imageSize}px)`;
}

// Автоматическое переключение слайдов каждые 3 секунды
setInterval(() => changeSlide(1), 10000);
