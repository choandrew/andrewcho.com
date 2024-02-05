let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
}


document.addEventListener('DOMContentLoaded', function () {
    const nextButton = document.getElementById('nextBtn');

    if (nextButton) {
        nextButton.addEventListener('click', function () {
            slideIndex++;
            showSlides();
        });
    }
});