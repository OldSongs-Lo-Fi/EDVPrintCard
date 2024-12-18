let currentIndex = 0;

changeSlide(0);

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    // Обновляем индекс с учетом направления
    currentIndex = currentIndex + direction;

    if(currentIndex > totalSlides - 1) {
        currentIndex = 0;
    }
    if(currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    // Сдвигаем контейнер с изображениями
    document.querySelectorAll('.carousel-images img').forEach(img => img.style.display = 'none');
    document.querySelectorAll('.carousel-images img')[currentIndex].style.display = 'block';
    console.log(currentIndex);
}

// Автоматическое переключение слайдов каждые 3 секунды
setInterval(() => changeSlide(1), 10000);
